import {OutLinedButton} from "../../components/OutLinedButton";


function Form({getResults, query, setQuery}) {
  return (
    <div>
      <form onSubmit={getResults}>
        <input type='text' value={query} name='query' className='input-group-text col-6 fs-4'
               onChange={ev => setQuery(ev.target.value)}/>
        <OutLinedButton onClick={() => onclick} type='submit'>SEARCH</OutLinedButton>
        {/*<button type='submit' className='btn btn-outline-dark fs-4 ps-3 pe-3'>SEARCH</button>*/}
      </form>
    </div>
  );
}

export default Form