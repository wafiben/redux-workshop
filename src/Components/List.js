import React from 'react'
import CustomCard from './Card';
import { useSelector } from 'react-redux';

function List() {
    const tasks=useSelector(state=>state)
const doneTasks=tasks.filter((elt)=>elt.done===true)
const undoneTasks=tasks.filter((elt)=>elt.done===false)

  
  return (
    <>
    <div>{tasks.map((elt)=>(<CustomCard key={elt.id} task={elt}/>))}</div>
    <div>
      undone task  {undoneTasks.map((elt)=><h1 key={elt.id}>{elt.description}</h1>)}
      done task  {doneTasks.map((elt)=><h1 key={elt.id}>{elt.description}</h1>)}
    </div>
    </>
  )
}

export default List