function RenderList({list, onclick, isActive = false}) {
  return (
    <li className={`list-group-item ${isActive === list.id ? 'active' : ''}`}
        onClick={() => onclick(list.id)}>
      {(list.id + '').length <= 4
        ? <span style={{paddingRight: '1rem'}}>{`${list.id} : `} </span> : ''}
      {list.content || list.advice}</li>
  );
}

export default RenderList