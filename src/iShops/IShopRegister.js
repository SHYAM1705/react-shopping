
import { Formik, useFormik } from "formik"
import axios from "axios";
import { Navigate, useNavigate, Link} from "react-router-dom";

export default function IShopRegister(){

    let navigate = useNavigate();
    let formik =useFormik({
        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Mobile:'',
            Email:''
        },
        onSubmit: values=>{
            axios.post("http://localhost:7000/registeruser", values);
            alert("Registered succesfully");
            navigate("/login");
        }
    })
    return(
        <div>
            <h2>Register User</h2>
            <form onSubmit={Formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" value={formik.values.UserId} name="UserId" onChange={formik.handleChange} /></dd>
                    <dt>UserName</dt>
                    <dd><input type="text" value={formik.values.UserName} name="UserName" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" value={formik.values.Password} name="Password" onChange={formik.handleChange} /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} name="Mobile" onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" value={formik.values.Email} name="Email" onChange={formik.handleChange} /></dd>
                </dl>
                <button type="submit">Register</button>
            </form>
            <h5><Link to="/login">Existing User?</Link></h5>
        </div>
    )
}