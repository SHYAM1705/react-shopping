import { useState,useEffect } from "react";

export default function ShoppingComponent(){
    const [categories,setCategories]= useState([]);

    function LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            setCategories('data');
        })
    }
    useEffect(()=>{
        LoadCategories();
    },[])


    return(
    <div className="container-fluid">
        <header>
          <div className="bg-danger text-center text-white w-100 p-3">
            Shopping Component
          </div>
        </header>
        <section className="row">
            <nav className="col-3">
                <div>
                    <lable>Select Category</lable>
                    <div className="p-3">
                        <select className="form-select">
                            {
                                categories.map(category=>
                                    <option key={category}>{category.toUpperCase()}</option>)
                            }

                        </select>
                    </div>
                </div>

            </nav>
            <main className="col-9">

            </main>
        </section>
    </div>)
}