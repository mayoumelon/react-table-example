import type { FC } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const Layout: FC = () => {
  return (
    <>
      <header>
        <Box p="2" border="1px" borderColor="gray.200">
          <Container maxW="container.xl">
            <Heading as="h1" size="lg" textColor="cyan.700">
              {title}
            </Heading>
          </Container>
        </Box>
      </header>
      <main>
        <Container maxW="container.xl">
          <Outlet />
        </Container>
      </main>
      <footer>
        <Container maxW="container.xl">
          <Flex justifyContent="end">
            <Text color="gray.500">&copy; 2022 mayoumelon</Text>
          </Flex>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
