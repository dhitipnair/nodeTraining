import React from 'react'

function Driver(props) {
    console.log('Driver Initialization')
  return (
    <div className='Driver'>
        <p>{props.name}</p>
        <p>here{props.show}</p>
        {props.show ? props.name : 'No name' } 
    </div>
  )
}

export default React.memo(Driver)