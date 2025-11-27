import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products";

export const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState([]);
    const {category} = useParams();

    useEffect (()=>{
        getProduct(category).then((data)=>setProducts(data))
        .catch((err) => {
            console.log (err);
        })

    }, [category]);

    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList lista={products} />
        </section>
    );

};