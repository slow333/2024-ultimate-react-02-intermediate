function Pizza({pizza}) {
  return (
    <>
      <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
        <img src={pizza.photoName}/>
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span className='sold-out'>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
        </div>
      </li>
    </>
  );
}

export default Pizza