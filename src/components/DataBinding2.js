

import { useState } from 'react';

export function DataBinding2(){

    const [userName, setUserName] = useState('John');
 
    function handleUserName(e){
         setUserName(e.target.value);
    }

    return(
        <div className="container-fluid">
           <h2>Two Way Binding</h2>
           <dl>
            <dt>User Name</dt>
            <dd><input type="text" value={userName} onChange={handleUserName}  /></dd>
           </dl>
           <p>Hello ! {userName} </p>
        </div>
    )
}