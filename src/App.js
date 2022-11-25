import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Router';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('here is your toast');
function App() {
  return (
    <div className="m-20">
      <RouterProvider router={routes}></RouterProvider>
      <button onClick={notify}> Make me a toast</button>
    </div>
  );
}

export default App;
