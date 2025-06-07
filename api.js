let url = "http://localhost:3000/plante_interior"

// Create
export async function createProduct(produs){
 
        let date_server = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(produs)
        });
        let raspuns = await date_server.json();
        return raspuns;
    }
}

// Read

export async function getProducts(){
    let date_server = await fetch(url);
    let raspuns = date_server.json();
    return raspuns;
}

export async function getProduct(id){
    let date_server = await fetch(url + `/${id}`);
    let raspuns = date_server.json();
    return raspuns;
}

// Update

export async function updateProduct(id, img_src, img_alt, title, description, price){
    let date_server = await fetch(url + `/${id}`,{
        method:"PUT",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(img_src, img_alt, title, description, price)
    })
       let raspuns = date_server.json();
    return raspuns
}

// Delete

export async function deleteProduct(id){
    let date_server = await fetch(url + `/${id}`, {
        method: "DELETE"
    })
    let raspuns = date_server.json();
    return raspuns
}
