export const productFormUI = ({products, errors, loading, onChange, onSubmit}) => {
    return <section>
        <form className="product-form" onSubmit={onSubmit} >
            <h2>Agregar producto</h2>
            <div>
                <label htmlFor=""></label>
                <input type="text" />
            </div>
        </form>
    </section>
}