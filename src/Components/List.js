import React from 'react'

import { useSelector } from 'react-redux';

function List() {
    const users=useSelector(state=>state)
  
  return (
    <div>{users.map((elt,index)=>(<h1 key={index}>{elt.name}</h1>))}</div>
  )
}

export default List