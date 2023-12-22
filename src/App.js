import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.wildberries.ru/catalog/146972802/detail.aspx`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setData(data);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      });
  }, []);

  return (
    <div>
      <header>
        {loading && <h1>Loading...</h1>}
        {!loading && <h1>{data}</h1>}
      </header>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
