
const urlparams = new URLSearchParams(window.location.search); 
const productid = urlparams.get('id');

const carddetails = document.getElementById('card-details');
const loading =  document.getElementById('loading')


async function productdetails() { 
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productid}`); 
        const details = await response.json(); 


        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        loading.style.display = 'none';
        displayproducts(details); 
    } catch (error) {
        console.log("Error: " + error); 
    }
}

function displayproducts(details) { 
    let carddata = `
        <div>
            <img src="${details.image}"  class="img-fluid" alt="Product image" style="height:400px; width:700px;">
        </div>
        <div class="card-body">
            <h5 class="card-title">${details.title}</h5>
            <p>${details.category}</p>
            <p class="card-text">${details.description}</p>
            <p>${details.price} RS</p>
            <a href="#" class="btn btn-success">Buy Now</a>
        </div>`;

    carddetails.innerHTML = carddata;
}

productdetails(); 