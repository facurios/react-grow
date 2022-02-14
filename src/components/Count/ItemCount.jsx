import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ item, onAdd }) {
  const [count, setCount] = useState(1)
  const handleplus = () => {
    setCount(prev => prev + 1)
  }
  const handleless = () => {
    setCount(prev => prev - 1)
  }

  return (
    <div className="centrar row">
      <div>
        <h6>{count}</h6>
        <button
          onClick={handleless}
          className={
            count > 1
              ? "btn btn-danger btn-sm "
              : "btn btn-danger btn-sm disabled"
          }>-</button>
        <button
          onClick={handleplus}
          className={
            count < item.stock
              ? "btn btn-primary btn-sm "
              : "btn btn-primary btn-sm disabled"
          }>+</button>
      </div>
      <button
        type="button"
        onClick={() => onAdd(count)}
        className={
          item.stock !== 0
            ? "btn btn-success btn-sm"
            : "btn btn-success btn-sm disabled"
        }>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
