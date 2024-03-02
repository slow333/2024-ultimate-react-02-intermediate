function RenderAdvice({advice}) {
  return (
    <div>
      { advice && <div>
        <div className='p-3 bg-body-secondary text-bg-info fs-5'>{advice}</div>
      </div>}

    </div>
  );
}

export default RenderAdvice