export function OutLinedButton(
  { className='btn btn-outline-dark fs-4 ps-3 pe-3',
    onClick,
    children,
    ...attributes}) {
  return (
    <div>
       <button className={className} onClick={onClick} {...attributes}>{children}</button>
    </div>
  );
}
export function BlackButton(
  { className='p-2 btn btn-dark fs-5',
    onClick,
    children,
    ...attributes}) {
  return (
    <div>
      <button className={className} onClick={onClick} {...attributes}>{children}</button>
    </div>
  );
}