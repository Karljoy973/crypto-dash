import type { CoinGeckoData, GeckoOrder } from "../types";

export const coinSort: (coins: CoinGeckoData[], sortBy: GeckoOrder) => CoinGeckoData[] =
    (coins: CoinGeckoData[], sortBy = "current_price_asc") => {
        return coins.sort((coin1, coin2) => {
            switch (sortBy) {
                case "market_cap_desc":
                return coin2.market_cap - coin1.market_cap
                case "market_cap_asc":
                return coin1.market_cap - coin2.market_cap
                case "volume_desc":
                return coin2.total_volume - coin1.total_volume
                case "volume_asc":
                return coin1.total_volume- coin2.total_volume
                case "id_desc":
                    return coin2.id.toLocaleLowerCase().localeCompare(coin1.id.toLowerCase())
                case "id_asc":
                return coin1.id.toLowerCase().localeCompare(coin2.id.toLowerCase())
                case "current_price_desc":
                return coin2.current_price - coin1.current_price
                case "current_price_asc":
                return coin1.current_price - coin2.current_price
                default:
                    return 0;
            }
        })
    } 

    export const coinSorter = (coin1: CoinGeckoData, coin2: CoinGeckoData, sortBy: GeckoOrder) => {
            switch (sortBy) {
                case "market_cap_desc":
                return coin2.market_cap - coin1.market_cap
                case "market_cap_asc":
                return coin1.market_cap - coin2.market_cap
                case "volume_desc":
                return coin2.total_volume - coin1.total_volume
                case "volume_asc":
                return coin1.total_volume- coin2.total_volume
                case "id_desc":
                    return coin2.id.toLocaleLowerCase().localeCompare(coin1.id.toLowerCase())
                case "id_asc":
                return coin1.id.toLowerCase().localeCompare(coin2.id.toLowerCase())
                case "current_price_desc":
                return coin2.current_price - coin1.current_price
                case "current_price_asc":
                return coin1.current_price - coin2.current_price
                default:
                    return 0;
            }
        }