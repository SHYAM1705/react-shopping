import "./DataBinding.css";
export function DataBinding(){

    var email = "john_nit@google.com"

    return(
        <div className="container-fluid">
           <div className="mt-4">
                <h1> Your Id  <span className="text-success">{ email.substring(0, email.indexOf("@")) }</span> Registered At  <span className="text-primary">{email.slice(email.indexOf("@")+1)}</span> </h1>
                <div>
                  { (email.endsWith("outlook.com")?"You have Microsoft Account": "You have google account") }
                
                </div>
           </div>
        </div>
    )
}
