import React, {useState} from 'react';
import {Button, FormControl, FormLabel, Input, InputGroup, VStack} from "@chakra-ui/react";
function Login(props) {
    const [name, setName] = useState();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <VStack spacing='5px'>
            <FormControl id="username" isRequired>
                <FormLabel>UserName</FormLabel>
                <Input placeholder="Enter Your User Name" onChange={(e) => setName(e.target.value)}/>
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter Your User Email" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel> Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show?"text":"password"}
                        placeholder="Enter Your User Password"
                        onChange={(e) => setPassword(e.target.value)}/>
                </InputGroup>
            </FormControl>
            <Button colorScheme='blue' width='100%' style={{marginTop:15}}>
                Login
            </Button>
        </VStack>
    );
}

export default Login;