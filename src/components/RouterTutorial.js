import { BrowserRouter,Route,Routes, } from "react-router-dom";
import ShoppingComponent1 from "./ShoppingComponent1";
import ShoppingIndex from "../shopping/ShoppingIndex";



export default function RouterTutorial(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                   <Route path="/" element={}>
                   <Route path="/electronics" element={
                    <div>
                         <h2>Electronics Home</h2>
                    </div>
                    }>
                    </Route>
                    <Route path="footwear" element={
                        <HTML />
                    }></Route>
                    <Route path="fashion" element={
                       <CSS />
                    }></Route>
                    <Route path="fashion" element={
                       <JS />
                    }></Route>
                    <Route path="shoppingcompo" element={<ShoppingComponent1/>}></Route>
                    <Route path="/" element={
                    <div>
                        <h2>Shopping Home</h2>
                    </div>
                }>
                </Route>
                <Route path="*" element={
                    <div>
                        <code>Page is not found......</code>
                    </div>
                }>
                </Route>
                   </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}