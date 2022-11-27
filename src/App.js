import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="m-20">
      <Toaster></Toaster>
      <RouterProvider router={routes}></RouterProvider>

    </div>
  );
}

export default App;
