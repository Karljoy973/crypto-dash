import type { GeckoOrder, SortByInputProps } from "../types";

const SortByInput = ({ sortBy, onSortByChange }: SortByInputProps) => {
	const geckoOrder: { key: GeckoOrder; value: string }[] = [
		{ key: "market_cap_desc", value: "Market Cap Ascending" },
		{ key: "market_cap_asc", value: "Market Cap Descending" },
		{ key: "id_asc", value: "ID Acending" },
		{ key: "id_desc", value: "ID Descending" },
		{ key: "volume_asc", value: "Volume Ascending" },
		{ key: "volume_desc", value: "Volume Descending" },
		{ key: "current_price_asc", value: "Current Price (Low -> High)" },
		{ key: "current_price_desc", value: "Current Price (High -> Low)" },
	];
	return (
		<div className="controls">
			<label htmlFor="sort-by">Sort by: </label>
			<select
				name="sort-by-gecko"
				id="sort-by-gecko"
				value={sortBy}
				onChange={(e) => onSortByChange(e.target.value)}>
				{geckoOrder.map((order) => (
					<option key={order.key} value={order.key}>
						{order.value}
					</option>
				))}
			</select>
		</div>
	);
};

export default SortByInput;
