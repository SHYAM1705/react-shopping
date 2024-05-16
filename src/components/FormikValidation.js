import { useFormik } from "formik";


export default function FormikValidation()
{

    function ValidateUser(userDetails)
    {
        const errors = {};
        if(userDetails.UserName===""){
            errors.UserName = "User Name Required";
        }
        else if(userDetails.UserName.length<4){
             errors.Username="Username is too short";
        }
        else if(userDetails.UserName.length>=10){
            errors.UserName="Username is to Long";
        }


        if(userDetails.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile="";
        } else {
            errors.Mobile="Invalid Mobile";
        }

        if(userDetails.Email==""){
            errors.Email ="Email Required";
        }
        else if(userDetails.Email.indexOf("@")<=2){
            errors.email="Invalid email";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Mobile: '',
            Email:''
        },
        validate: ValidateUser,
        onSubmit: values=> {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>Email</dt>
                    <dd><input name="Email" onChange={formik.handleChange} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}
