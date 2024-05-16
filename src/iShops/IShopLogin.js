import axios from "axios"
import { Formik, useFormik } from "formik"
import { useState,useEffect } from "react";


export default function IShopLogin(){
    const[state,setState]= useState({});

    useEffect(values=>{
        var result= axios.get("http://localhost:7000/users");
         
        })



    let formik = useFormik({
        initialValues:{
            UserName:'',
            Password:''
        },
        onSubmit: values=>{
              

        }
    })

    return(
        <div>
            <h2>Login User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" value={formik.UserName} onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" name="Password" value={formik.Password} onChange={formik.handleChange} /></dd>
                </dl>
                <button type="submit" onSubmit={formik.handleSubmit}>Login</button>
            </form>
        </div>
    )
}