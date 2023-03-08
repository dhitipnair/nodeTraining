import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Registration from './components/registration';
import Success from './components/success';
import Password from './components/password';

const router=createBrowserRouter([
  {path:'/', element:<Login />},
  {path:'/registration',element:<Registration />},
  {path:'/success', element:<Success />},
  {path:'/password', element:<Password />}

])
function App() {
 return <RouterProvider router={router} />;
 
}

export default App;
