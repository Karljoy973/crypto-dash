import { type Dispatch, type SetStateAction } from "react";

export type SingleCoinData = {
    id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: {
    [key: string]: string;
  };
  detail_platforms: {
    [key: string]: {
      decimal_place: number | null;
      contract_address: string;
    };
  };
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  localization: {
    [lang: string]: string;
  };
  description: {
    [lang: string]: string;
  };
   market_data: {
     current_price: { [key: string]: number },
     market_cap: {[key: string]: number}
    }
    "total_value_locked": null|number,
    "mcap_to_tvl_ratio": null|number,
    "fdv_to_tvl_ratio": null|number,
    "roi": null | number,
    ath: {
      [key:string]: number // pas une très bonne pratique
    },
    ath_change_percentage: {
      [key:string]: number
    }, 
    [key:string]:any
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    snapshot_url: string | null;
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: number | null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
   
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;

}

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

export type HomePageProps = {
  coins: CoinGeckoData[];
  error: string;
  filter: string;
  limit: number;
  loading: boolean;
  sortBy: GeckoOrder;

  setCoins: Dispatch<SetStateAction<CoinGeckoData[]>>;
  setError: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<string>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSortBy: Dispatch<SetStateAction<GeckoOrder>>;
};
