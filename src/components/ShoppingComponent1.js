import { useState, useEffect } from "react";

export default function ShoppingComponent1() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemCounts, setItemCounts] = useState(0);

    function handleCategoryChange(e) {
        if (e.target.value == 'All')
            LoadProducts('https://fakestoreapi.com/products');
        else
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }

    function GetCartItemsCount() {
        setItemCounts(cartItems.length);

    }

    function handleAddToCart(e) {
        alert("item added to cart");
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cartItems.push(data);
                GetCartItemsCount();

            })
    }

    function LoadCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                data.unshift('All');
                setCategories(data);
            })
    }
    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })

    }

    useEffect(() => {
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    }, [cartItems.length]);


    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
            </header>
            <section className="row">
                <nav className="col-2">
                    <div style={{ padding: '10px' }}>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select w-100">
                                {
                                    categories.map(category =>
                                        <option key={category}>{category}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap overflow-auto" style={{ height: '600px' }} >
                    {

                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2 w-25">
                                <img src={product.image} height="150" className="card-img-top" />
                                <div className="card-header" style={{ height: 150 }}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate} <span>{product.rating.count}</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button id={product.id} onClick={handleAddToCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart3">Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
                <aside className="col-2 mt-2">
                <button className="btn btn-danger w-100 p-2">
                        <span className="bi bi-cart4 p-2"></span>
                        [{itemCounts}] Show cart
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item => {
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50" />
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>

                </aside>

            </section>

        </div>
    )
}
