
import {useState,useEffect} from "react";
import axios from "axios";

export function ApiDataBinding1(){
    const [products, setProducts] = useState([]);

    function LoadData(){
         axios.get("http://fakestoreapi.com/products")
         .then(response=> {
             setProducts(response.data);
         })
    }

    useEffect(()=>{
        LoadData();
    },[]);

    return(
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.price}</td>
                                <td>
                                    <img src="{product.image}" width={100} height={100} alt="" />
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
