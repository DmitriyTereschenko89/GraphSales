import { Flex, Title } from "@mantine/core";

const Header = () => {
    return (
       <Flex
        justify={"center"}
        align={"center"}>
        <Title order={1} size='h2' style={{marginLeft: "35px"}}>Graph Sales</Title>
       </Flex>
    );
};

export default Header;
