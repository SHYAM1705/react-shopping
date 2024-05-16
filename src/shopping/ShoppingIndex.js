
import { BrowserRouter as Router ,Routes ,Route,Link } from "react-router-dom";
import Electronics from "./Electronics";
import Footwear from "./Footwear";
import Fashion from "./Fashion";
import ShoppingComponent1 from "../components/ShoppingComponent1";

export default function ShoppingIndex(){

    function HTML(){
        return(
            <div>
                <h2>HTML</h2>
                <h2>It is a markup language...</h2>
            </div>
        )
    }
    function CSS(){
        return(
            <div>
                <h2>CSS</h2>
                <h2>It is for styling...</h2>
            </div>
        )
    }
    function JS(){
        return(
            <div>
                <h2>JAVA SCRIPT</h2>
                <h2>It is a prog language...</h2>
            </div>
        )
    }
    return(
        <div className="container-fluid">
            <Router>
                <ul>
                    <li><Link to="/electronics">Electronics</Link></li>
                    <li><Link to="/footwear">Footwear</Link></li>
                    <li><Link to="/fashion">Fashion</Link></li>
                    <li><Link to="/shoppingcompo">Shopping</Link></li>
                </ul>
                     <hr></hr>
                
                
            </Router>

        </div>
    )
}