import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Registration from './Registration';
import Success from './Success';
const router=createBrowserRouter([
  {path:'/', element:<Login />},
  {path:'/registration',element:<Registration />},
  {path:'/success', element:<Success />}
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
