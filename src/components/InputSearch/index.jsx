import './style.css'
export function InputSearch({searchValue, handleChange }) {
  return (
  <input 
    type="search"
    className='text-search'
    onChange={(event) => handleChange(event)}
    value={searchValue}
    />
)
}