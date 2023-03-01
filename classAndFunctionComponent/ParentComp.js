import React, { useState } from "react";
import Loginform from "./Loginform";

function ParentComp(props) {
  const [getCompany, setCompany] = useState("INFOSYS");
  const buttonClick = () => {
    alert("Logged in successfully");
    setCompany("UST GLOBAL");
  };
  return (
    <>

      <center>
        <h1>{getCompany}</h1>
      </center>
      <Loginform login="Login" onButtonClick={buttonClick} />
    </>
  );
}

export default ParentComp;
