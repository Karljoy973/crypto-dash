import type { HomePageProps } from "../types";
import { useEffect } from "react";
import { coinSort } from "../utils/coinSort";
import CoinCard from "../components/CoinCard";
import CoinLimit from "../components/CoinLimit";
import FilterInput from "../components/FilterInput";
import SortByInput from "../components/SortByInput";

const HomePage = (props: HomePageProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_MARKET_URL;
  useEffect(() => {
    /** .then syntax */
    fetch(BASE_URL + `&per_page=${props.limit}&order=market_cap_desc`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch the data");
        return res.json();
      })
      .then((res) => {
        props.setCoins(res);
      })
      .catch((error) => {
        props.setError(error);
      })
      .finally(() => props.setLoading(false));
  }, [props.limit]);

  let filteredCoins = coinSort(
    props.coins
      .filter((coin) => {
        return (
          coin.name.toLowerCase().includes(props.filter.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(props.filter.toLowerCase())
        );
      })
      .slice(),
    props.sortBy,
  );
  return (
    <>
      <h1>CRYPTO DASH</h1>
      {props.loading && <p>Loading ...</p>}
      {props.error && <div className="error">{props.error} </div>}
      <div className="top-controls">
        <FilterInput filter={props.filter} onFilterChange={props.setFilter} />
        <CoinLimit option={props.limit} setOption={props.setLimit} />
        <SortByInput sortBy={props.sortBy} onSortByChange={props.setSortBy} />
      </div>

      {!props.error && !props.loading && (
        <main className="grid">
          {" "}
          {filteredCoins.length > 0 &&
            filteredCoins.map((coin) => <CoinCard coin={coin} key={coin.id} />)}
        </main>
      )}
    </>
  );
};

export default HomePage;
