
function searchProducts() {
    var brand = document.getElementById("brand").value;

    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // Assuming data is an array of products
        if (data.length > 0) {
            // Display information for the first product
            const firstProduct = data[0];
            document.getElementById("result").innerHTML = `
                Brand: ${firstProduct.brand} <br>
                Name: ${firstProduct.name} <br>
                Description: ${firstProduct.description} <br>
                <img src="${firstProduct.image_link}" alt="${firstProduct.name}" height="100"> <br>
                Website: ${firstProduct.product_link} <br>
            `;
        } else {
            document.getElementById("result").innerHTML = "No products found for the given brand.";
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        document.getElementById("result").innerHTML = "Error fetching data. Please try again.";
    });
}


  