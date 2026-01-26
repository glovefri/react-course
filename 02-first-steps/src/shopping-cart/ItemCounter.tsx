import { useState } from "react"

// import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props {
  name: string,
  quantity?: number
}
export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity)

  const handleAdd = () => {
    setCount(count+1)
  }

  const handleSub = () => {
    if (count === 1) return;
    setCount(count-1)
  }
  return (
  <section
    className={styles.itemRow }
    // style={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   gap: 10,
    //   marginTop: 10
    // }}
    >
    <span
    className={styles.itemText}
      style={{
        width: 150,
        color: count === 1 ? 'red': 'black'
      }}>{name}</span>
    <button
      onClick={handleAdd}> +1 </button>
    <span>{count}</span>
    <button
      onClick={handleSub}>-1</button>
  </section>)
}
