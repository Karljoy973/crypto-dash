export type CoinGeckoData = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO date string
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // ISO date string
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string; // ISO date string
};

// I wish I could use this to generate an array so I can map over the array and do stuff
export type GeckoOrder =
  | "market_cap_desc"
  | "market_cap_asc"
  | "volume_asc"
  | "volume_desc"
  | "id_asc"
  | "id_desc"
  | "current_price_asc"
  | "current_price_desc";

export type coinProps = {
  coin: CoinGeckoData;
};

export type FilterInputProps = {
  filter: string;
  onFilterChange: Function;
};

export type SortByInputProps = {
  sortBy: GeckoOrder;
  onSortByChange: Function;
};
