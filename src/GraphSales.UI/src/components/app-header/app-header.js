import '../app-header/app-header.css';
import Header from '../ui-components/header-name';
import { Flex } from '@mantine/core';

const AppHeader = () => {
    return (
        <Flex
            justify={'flex-start'}
            className='header'>
            <Header />
        </Flex>
    )
};

export default AppHeader;
