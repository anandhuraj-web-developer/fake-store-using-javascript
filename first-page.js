const displayitems = document.getElementById('displayitems');
const loading =  document.getElementById('loading')


async function fetchproduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        console.log(response, 'response');
        const product = await response.json();
        console.log(product, 'product');
       

        if (!response.ok) {
            throw new Error('something went wrong');
        }
        loading.style.display = 'none';
        displayproducts(product);
        
    } catch (error) {
        console.log("error");
    }
}

let displayproducts = (product) => {
    let productcards = "";

    product.forEach((product) => {  
        productcards += `
       <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card">
                <div class="card-img-top d-flex justify-content-center align-items-center">
                    <img src="${product.image}" class="img-fluid py-2" alt="${product.title}" style="height:200px; width:200px;">
                </div>
                 <div class="card-body">
                    <h5 class="card-title">${product.title.slice(0,50)}</h5>
                    <p>${product.category}
                    <p class="description">${product.description.slice(0, 100)}...</p>
                    <div class="priceandbutton">
                        <p >Rs ${product.price}</p>
                        <a href="productdetails.html?id=${product.id}" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    displayitems.innerHTML = productcards; 
}

fetchproduct();
