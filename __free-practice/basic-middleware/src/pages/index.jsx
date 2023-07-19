import Head from "next/head";

// components
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          width="100vw"
          height="100vh"
        >
          <Card width="350px" maxWidth="100%">
            <CardHeader>
              <Heading size="md">Login Page</Heading>
            </CardHeader>

            <CardBody>
              <Box>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input placeholder="First name" />
                </FormControl>
                <Box margin="2.5" />
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="First name" />
                </FormControl>
                <Box margin="3" />
                <Button colorScheme="teal">Log in</Button>
              </Box>
            </CardBody>
          </Card>
        </Flex>
      </main>
    </>
  );
}
