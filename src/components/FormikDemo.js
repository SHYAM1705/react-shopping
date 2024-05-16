import { Formik,useFormik } from "formik";

export default function FormikDemo(){

    const formik=useFormik({
        initialValues:{
            Username:'',
            Password:'',
            City:'',
            Subscribe:true
        },
        onSubmit: values => {
            alert(`${values.Username}\nSubscription: ${(values.Subscribe==true)?"Subscribed":"Not Subscribed"}`);
        }

    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="Username" value={formik.values.Username} onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange} /></dd>
                <select name="city" value={formik.values.City} onChange={formik.handleChange}>
                    <option>Delhi</option>
                    <option>Hyd</option>
                </select>
                <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" name="Subscribe" onChange={formik.handleChange} checked={formik.values.Subscribe} type="checkbox" /> Yes</dd>
                </dl>
                <button>Submit</button>
            </form>

        </div>
    )
} 