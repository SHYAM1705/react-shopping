
import { useState } from "react"

export function ClassBinding(){

    const [theme, setTheme] = useState('w-25');
    const [btnClass, setBtnClass] = useState('btn btn-dark w-100');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('w-25 bg-dark text-white');
            setBtnClass('btn btn-light w-100');
        } else {
            setTheme('w-25');
            setBtnClass('btn btn-dark w-100');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center mt-4">
           
            <form className={theme}>
                <h3 className="bi bi-person">User Login</h3>
                <div className="form-switch">
                <input onChange={handleThemeChange} type="checkbox" className="form-check-input"/> <label>Dark Theme</label>
                </div>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text"  className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className={btnClass}>Login</button>
            </form>
        </div>
    )
}

