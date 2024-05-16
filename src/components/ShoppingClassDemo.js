import React from "react";
import  CardComponent  from "./CardComponents";

export default class ShoppingClassDemo extends React.Component{
      constructor(props){
        super(props);
        this.state={
            categories:[],
            products:[]
        }
        this.handleCtegoryChange=this.handleCtegoryChange.bind(this);
      }
      GetCategories(){
        fetch(`http://fakestoreapi.com/products/categories`)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                categories:data
            })
        })
      }

      GetProducts(url){
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                products:data
            })
        })
      }


      componentDidMount(){
        this.GetCategories();
        this.GetProducts('http://fakestoreapi.com/products');
      }

      handleCtegoryChange(e){
        this.GetProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
      }

 render(){
    return(
        <div className="conatiner-fluid">
            <header className="bg-danger text-white text-center">
               <span className="bi bi-cart"></span>Shopping Cart
            </header>
            <section className="row">
                <nav className="col-3">
                    <h2>Select a category</h2>
                    <select onChange={this.handleCtegoryChange} className="form-select">
                     {
                        this.state.categories.map(category=>
                            <option key={category}>{category}</option>
                        )
                     }
                    </select>
                </nav>
                <main className="col-9" >
                    <div className="d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
                         {
                            this.state.products.map(product=>
                            < CardComponent key={product.id} product={product}/>
                         )
                         }
                    </div>

                </main>

            </section>
        </div>
    )
 }
}