const CoinLimit = ({ option, setOption }: CoinLimitProps) => {
  const values = [5, 10, 20, 50, 100, 500];

  return (
    <div className="controls">
      <label htmlFor="limit">Show:</label>
      <select
        name="limit"
        value={option}
        onChange={(e) => setOption(Number(e.target.value))}
        id="limit"
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

type CoinLimitProps = {
  option: number;
  setOption: Function;
};

export default CoinLimit;
