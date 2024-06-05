import { Container, Text, VStack } from "@chakra-ui/react";

const Investments = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Investments Page</Text>
        <Text>Track your investments here.</Text>
      </VStack>
    </Container>
  );
};

export default Investments;
