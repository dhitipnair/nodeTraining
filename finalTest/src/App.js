import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Registration from './components/registration';
import Success from './components/success';
import Password from './components/password';
import Post  from './components/post';
import ProductInfo  from './components/productInfo';
import UsersListing  from './components/UsersListing';
import Todo from "./components/Todo";




const router=createBrowserRouter([
  {path:'/', element:<Login />},
  {path:'/registration',element:<Registration />},
  {path:'/success', element:<Success />},
  {path:'/password', element:<Password />},
  {path:'/post', element:<Post />},
  {path:'/productInfo', element:<ProductInfo />},
  {path:'/UsersListing', element:<UsersListing />},
  { path: "/todo", element: <Todo /> },
  

])
function App() {
 return <RouterProvider router={router} />;
 
}

export default App;
