import { useState } from "react";
import type { CoinGeckoData, GeckoOrder, HomePageProps } from "../types";

export const useHomePageHook: () => HomePageProps = () => {
  const [coins, setCoins] = useState<CoinGeckoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState<number>(5);
  const [filter, setFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<GeckoOrder>("market_cap_desc");

  return {
    coins,
    setCoins,
    loading,
    setLoading,
    error,
    setError,
    limit,
    setLimit,
    filter,
    setFilter,
    sortBy,
    setSortBy,
  };
};
