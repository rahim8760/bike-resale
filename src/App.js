import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route/Route';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="sm:w-10/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
