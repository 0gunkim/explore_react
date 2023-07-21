import { useState } from "react";

export default function Caching() {
  const [storage, setStorage] = useState([]);
  const [cachKey, setCachKey] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (cachKey) {
      setStorage((state) => [...state, { key: cachKey, value: "someValue" }]);
      setCachKey("");
    }
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredData = storage.filter((item) =>
    item.key.includes(searchKeyword)
  );
  return (
    <form onSubmit={submit}>
      <h1>Caching</h1>
      <input
        type="text"
        value={cachKey}
        onChange={(e) => setCachKey(e.target.value)}
      />
      <button>Submit</button>

      <h2>Search</h2>
      <input type="text" value={searchKeyword} onChange={handleSearch} />

      <h2>Data</h2>
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div key={index}>
            <span>{item.key}: </span>
            <span>{item.value}</span>
          </div>
        ))
      ) : (
        <div>no data</div>
      )}
    </form>
  );
}
