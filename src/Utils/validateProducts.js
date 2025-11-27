
export const validateProducts = (product, filedRequired = true) => {
    const errors = {};

    if (product.name.trim()) {
        errors.name = "El nombre es obligatorio";
    }
    
    if(product.price || product.price === 0 ){
        errors.price = "El precio es obligatorio";
    }

    if (!product.description.trim()){
        errors.description = "La descripción es obligatoria";
    }

    if (!product.category.trim()){
        errors.category = "La categoría es obligatoria";
    }

    if (filedRequired && !product.image.trim()){
        errors.image = "La imagen es obligatoria";
    }

    return errors;
}