import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import type {  SingleCoinData } from "../types";

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<null | SingleCoinData>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Impossible to fetch the data");
        return res.json();
      })
      .then((res) => {
        setCoin(res);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div className="coin-details-container">
              <Link to="/">← Retour à la page d'accueil </Link>
              <div className="coin-details-title">
                  {coin ?
                      `${coin.name} (${coin.symbol.toUpperCase()})` : `Coin Details`}
              </div>
              {loading && <p>Loading ...</p>}
              {error && <p>{error}</p>}
              {!loading && !error &&
                  <>
                    <img src={coin!.image.large} alt={coin!.name} className="coin-details-image" />
                  <p style={{
                      overflowY: "scroll",
                      textOverflow: "inherit",
                      maxHeight: "150px",
                      textAlign: "justify",
                      maxWidth: "90%",
                      justifySelf: "center",
                      marginLeft: "10px",
                      marginRight: "10px", 
                      paddingLeft: "20px",
                      paddingRight:"20px"
                  }}>{coin!.description.en} </p>   
                  <div className="coin-details-info">
                      <h3>Rank: #{coin!.market_cap_rank}</h3>
                      <h3>Current Price: { coin!.market_data.current_price.eur.toLocaleString()} €</h3>
                      <h3>Market cap : { coin!.market_data.market_cap.eur.toLocaleString()} €</h3>
                  </div>
              </>
              }
      </div>
    </>
  );
};

export default CoinDetailPage;
