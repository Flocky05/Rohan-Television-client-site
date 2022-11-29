import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Router';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <div className="m-20">
      <Toaster></Toaster>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>

    </div>
  );
}

export default App;
