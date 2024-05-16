import { useState,useEffect } from "react"
import $ from "jquery";
import { useFormik } from "formik";


export default function JQueryAjaxTest(){

    const [products, setProducts]= useState([]);
    const [userError, setUserError]= useState('');

    const formik = useFormik({
        initialValues:{
            id:'',
            title:'',
            price:0,
            description:'',
            category:''
        },
        onSubmit: values=>{
            alert(JSON.stringify(values));
            $.ajax({
                method:"POST",
                url:"http://localhost:7001/addproduct",
                data: values
            })
            alert("Product added");
        }

    })
    function VerifyProductId(e){
        for(var user of products){
            if(user.id==e.target.value){
                setUserError("Id already taken");
                
            }
        }

    }

    useEffect(()=>{
        $.ajax({
            method:"GET",
            url:"http://localhost:7001/products",
            success: function(response){
                setProducts(response);
            }
        })
    },[])

    return(
        <div className="container-fluid">
            <h2>productDetails</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Id</dt>
                    <dd><input type="text" onKeyUp={VerifyProductId} value={formik.values.id} onChange={formik.handleChange} name="id" /></dd>
                    <dd>{userError}</dd>
                    <dt>Title</dt>
                    
                    <dd><input type="text" value={formik.values.title} onChange={formik.handleChange} name="title" /></dd>
                    <dt>Price</dt>
                    <dd><input type="number" value={formik.values.price} onChange={formik.handleChange} name="price" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.description} onChange={formik.handleChange} name="description" /></dd>
                    <dt>Category</dt>
                    <dd><input type="text" value={formik.values.category} onChange={formik.handleChange} name="category" /></dd>
                </dl>
                <button className="btn btn-primary">Add product</button>
            </form>
        </div>
    )
}