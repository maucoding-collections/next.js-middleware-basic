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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main>
        <Box margin="10px auto 0" width="700px" maxWidth={"100%"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box margin="30px" />
          <Heading>Dashboard</Heading>
          <Box margin="20px" />
          <Text fontSize="xl" marginBottom="10px">
            Welcome to Dashboard.
          </Text>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            molestie velit a eleifend molestie. Nullam tellus mi, placerat at
            ligula id, maximus vehicula dui. Fusce sodales dui sit amet lectus
            tempus aliquam. Vivamus ex odio, condimentum vitae egestas eget,
            eleifend ut risus. Mauris suscipit nulla at ultrices facilisis.
            Etiam vitae odio mi. Pellentesque ullamcorper est venenatis nisi
            ultrices maximus. Integer suscipit ex in mi tincidunt ullamcorper.
          </Text>
          <br />
          <a href="">Logout</a>
        </Box>
      </main>
    </>
  );
}
