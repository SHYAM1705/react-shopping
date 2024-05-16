import { useState, useEffect } from "react";
import { Card, CardHeader,CardMedia,CardContent,Typography, CardActions,Button,FormControl,Select,MenuItem,InputLabel, IconButton } from '@mui/material';
import { CenterFocusStrong } from "@mui/icons-material";
import { Modal,Box } from "@mui/material";
import { contains } from "jquery";


export default function MUIDemo() {
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
     
        const [open, setOpen] = useState(false);
        const showCart = () =>{ setOpen(true);
            cartItems.map(item=>{
                var title= item.title;
                var price= item.price;
            })
        }
        const handleClose = () => setOpen(false);

        function handleColor(e){
            e.target.style.className={};

        }


    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
            </header>
            <section className="row">
                <nav className="col-2">
                    <div style={{ padding: '10px' }}>
                        
                        <div>
                        <label>Select Category</label>
                                {
                                    
                                    categories.map(category =>
                                        
                                        <FormControl fullWidth>
                                           <InputLabel id="demo-simple-select-label"></InputLabel>
                                               <Select
                                                labelId="demo-simple-select-label"
                                                  id="demo-simple-select"
                                                  value={category}
                                                   label="Age"
                                                  onClick={handleCategoryChange}
                                                     >
                                                     <MenuItem key={category} value={category}>{category}</MenuItem>
                                            
                                                           </Select>
                                                   </FormControl>
                                    )
                                }
                            
                        </div>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap overflow-auto" style={{ height: '600px' }} >
                    {

                        products.map(product =>
                            <div>
                                <Card sx={{maxWidth:300}} style={{padding:10,margin:20}}>
                                    <CardHeader 
                                       title={product.title}
                                       style={{maxHeight:200,fontSize:5,textAlign:CenterFocusStrong}}
                                    />
                                   
                                <CardMedia
                                  component="img"
                                     height="150"
                                     width="150"
                                     style={{margin:10,objectFit:contains}}
                                    image={product.image}
                                    alt="Product1"
                                />
                                <CardContent style={{maxHeight:100}}>
                                <Typography variant="body2" color="text.secondary">
                                   Price:{product.price}
                                   
                                 </Typography>
                                 <Button variant="contained" onClick={handleAddToCart} style={{marginTop:20}}>Add to cart</Button>
                                 <IconButton onClick={handleColor} className="bi bi-heart-fill float-end mt-3"></IconButton>
                                 <IconButton className="bi bi-share-fill float-end mt-3 ms-4"></IconButton>
                                 
                                </CardContent>

                                </Card>
                                
                            </div>
                        )
                    }
                </main>
                <aside className="col-2 mt-2">
                <Button onClick={showCart}>{cartItems.length}<span className="bi bi-cart3"></span>Show Cart</Button>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {products.price}
          </Typography>
        </Box>
      </Modal>
                  </aside>
            </section>
        </div>
    )
     }
