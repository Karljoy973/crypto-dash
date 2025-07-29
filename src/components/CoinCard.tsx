import type { coinProps } from "../types";

const CoinCard = ({ coin }: coinProps) => {
  return (
    <div className="coin-card" key={coin.id}>
      <div className="coin-header">
        <img src={coin.image} alt={coin.name} className="coin-image" />
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            // il y a des choses que je ne comprends pas sur textOverflow
          }}
        >
          <h2
            style={{
              textOverflow: "ellipsis",
            }}
          >
            {coin.name}
          </h2>
          <p
            className="symbol"
            style={{
              textOverflow: "ellipsis",
            }}
          >
            {coin.symbol.toUpperCase()} - {coin.id}
          </p>
        </div>
      </div>
      <p>Prix actuel: {coin.current_price.toLocaleString()}€</p>
      <p
        className={
          coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
        }
      >
        {coin.price_change_24h.toFixed(2)}%{" "}
      </p>
      <p> Market Cap: {coin.market_cap.toLocaleString()} €</p>
    </div>
  );
};

export default CoinCard;
