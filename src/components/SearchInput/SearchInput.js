import { useNavigate } from 'react-router-dom';




export default function SearchInput() {
  const navigate = useNavigate();


  const handleChange = (event) => {
    const value = event.target.value;
    navigate(`/${value}`); // обновление адресной строки
  }
  
  return (
      <input type="text" onChange={handleChange} />
  );
  
  
}