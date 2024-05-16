import axios from "axios"
import { useEffect, useRef, useState } from "react"

export function IntervalDemo(){

    const [product, setProduct] = useState({});
    const [status, setStatus] = useState('');
    let ProductId = useRef(1);
    let Thread = useRef(null);

    function LoadProduct(id){
         axios.get(`https://fakestoreapi.com/products/${id}`)
         .then(res=> {
            setProduct(res.data);
         })
    }

    function LoadProductAuto(){
        ProductId.current++;
        axios.get(`https://fakestoreapi.com/products/${ProductId.current}`)
         .then(res=> {
            setProduct(res.data);
         })
    }

    useEffect(()=>{
        LoadProduct(ProductId.current)
    },[])

    function NextClick(){
        ProductId.current = ProductId.current + 1;
        LoadProduct(ProductId.current);
    }

    function PrevClick(){
        ProductId.current = ProductId.current - 1;
        LoadProduct(ProductId.current);
    }

    function PlayClick(){
       Thread.current =  setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show - Started');
    }
    function PauseClick(){
        clearInterval(Thread.current);
        setStatus('Slide Show - Paused');
    }

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card p-2 w-50 mt-4">
                <div className="card-header text-center">
                    {product.title}
                    <br />
                    {status}
                </div>
                <div className="card-body">
                    <div className="row">
                      <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                            <button onClick={PrevClick} className="bi bi-chevron-left btn"></button>
                      </div>
                      <div className="col-10">
                        <img width="100%" src={product.image} height="300" />
                      </div>
                      <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                        <button onClick={NextClick} className="bi bi-chevron-right btn "></button>
                      </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={PlayClick} className="btn btn-primary me-2 bi bi-play"></button>
                    <button onClick={PauseClick} className="btn btn-danger bi bi-pause"></button>
                </div>
            </div>
        </div>
    )
}
