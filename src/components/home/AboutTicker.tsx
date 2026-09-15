const TICKER_ITEMS = ["Smart Metering", "Prepaid Vending"] as const;

export default function AboutTicker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="eco-ticker" aria-hidden="true">
      <div className="eco-ticker__track">
        {loop.map((item, index) => (
          <span className="eco-ticker__item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
