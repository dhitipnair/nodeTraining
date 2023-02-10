function validate(){
    var uname=document.getElementById("uname");
    var pwd=document.getElementById("pwd");
    if(uname.value.trim() == "" )
    {
        //alert("Username cannot be blank")
        uname.style.border='3px solid red'
        document.getElementById("uname-error").innerHTML="Username cannot be blank"
        return false

    }
    else if(pwd.value.trim() == "")
        {
            pwd.style.border='3px solid red'
            document.getElementById("pwd-error").innerHTML="Password cannot be blank"
            return false
        }
    else{
        localStorage.setItem("username",uname.value);
        return true
    }
}
function errorChange(){
    var uname_error=document.getElementById("uname-error").value;
    var pwd_error=document.getElementById("pwd-error").value;
    if(uname_error!="")
    {
        uname.style.border='3px solid black'
        document.getElementById("uname-error").innerHTML=""

    }
    else if(pwd_error!=""){
        uname.style.border='3px solid black'
        document.getElementById("pwd-error").innerHTML=""

    }

}
function displayName(){
    document.getElementById("display").innerHTML=localStorage.getItem("username");
}