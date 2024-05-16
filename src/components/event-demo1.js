export function EventDemo1(){


    return(
        <div className="container-fluid">
            <form onSubmit={(e)=> { e.preventDefault(); alert('Submit Clicked');}}>
                Name : <input type="text" name="UserName" /> <button type="submit">Submit</button>
            </form>
        </div>
    )
}
