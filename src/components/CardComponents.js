import React from "react"

export default class CardComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card m-2 p-2" style={{width:'200px'}}>
                <img src={this.props.product.image} className="card-img-top" height="150"/>
                <div className="card-header" style={{height:'150px'}}>
                    <p>{this.props.product.title}</p>
                </div>
            </div>
        )
    }
}