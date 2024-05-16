import { useEffect, useState } from "react"


export function StyleDemo(){

    const [errorStyle, setErrorStyle] = useState({border:''});

    function handleNameChange(e){
         console.log(e.target.value);
         
         if(e.target.value==""){
             setErrorStyle({
                border:'2px solid red',
                outline:'none'
             })
         } else {
            setErrorStyle({
                border: '2px solid green',
                outline: 'none'
            })
         }
    }
   

    function handleNameFocus(){
        setErrorStyle({
            border:'none',
            outline: 'none'
        })
    }


    return(
        <div className="container-fluid">
            <h3 >Register</h3>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text" onFocus={handleNameFocus} style={errorStyle} onChange={handleNameChange} placeholder="Name required" />
                </dd>
            </dl>
        </div>
    )
}
