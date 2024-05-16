import { useFormik } from "formik";
import * as yup from "yup";

export default function YupValidation()
{
   
    const formik=useFormik({
        initialValues:{
            Username:'',
            Email:'',
            Age:0
        },
        validationSchema:yup.object({
                    Username: yup.string()
                            .required('name required')
                            .min(4, 'name too short')
                            .max(10, "name too long"),
                    Email: yup.string()
                            .required('email required') 
                            .email('Invalid Email'),
                    Age: yup.number()
                            .required('age required')
        }),
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register</h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input {...formik.getFieldProps("Username")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Username}</dd>
                    <dt>Email</dt>
                    <dd><input {...formik.getFieldProps("Email")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Age</dt>
                    <dd><input {...formik.getFieldProps("Age")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}