import { useEffect, useState } from "react";
import $ from "jquery";


export function ApiDataBinding()
{

    const [products, setProducts] = useState([]);

    function LoadData(){
        $.ajax({
            method: 'get',
            url: 'https://fakestoreapi.com/products',
            success:(data)=> {
                setProducts(data);
            }
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
                        <th>Title</th>
                        <th>Preview</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.price}</td>
                                <td>{product.title}</td>
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
