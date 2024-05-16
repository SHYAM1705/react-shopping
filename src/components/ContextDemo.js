import React, {useContext, useState} from "react"

var userDetailsContext = React.createContext(null);

export default function ContextDemo()
{
    const [userDetails, setUserDetails] = useState({
        UserName: '',
        Email:''
    })

    function HandleUser(e){
        setUserDetails({
            UserName: e.target.value,
            Email: userDetails.Email
        })
    }
    function HandleEmail(e){
        setUserDetails({
            UserName: userDetails.Email,
            Email: e.target.value
        })
    }
    function HandleSet(){
        setUserDetails({
            UserName: userDetails.UserName,
            Email: userDetails.Email
        })
    }

    return(
        <userDetailsContext.Provider value={userDetails}>
        <div className="container-fluid">
                <h1>Site Index - {userDetails.UserName}</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={HandleUser} type="text"/></dd>
                    <dt>Email</dt>
                    <dd><input onChange={HandleEmail} type="email"/></dd>
                </dl>
                <button onClick={HandleSet}>Set Data</button>
                <HeaderComponent />
        </div>
        </userDetailsContext.Provider>
       
    )
}

function HeaderComponent(){
    var userdetails = useContext(userDetailsContext);
    return(
        <div className="bg-info text-white" style={{height:'150px', padding:'10px'}}>
            <h2>Home - {userdetails.UserName} </h2>
            <NavbarComponent />
        </div>
    )
}
function NavbarComponent() {
    var userdetails = useContext(userDetailsContext);
    return(
        <div className="btn-toolbar bg-dark text-white justify-content-between">
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-dark">{userdetails.Email}</button>
            </div>
        </div>
    )
}
