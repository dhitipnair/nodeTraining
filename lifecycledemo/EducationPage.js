import React from 'react'
import { useNavigate } from 'react-router-dom'

function EducationPage() {
    const navigate = useNavigate();
    const navigateHandler=()=>{
        navigate('/',{state:{name:'John'}})
    }
  return (
    <div>
        <p>EducationPage</p>
        {/* <button onClick={navigateHandler}>Go back to Home Page</button> */}

    </div>
  )
}

export default EducationPage