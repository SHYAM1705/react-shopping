

export function EventDemo(){

    function ContainerClick(){
        alert('Container Clicked');
    }

    function ButtonClick(e){
        alert('ButtonClicked');
        e.StopPropagation();
    }

    return(
        <div className="container-fluid">
            <div className="m-4 p-4 bg-warning" onClick={ContainerClick}>
                <h3>Parent</h3>
                <button className="btn btn-dark" onClick={ButtonClick}>Button</button>
            </div>
        </div>
    )
}
