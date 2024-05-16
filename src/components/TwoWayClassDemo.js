import React from "react";

export default class TwoWayClassDemo extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            name:'product name',
            price:1233.44,
            stock:"false",
            cities: ['delhi','hyd']
        };
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>Product details</h2>
                <h3>{this.state.name}</h3>

            </div>
        )
    }
}