

import { useState } from 'react';

export function DataBinding4(){

    const [product, setProduct] = useState({Name:'', Price:0, City:'', Stock:false});
    const [formData, setFormData] = useState({Name:'', Price:0, City:'', Stock:false});
   
    function handleNameChange(e){
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }

    function handlePriceChange(e){
        setProduct({
            Name: product.Name,
            Price: e.target.value,
            City: product.City,
            Stock: product.Stock
        })
    }

    function handleCityChange(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: e.target.value,
            Stock: product.Stock
        })
    }

    function handleStockChange(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: e.target.checked
        })
    }

     function handleSubmitClick(){
         setFormData(product);
     }


    return(
        <div className="container-fluid">
           <div className='row mt-4'>
                <div className='col-3'>
                    <dl>
                        <h3>Register Product</h3>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleNameChange} className='form-control' /></dd>
                        <dt>Price</dt>
                        <dd><input type="number" onChange={handlePriceChange} className='form-control' /></dd>
                        <dt>Shipped To</dt>
                        <dd>
                            <select className='form-select' onChange={handleCityChange}>
                                <option>Select City</option>
                                <option>Delhi</option>
                                <option>Hyd</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className='form-switch'>
                            <input onChange={handleStockChange} type="checkbox" className='form-check-input' /> <label>Available</label>
                        </dd>
                    </dl>
                    <button onClick={handleSubmitClick} className='btn btn-primary w-100'>Submit</button>
                </div>
                <div className='col-9 ps-4'>
                    <h3>Product Details</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd>{formData.Name}</dd>
                        <dt>Price</dt>
                        <dd>{formData.Price}</dd>
                        <dt>Shipped To</dt>
                        <dd>{formData.City}</dd>
                        <dt>Stock</dt>
                        <dd> {(formData.Stock==true)?"Available":"Out of Stock"} </dd>
                    </dl>
                </div>
           </div>
        </div>
    )
}

