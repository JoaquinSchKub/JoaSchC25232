import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProduct"
import { uploadToImgbb } from "../../../services/uploadImage"
import { createProduct } from "../../../services/products"
import "../ProductFormContainer/ProductFormContainer.css"


export const ProductFormContainer = () => {
    const [loading, setLoading] = useState(false); /// No estoy seguro porque pero me pide iniciar un valor booleano (de lo contrario me decia que no podia iniciar name con un valor undeff)
    const [errors, setErrors] = useState({}); /// lo mismo aca, me dice que si inicio errors vacio, name no puede iniciar con un undefined, revise el video mil veces y no encuentro mi error asi que le hice caso a la IA
    const [file, setFile] = useState (null);
    const [product, setProduct] = useState({
        name:"",
        price:"",
        category:"",
        description:"",
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({...product, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors ({}) /// esta parte inicia a errors como un objeto, y a loading como un booleano, pero no se porque me tira error como que estan undefined.
        setLoading(true); /// consultar a Belu !!! no olvidarse...

        const newErrors = validateProduct ({...product, file })
            if (Object.keys(newErrors).length > 0){
                setErrors(newErrors);
                setLoading(false);
                return;
            }

        try {
        const imageURL = await uploadToImgbb(file)
        const productData = {
            ...product, price: Number(product.price), imageURL}; 

        await createProduct(productData);
        alert ("Producto cargado con exito");

        setProduct({name:"", price:"", category: "", description: ""})
        setFile(null);

        } catch (error){
            setErrors({general : error.message})
        } finally {
            setLoading (false)
        }
    }

    return <ProductFormUI product={product} errors={errors} onChange={handleChange} onFileChange={setFile} loading={loading} onSubmit = {handleSubmit}/>
}