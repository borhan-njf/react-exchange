import React from 'react'
//styles
import styles from '../../styles/coin.module.css'

export default function Coin({coinData}) {
    const {image,name , symbol ,current_price,market_cap,price_change_percentage_24h}=coinData
  return (
    <div className={styles.container}>
        <img className={styles.image} src={image} alt="crypto" style={{width:'50px'}} />
        <span className={styles.name}>{name.toUpperCase()}</span>
        <span className={styles.symbol}>{symbol.toUpperCase()}</span>
        <span className={styles.currentPrice}>$ {current_price.toLocaleString()} </span>
        <span className={price_change_percentage_24h < 0 ? styles.redPriceChange : styles.greenPriceChange}>{price_change_percentage_24h.toFixed(2)} %</span>
        <span>$ {market_cap.toLocaleString()}</span>
    </div>
  )
}
