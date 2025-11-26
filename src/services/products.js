const BASE_URL = "https://6924ebfc82b59600d721cc90.mockapi.io/products";

const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })

    if (!res.ok) {
        throw new Error("Error creando el producto");
    }

    const result = await res.json();
    
    return result;
}

