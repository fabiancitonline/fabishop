import Item from './Item';

const ItemList = ({productos}) => {
    return (
      <>
    <section className="product-list">
    {productos.map((producto) => {
    return <Item producto={producto} key={producto.id}></Item>
    }
    )}
</section>
</> )
}

export default ItemList