import './style.css'
export function ButtonPagination({onclick, text, disable}){
  return (
    <button disabled={disable} onClick={onclick} className='button-pagination'>
      {text}
    </button>
  )
}