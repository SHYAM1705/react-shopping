import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useCaptcha } from "../hooks/useCaptcha";

export default function LoginUser(){
       
    const [cookie,setCookie,removeCookie]= useCookies(["username"]);
    const[userDetails,setUserDetails]= useState({Username:'',Password:''});
    const {code} = useCaptcha();

    function HandleUserName(e){
        setUserDetails({
            Username:e.target.value,
            Password:userDetails.Password
        })
    }
    function HandlePassword(e){
        setUserDetails({
            Username:userDetails.Username,
            Password:e.target.value
        })
    }

    function HandleLogin(){
        setCookie("username",userDetails.Username,{path:"/", expires:new Date("2024-01-05")});
        alert("Login success");
    }

    function HandleSignout(){
        removeCookie("username");
        alert("SignOut Successfully");
    }
    /*useEffect(()=>{
        if(cookie.username==undefined) 
            alert("Please Login");
    },[])*/
    return(
        <div>
            <dl>
                <dt>Username</dt>
                <dd><input onChange={HandleUserName} type="text"></input></dd>
                <dt>Password</dt>
                <dd><input onChange={HandlePassword} type="text"></input></dd>
                <dt>Verify Code</dt>
                <dd>{code}</dd>
            </dl>
            <button onClick={HandleLogin} className="btn btn-info">Login</button>
            <div>
            <button onClick={HandleSignout} className="btn btn-link">Signout</button>
            <h2>Hello ! {cookie.username}</h2>
        </div>
        </div>
       
    )
}