import React from 'react'
import { Link } from 'react-router-dom'
import {useLocation,useParams} from 'react-router-dom'

function HomePage() {
    //let location=useLocation();
    let id=useParams();
  return (
    <div>
        {/* <p>Home Page,{location?.state.name} id{id}</p> */}
        <p>Go to <Link to="/education">Education</Link>{id}</p>
    </div>
  )
}

export default HomePage