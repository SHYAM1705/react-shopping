

import { BrowserRouter, Routes,Route,Link} from "react-router-dom";
import IShopHome from "./IShopHome";
import IShopRegister from "./IShopRegister";
import IShopLogin from "./IShopLogin";
import IShopDashboard from "./IShopDashboard";

export default function IShopIndex(){
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 mt-2">
                <h1>IShop-Online Store</h1>
            </header>
            
            <section className="row mt-2">
            <BrowserRouter> 
                <nav className="col-3">
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/home">Home</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/register">Register</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/login">Login</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/dashboard">Dashboard</Link>
                    </div>
                </nav>
                <main className="col-9 w-50">
                    <Routes>
                       <Route path="/" element={<IShopHome />}></Route>
                        <Route path="home" element={<IShopHome />}></Route>
                        <Route path="register" element={<IShopRegister />}></Route>
                        <Route path="login" element={<IShopLogin />}></Route>
                        <Route path="dashboard" element={<IShopDashboard />}></Route>
                    </Routes>
                </main>
                </BrowserRouter>
            </section>
            

        </div>
    )
}