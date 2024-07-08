import React, { useState } from "react";
import '../app-chart/app-chart.css';
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { Button, Flex, Loader, Select, Title, Text, Dialog, rem } from "@mantine/core";
import { DatePickerInput, DatesProvider } from "@mantine/dates";
import { IconExclamationCircle } from "@tabler/icons-react";
import AppGraph from './graph.tsx';
import { SaleClient } from "../../client/app-sale-client.ts";
import { SaleInterval } from "../../enums/SaleInterval.ts";
import { SalesDayInterval } from "../../services/sale-day-interval.ts";
import { SalesWeekInterval } from "../../services/sale-week-interval.ts";
import { SalesMonthInterval } from "../../services/sale-month-interval.ts";
import { SalesQuarterInterval } from "../../services/sale-quarter-interval.ts";


const AppChart = () => {
    const [none, flex] = ['none', 'flex'];
    const [opened, setOpened] = useState(false);
    const [popupText] = ['An unexpected error occurred, please try again later.'];
    const [loader, setLoader] = useState(none);
    const [noData, setNoData] = useState(none);
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
                <Dialog 
                    bg={'red'}
                    opened={opened}
                    size={'md'} 
                    radius={'md'}
                    position={{ top: 20, right: 20}}
                    transitionProps={{transform: 0, duration: 200}}
                    style={{border:'0.5px solid rgba(232, 237, 242, 0.3)'}}>
                <Flex
                justify={'center'}>
                        <IconExclamationCircle 
                            style={{width: rem(30), height: rem(30), color: '#E8EDF2'}}/>
                        <Text
                            c={'#E8EDF2'} 
                            align='center'
                            size="sm" 
                            mb="xs" 
                            fw={500}>
                            {popupText}
                        </Text>
                    </Flex>
                </Dialog>
                <form onSubmit={sales.onSubmit((values) => {
                    setTypeDisplay(none);
                    setNoData(none);
                    setLoader(flex);
                    const saleClient = new SaleClient();
                    saleClient.getSalesByPeriod(values.startPeriod, values.endPeriod)
                        .then((response) => {
                            let sales = [];
                            setData(sales);
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
                            setLoader(none);
                            if (sales.length === 0) {
                                setNoData(flex);
                            }
                            else {
                                setData(sales);
                                setTypeDisplay(flex);
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            setLoader(none);
                            setOpened(true);
                            setTimeout(() => {
                                setOpened(false);
                            }, 5000);
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
                display={noData}
                style={{position: "relative", top: "50%", transform: "translateY(400%)"}}>
                <Title size={'h2'}>No data to show.</Title>
            </Flex>    
            <Flex
                style={{position: "relative", top: "50%", transform: "translateY(200%)"}}
                display={loader}>
                <Loader type={"oval"} size={100} />
            </Flex>    
            <Flex 
                display={typeDisplay}>                
                <AppGraph salesData={data}/>                
            </Flex> 
               
        </Flex>        
    );
};

export default AppChart;
