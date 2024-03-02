import {useEffect, useState} from "react";
import Form from "./renderScreen/Form";
import RenderList from "./renderScreen/RenderList";
import RenderError from "./renderScreen/RenderError";
import RenderAdvice from "./renderScreen/RenderAdvice";
import uuid from 'react-uuid';
import {BlackButton} from "../components/OutLinedButton";
import './advice_index.css'
function AsyncAndClickEvApp() {
  const [show, setShow] = useState(true)
  const [advices, setAdvices] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isActive, setIsActive] = useState('');

/*  useEffect(() => {
    const advices = localStorage.getItem('advices');
    const parsedAdvices =JSON.parse(advices);
    if(parsedAdvices)
      setAdvices([...parsedAdvices])
  }, []);*/

  useEffect(() => {
    if(advices.length === 0) return;
    else localStorage.setItem('advices', JSON.stringify(advices));
  }, [advices]);

  async function getAdvice() {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      if (!data) throw new Error(`데이터 받기에 실패...🤩🤩🤩 ${data.message.text}`)
      setAdvices(ad => [...ad, {id: uuid(), content: data.slip.advice}]);
    } catch (error) {
      setError(error.message)
    }
  }

  async function getResults(ev) {
    try {
      ev.preventDefault();
      const res = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
      const data = await res.json();
      if (data.message) throw new Error(`데이터 받기에 실패...🤩🤩🤩 ${data.message.text}`)
      console.log(data.slips);
      setResults(data.slips);

      setError('');
    } catch (error) {
      setError(error.message)
    }
  }

/*  if (advices.length === 0) {
    console.log('없음')
  } else  console.log(advices);*/

  const clickHandle = function (id) {
    if (isActive && isActive !== id) setIsActive(id)
    else if (isActive) setIsActive('');
    else setIsActive(id)
  };
  const showContainer = () => {
    setShow(s => !s)
  }

  return (
    <div>
      <div className='container'>
        <button className='btn btn-outline-info fs-4' onClick={showContainer}>SHOW CONTAINER</button>
      </div>
      {/*<div className={`container `}>*/}
        <div className={`container ${show ? 'hide': ""}`}>
        <h1 className='p-3 mt-2 mb-2 bg-body-secondary text-dark text-center fs-2'>
          HELLO REACT</h1>
        <Form getResults={getResults} query={query} setQuery={setQuery}/>
        {results.length !== 0 && <hr className="border border-bottom border-1 opacity-75"/>}
        <ul className='list-group'>
          {error && <RenderError error={error}/>}
          {results.length !== 0 &&
            <div className='p-3 mb-2 bg-dark-subtle text-bg-light fs-5'>
              {results.length}개가 있습니다.</div>}
          {results && results.map(result =>
            <RenderList key={result.id}
              list={result} isActive={isActive} onclick={clickHandle}/>)
          }
        </ul>
        <hr className="border border-primary border-1 opacity-75"/>
        <BlackButton onClick={getAdvice}> Get Advice</BlackButton>
        <div className='p-3 mb-2 bg-dark-subtle text-bg-light fs-5 mt-4'>{advices.length}개를 읽었습니다.</div>
        <hr className="border border-primary border-1 opacity-75"/>
        <ul className='list-group'>
          {advices.length !== 0 && advices.map((advice) =>
            <RenderList key={advice.id} list={advice} isActive={isActive} onclick={clickHandle}/>)}
        </ul>
      </div>
    </div>
);
}

export default AsyncAndClickEvApp;
