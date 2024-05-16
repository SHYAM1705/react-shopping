
import { useEffect, useReducer,useState } from "react"
import { UseFetchData } from "../hooks/useFetchData";

var initialState ={'likes':0,'dislikes':0};

function reducer(state, action){
    switch(action.type)
    {
        case 'like':
            return {'likes':parseInt(state.likes)+1,'dislikes':state.dislikes};
        case 'dislike':
            return{'dislikes':parseInt(state.dislikes)+1 ,'likes':state.likes};
    }
}

export default function ReducerDemo(){

    const[state,dispatch]= useReducer(reducer,initialState); 
    const {data } = UseFetchData('http://fakestoreapi.com/products/3');

    /*
    useEffect(()=>{
        fetch('http://fakestoreapi.com/products/2')
        .then(response=>response.json())
        .then(data=>{
            setProduct(data);
        }
        )
    })*/

    function HandleLike(){
        dispatch({type:'like'});
    }
    function HandleDislike(){
        dispatch({type:'dislike'});
    }

    return(
        <div className="container-fluid">
            <div className="card p-2" style={{height:'400px',width:'300px'}}>
                <img src={data.image} className="card-img-top" height='200' />
                <div className="card-body">
                    <h2>{data.title}</h2>
                </div>
                <div className="card-footer">
               {state.likes}<button className="bi bi-hand-thumbs-up btn btn-info" onClick={HandleLike}></button>
                {state.dislikes}<button className="bi bi-hand-thumbs-down btn btn-danger" onClick={HandleDislike}></button>

                </div>    
        </div>
            
        </div>
    )
}