import React, {useState} from 'react';
import {FormControl, FormLabel, VStack, Input, InputGroup, InputRightElement, Button, Stack} from "@chakra-ui/react";
function Signup(props) {
    const [name, setName] = useState();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [profile, setProfile] = useState();
    const handleClick = () => setShow(!show);
    const handleSubmit = () => {
      
    }
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
            <FormControl id="confirm-password" isRequired>
                <FormLabel>ConfirmPassword</FormLabel>
                <Input
                    type={show?"text":"password"}
                    placeholder="retype your Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </FormControl>
            <Stack direction='row' spacing={4}>
                <Button colorScheme='blue' width='100%' style={{marginTop:15}}>
                    Sign-Up
                </Button>
            </Stack>
        </VStack>
    );
}

export default Signup;