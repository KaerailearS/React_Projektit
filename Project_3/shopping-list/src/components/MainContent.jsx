import { useState } from "react"

export default function MainContent() {
  const [items, setItems] = useState([]); // state&function for items
  const [input, setInput] = useState(""); // state&function for input

  // function for handling input submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;

    setItems([...items, { id: Date.now(), name: input}]);
    setInput("");
  }
  // function for handling removing an item
  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
      <main className="main-content">
          <h2>Items to Buy</h2>
          <form onSubmit={handleSubmit} className="add-item-form">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Add a new item"
              aria-label="Add item"
              name="item"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>

          <ul className="shopping-list">
            {items.map((item) => (
              <div className="list-div">
              <li key={item.id} className="shopping-list-item">
                {item.name}
              </li>
              <button
                onClick={() => handleRemove(item.id)}
                className="remove-btn"
              >
                X
              </button>
              </div>
            ))}
          </ul>
      </main>
  );
}