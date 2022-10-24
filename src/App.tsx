import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from 'components/Home';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
