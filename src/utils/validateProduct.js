
export const validateProduct = (product, fileRequired = true) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "El nombre es obligatorio";
    }
    
    if(!product.price || product.price <= 0 ){
        errors.price = "El precio es obligatorio";
    }

    if (!product.description.trim()){
        errors.description = "La descripción es obligatoria";
    }

    if (!product.category.trim()){
        errors.category = "La categoría es obligatoria";
    }

    if (fileRequired && !product.file){
        errors.image = "La imagen es obligatoria";
    }

    return errors;
}