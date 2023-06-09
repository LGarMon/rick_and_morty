import styled from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const {onSearch} = props;
const [id, setId]= useState('')

const handleChange =(event) => {
setId(event.target.value)

};

  return (
    <div className= {styled.searchEdit}>
      <input type="search" className={styled.imput} onChange={handleChange} />
      <button onClick={onSearch} className={styled.searchButton} onClick ={() =>onSearch(id)}>Agrega</button>
    </div>
  );
}
