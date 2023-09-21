//Show Stats from Calc
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <span role="img" aria-label="emoji">
          🌴
        </span>{" "}
        Add Items to your list
      </p>
    );

  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentPacked = (packed / numItems) * 100;
  return (
    <footer className="stats">
      <p>
        {percentPacked === 100
          ? "You're all packed!"
          : `You have ${numItems} number of items, you already packed ${packed} (
      ${percentPacked.toFixed(2)}%)`}
      </p>
    </footer>
  );
}
