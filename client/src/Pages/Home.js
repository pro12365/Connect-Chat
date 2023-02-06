import React from 'react';
import {Container,Text,Tab, TabList, Textarea, TabPanel, TabPanels, Tabs, Center,Box} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import  Signup from "../components/Authentication/Signup";
const Home = () => {
        return (
            <Container maxW="xl" centerContent>
                <Box
                    d="flex"
                    justifyContent="center"
                    p={3}
                    bg="white"
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg"
                    borderWidth="1px"
                    alignContent="center"
                ><Center bg='blue.200' fontSize='4xl' color='white.500'>
                    <Text>
                        Connect
                    </Text>
                </Center>
                </Box>
                <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" te>
                    <Tabs variant='soft-rounded'>
                        <TabList>
                            <Tab width='50%'
                            >Login</Tab>
                            <Tab width='50%'
                            >Sign-UP</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login></Login>
                            </TabPanel>
                            <TabPanel>
                                <Signup/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
        );
    }
    export default Home;
