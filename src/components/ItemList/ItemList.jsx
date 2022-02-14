import{ memo } from "react"
import Item from "./Item"

const ItemList = memo(({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-4 " key={producto.id}>
          <Item producto={producto} />
        </div>
      ))}
    </div>
  )
})

export default ItemList
