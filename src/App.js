import {useState} from "react";

function App() {
  const [advice, setAdvice] = useState('')
  const [value, setValue] = useState('');
  const [results, setResults ] = useState([])
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  function onChangeEvent(ev) {
    ev.preventDefault();
    setValue(ev.target.value)

  }
  async function getResults(ev) {
    ev.preventDefault();
    console.log(value)
    const res = await fetch(`https://api.adviceslip.com/advice/search/${value}`);
    if(!res.ok) return;
    const data = await res.json();
    if(!data) return;
    setResults(data.slips);
  }

  return (
    <div>
      hello react
      <form onSubmit={getResults}>
        <input type='text' value={value} onChange={onChangeEvent} />
        <button>submit</button>
      </form>
      <ul>
        {results.map(result => <li key={result.id}>{result.id} : {result.advice}</li>)}
      </ul>

      <button onClick={getAdvice}>get Advice</button>
      <p>{advice}</p>

    </div>
  );
}

export default App;
