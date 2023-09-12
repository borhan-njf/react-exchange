import React, { useEffect, useState } from "react";
//api
import { getCoins } from "../services/api";
//components
import Loader from "../components/Loader";
import Coin from "../components/shared/Coin";
//styles
import styles from '../styles/landing.module.css';

export default function Landing() {
  //states
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoins();
      setCoins(data);
    };
    fetchApi();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoin=coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <input
      className={styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
           {searchCoin.map((coin) => <Coin key={coin.id} coinData={coin} />)}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
