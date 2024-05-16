import React from "react";
import "./login.css";

export function Login()
{
    return(
        <React.Fragment>
            <main>
                <form>
                    <h3>User Login</h3>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" /></dd>
                    </dl>
                    <button>Login</button>
                </form>
            </main>
        </React.Fragment>
    )
}