import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from './sidebar';
import axios from "axios";
import {} from './product.css';

function createData(
  name,
  calories,
  Fat,
  Carbs,
  protein
) {
  return { name, calories, Fat, Carbs, protein };
}


const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users" 
  });
export default function BasicTable() {
    const [list, setList] = React.useState([]);
 
    React.useEffect(() => {
       client.get('?_limit=10').then((response) => {
        setList(response.data);
       });
    }, []);
  return (
    <>
    <Sidebar />
    <div align="right">
    <TableContainer component={Paper} style={{ border: "1px solid rgba(0,0,0,0.2)", padding: 4 }}>
      <Table  sx={{ minWidth: 650, }} aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell >Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell >City</TableCell>
            <TableCell >Phone</TableCell>
            <TableCell >Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  >
          {list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.username}
                
              </TableCell>
             
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.address.city}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell>{row.website}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}