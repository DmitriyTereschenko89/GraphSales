import React, { useState } from "react";
import '../app-chart/app-chart.css';
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { Button, Flex, Select } from "@mantine/core";
import { DatePickerInput, DatesProvider } from "@mantine/dates";
import AppGraph from './graph';
import { SaleClient } from "../../client/app-sale-client.ts";
import { SaleInterval } from "../../enums/SaleInterval.ts";
import { SalesDayInterval } from "../../services/sale-day-interval.ts";
import { SalesWeekInterval } from "../../services/sale-week-interval.ts";
import { SalesMonthInterval } from "../../services/sale-month-interval.ts";
import { SalesQuarterInterval } from "../../services/sale-quarter-interval.ts";


const AppChart = () => {
    const [none, flex] = ['none', 'flex'];
    const [typeDisplay, setTypeDisplay] = useState(none);
    const [data, setData] = useState([]);
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
                    const saleClient = new SaleClient();
                    saleClient.getSalesByPeriod(values.startPeriod, values.endPeriod)
                        .then((response) => {
                            let sales = [];
                            let saleInterval;
                            switch(values.period) {
                                case SaleInterval.Day:
                                    saleInterval = new SalesDayInterval();
                                    break;
                                case SaleInterval.Week:
                                    saleInterval = new SalesWeekInterval();
                                    break;
                                case SaleInterval.Month:
                                    saleInterval = new SalesMonthInterval();
                                    break;
                                default:
                                    saleInterval = new SalesQuarterInterval();
                                    break;            
                            }

                            sales = saleInterval.getSales(response);
                            setData(sales);
                            setTypeDisplay(flex);
                        })
                        .catch((error) => {
                            console.dir(error);
                        });
                })}>
                    <Flex
                        gap={'md'}
                        >
                        <Select
                            label='Time Period'
                            placeholder="pick value"
                            data={[SaleInterval.Day, SaleInterval.Week, SaleInterval.Month, SaleInterval.Quarter]}
                            key={sales.key('period')}
                            {... sales.getInputProps('period')}
                            withAsterisk
                            clearable/>
                        <DatesProvider
                            settings={{timezone: 'UTC'}}>
                            <DatePickerInput
                                __timezoneApplied
                                label="Start date"
                                placeholder="Pick date"
                                withAsterisk
                                key={sales.key('startPeriod')}
                                {... sales.getInputProps('startPeriod')}
                                className="date"
                                clearable
                            />
                        </DatesProvider>
                        <DatesProvider
                            settings={{timezone: 'UTC'}}>
                            <DatePickerInput
                                label="End date"
                                placeholder="Pick date"
                                withAsterisk
                                key={sales.key('endPeriod')}
                                {... sales.getInputProps('endPeriod')}
                                className="date"
                                clearable
                            />
                        </DatesProvider>
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
                <AppGraph salesData={data}/>
                <Button
                    style={{width: '15%', marginLeft: '80px', marginBottom: '20px'}}
                    >Reset Zoom</Button>
            </Flex> 
               
        </Flex>        
    );
};

export default AppChart;
