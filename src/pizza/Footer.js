function Footer({time}) {
  const isClosed = time > 21 || time < 12
  return (
    <div className='footer'>
      <div className='order'>
        <div>{isClosed ? `현재 ${new Date().toString().split(' ')[4]}시로 닫었어요`
          : '12시 부터 22시 까지 열어요. 오셔서 주문하거나 온라인 주문하세요.'}
        </div>
        <button className='btn' disabled={isClosed}>Order</button>
      </div>
    </div>
  );
}

export default Footer