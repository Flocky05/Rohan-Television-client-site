import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Router';

function App() {
  return (
    <div className="m-20">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
