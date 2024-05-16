import { useState,useEffect } from "react"
import $ from "jquery";


export default function JQueryAjaxDemo(){

    const [users, setUsers]= useState([]);

    useEffect(()=>{
        $.ajax({
            method: "GET",
            url:"http://localhost:7001/users",
            success:function(response){
                setUsers(response);
            }
        })
    },[])

    return(
        <div className="container-fluid">
            <h2>userDetails</h2>
            <ol>
                {
                    users.map(user=>
                         <li key={user.UserId}>{user.UserId}</li>
                    )
                }
            </ol>
        </div>
    )
}