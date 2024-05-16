import { useState,useEffect } from "react"
import $ from "jquery";
import { useFormik } from "formik";


export default function JQueryAjaxDemo1(){

    const [users, setUsers]= useState([]);
    const [userError, setUserError]= useState('');

    const formik = useFormik({
        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Mobile:'',
            Email:''
        },
        onSubmit: values=>{
            alert(JSON.stringify(values));
            $.ajax({
                method:"POST",
                url:"http://localhost:7001/registeruser",
                data: values
            })
            alert("User Register");
        }

    })
    function VerifyUserId(e){
        for(var user of users){
            if(user.UserId==e.target.value){
                setUserError("UserId taken");
                
            }
        }

    }

    useEffect(()=>{
        $.ajax({
            method:"GET",
            url:"http://localhost:7001/users",
            success: function(response){
                setUsers(response);
            }
        })
    },[])

    return(
        <div className="container-fluid">
            <h2>userDetails</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onKeyUp={VerifyUserId} value={formik.values.UserId} onChange={formik.handleChange} name="UserId" /></dd>
                    <dd>{userError}</dd>
                    <dt>UserName</dt>
                    
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" value={formik.values.Email} onChange={formik.handleChange} name="Email" /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}