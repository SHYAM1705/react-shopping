export function DataBinding1(){

    var  products = [
      { Name: "TV", Price: 40000.55},
      { Name: "Mobile", Price: 31000.34}
    ];
  
   
      return(
          <div className="container-fluid">
            <table className='table table-hover mt-3'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                 {
                   products.map(product=><tr key={product.Name}> <td>{product.Name}</td> <td>{product.Price}</td> </tr>)
                 }
              </tbody>
            </table>
          </div>
      )
  }
  