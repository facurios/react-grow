import React, { memo } from "react";
import Item from "./Item";

const ItemList = memo(({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-4 ">
          <Item key={producto.id} producto={producto} />
        </div>
        
      ))}
    </div>
  );
});

export default ItemList;
