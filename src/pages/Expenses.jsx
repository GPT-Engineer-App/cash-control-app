import { Container, Text, VStack } from "@chakra-ui/react";

const Expenses = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Expenses Page</Text>
        <Text>Track your expenses here.</Text>
      </VStack>
    </Container>
  );
};

export default Expenses;
