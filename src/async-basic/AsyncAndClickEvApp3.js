import {useEffect, useState} from "react";
import Form from "./renderScreen/Form";
import RenderList from "./renderScreen/RenderList";
import RenderError from "./renderScreen/RenderError";
import {BlackButton} from "../components/OutLinedButton";
import './index.css'
import useFetch from "./useFetch";
import {click} from "@testing-library/user-event/dist/click";

function AsyncAndClickEvApp() {
  const [show, setShow] = useState(true)
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState('');

/*  useEffect(() => {
    const advices = localStorage.getItem('advices');
    const parsedAdvices =JSON.parse(advices);
    if(parsedAdvices)
      setAdvices([...parsedAdvices])
  }, []);*/

/*  useEffect(() => {
    if(advices.length === 0) return;
    else localStorage.setItem('advices', JSON.stringify(advices));
  }, [advices]);*/
  const url = 'https://api.adviceslip.com/advice';


  let { data: advices, error: errAdvice , isPending : pendingAdvice} =
    useFetch('https://api.adviceslip.com/advice')
  // let { data: results, error: errQuery , isPending : pendingResult} =
  //   useFetch(`https://api.adviceslip.com/advice/search/${query}`, {query})

  if (advices.length === 0) {
    console.log('없음')
  } else  console.log(advices);

  const clickHandle = function (id) {
    if (isActive && isActive !== id) setIsActive(id)
    else if (isActive) setIsActive('');
    else setIsActive(id)
  };
  const showContainer = () => {
    setShow(show => !show)
  }

  return (
    <div>
      <div className='container'>
        <button className='btn btn-outline-info fs-4' onClick={showContainer}>SHOW CONTAINER</button>
      </div>
      <div className={`container `}>
        {/*<div className={`container ${show ? 'hide': ""}`}>*/}
        <h1 className='p-3 mt-2 mb-2 bg-body-secondary text-dark text-center fs-2'>
          HELLO REACT</h1>
{/*        <Form getResults={results} query={query} setQuery={setQuery}/>
        {results.length !== 0 && <hr className="border border-bottom border-1 opacity-75"/>}
        <ul className='list-group'>
          {errQuery && <RenderError error={errQuery}/>}
          {results.length !== 0 &&
            <div className='p-3 mb-2 bg-dark-subtle text-bg-light fs-5'>
              {results.length}개가 있습니다.</div>}
          {results && results.map(result =>
            <RenderList key={result.id}
              list={result} isActive={isActive} onclick={clickHandle}/>)
          }
        </ul>*/}
        <hr className="border border-primary border-1 opacity-75"/>
        <BlackButton onClick={() => click()}> Get Advice</BlackButton>
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
