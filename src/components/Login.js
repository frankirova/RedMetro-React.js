import React from 'react';
import {  Heading, Input, Flex, Button } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex height="100vh" alignItems='center'justifyContent='center'>
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="fran@gmail.com.ar" variant="failed" mb={3} type="email"/>
            <Input placeholder="********" variant="failed" mb={6} type="password"/>
            <Button colorScheme="teal">Log in</Button>
        </Flex>
    </Flex>
  )
}

export default Login