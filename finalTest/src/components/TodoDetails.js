import React from 'react'
//import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function TodoDetails({product}) {
  return (
    <Box sx={{ boxShadow: 1, m: 2, p: 2 }}>
      <div className='productWrap'>
          {/* TODO */}
          <div className='todoDetails'>                  
            <h2>{product.title}</h2>
            <p>{product.completed}</p>
            
          </div>
      </div>
    </Box>
  )
}

export default TodoDetails