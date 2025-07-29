import { useState, useEffect } from "react";
import type { CoinGeckoData, GeckoOrder } from "./types";
import CoinCard from "./components/CoinCard";
import CoinLimit from "./components/CoinLimit";
import FilterInput from "./components/FilterInput";
import SortByInput from "./components/SortByInput";
import { coinSort } from "./utils/coinSort";
const BASE_URL = import.meta.env.VITE_BASE_MARKET_URL;
function App() {
  const [coins, setCoins] = useState<CoinGeckoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState<number>(5);
  const [filter, setFilter] = useState<string>("");



  const [sortBy, setSortBy] = useState<GeckoOrder>("market_cap_desc");

  useEffect(() => {
    /** .then syntax */
    fetch(BASE_URL + `&per_page=${limit}&order=market_cap_desc`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch the data");
        return res.json();
      })
      .then((res) => {
        setCoins(res);
      })
      .catch((error) => {
        setError(error);
      }).finally(() =>setLoading(false) )
  }, [limit]);



  let filteredCoins = coinSort(coins.filter(
    (coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      )
    }
  ), sortBy)
    

  return (
    <>
      <h1>Crypto Dash</h1>
      {loading && <p>Loading ...</p>}
      {error && <div className="error">{error} </div>}
      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <CoinLimit option={limit} setOption={setLimit} />
        <SortByInput sortBy={sortBy} onSortByChange={setSortBy} />
      </div>

      {!error && !loading && (
        <main className="grid">
          {" "}
          {filteredCoins.map((coin) => (
            <CoinCard coin={coin} key={coin.id} />
          ))}
        </main>
      )}
      {console.log(filteredCoins)}
    </>
  );
}

export default App;
