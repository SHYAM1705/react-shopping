import { Formik, Field,ErrorMessage,Form } from "formik";
import * as yup from 'yup';

export default function YupValidationComponent(){
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{
                Username:'',
                Email:'',
                Age:0
            }}
            validationSchema={
                yup.object({
                    Username:yup.string().required().min(4,"Too short").max(10,"too long"),
                     Email:yup.string().required().email(),
                     Age:yup.number().required()
                })
            }
            onSubmit={values=>{
                alert(JSON.stringify(values))
            }}
            >
                {
                props => 
                <Form>
                    {
                        <div>
                            <dl>
                                <dt>Username</dt>
                                <dd><Field type="text" name="Username"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Username"></ErrorMessage></dd>
                                <dt>Email</dt>
                                <dd><Field type="text" name="Email"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                                <dt>Age</dt>
                                <dd><Field type="number" name="Age"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                            </dl>
                            <button className="btn btn-danger" disabled={props.isValid?false:true}>Register</button>
                        </div> 
                    }
                </Form>
                  }
            </Formik>
        </div>
    )

}