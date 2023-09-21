import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [value, setVal] = useState(2);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description || !value) {
      return;
    }
    const newItem = { description, value, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setVal(2);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are you packing for your trip?</h3>
      <select
        name="quantity"
        value={value}
        onChange={(e) => setVal(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* Creating elements */}
      </select>
      <input
        name="description"
        type="text"
        placeholder="Add Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} //Setting state using this
      />
      <button className="btn">ADD</button>
    </form>
  );
}
