import React, { useState } from "react";
import '../app-chart/app-chart.css';
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { Button, Flex, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import AppGraph from './graph';


const AppChart = () => {
    const [typeDisplay, setTypeDisplay] = useState("flex");
    const sales = useForm({
        mode: 'uncontrolled',
        initialValues: {
            period: 0,
            startPeriod: null,
            endPeriod: null
        },
        validate: {
            period: hasLength({min: 0}, 'choose time period'),
            startPeriod: isNotEmpty('choose start period'),
            endPeriod: isNotEmpty('choose end period')
        }
    })

    return (
        <Flex
            flex={1}
            direction={'column'}
            align={'center'}>
                <form onSubmit={sales.onSubmit((values) => {
                    setTypeDisplay('flex');
                    console.log(values.period);
                    console.log(values.startPeriod);
                    console.log(values.endPeriod);
                })}>
                    <Flex
                        gap={'md'}
                        >
                        <Select
                            label='Time Period'
                            placeholder="pick value"
                            data={['Day', 'Week', 'Month', 'Quarter']}
                            key={sales.key('period')}
                            {... sales.getInputProps('period')}
                            withAsterisk
                            clearable/>
                        <DatePickerInput
                            label="Start date"
                            placeholder="Pick date"
                            withAsterisk
                            key={sales.key('startPeriod')}
                            {... sales.getInputProps('startPeriod')}
                            className="date"
                            clearable
                        />
                        <DatePickerInput
                            label="End date"
                            placeholder="Pick date"
                            withAsterisk
                            key={sales.key('endPeriod')}
                            {... sales.getInputProps('endPeriod')}
                            className="date"
                            clearable
                        />
                        <Flex
                            justify={'center'}
                            style={{marginTop: '13px'}}>
                            <Button
                                justify={'center'}
                                mt={'sm'}
                                type="submit">Submit</Button>
                        </Flex>
                    </Flex>
                </form>
            <Flex 
                direction={'column'}
                gap={'xs'}
                display={typeDisplay}>
                <AppGraph />
                <Button
                    style={{width: '15%', marginLeft: '80px', marginBottom: '20px'}}
                    >Reset Zoom</Button>
            </Flex> 
               
        </Flex>        
    );
};

export default AppChart;
