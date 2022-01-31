import React from 'react'
import { Form } from 'react-bootstrap'
import './Search.styles.css'
const Search = (props) =>{
    return(
        <>
  <Form.Control
  className='search-box'
  name='search'
  onChange = {props.handleSearch}
  size="lg" 
  type="password"
   placeholder="Search Monsters" />
        </>
    )
}

export default Search