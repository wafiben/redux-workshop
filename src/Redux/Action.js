export const addTask = (task) => {
  return { type: "ADD_TASK", payload: task };
};
export const deleteTask=(id)=>{
    
 return {type:"DELETE_TASK", payload: id};
}
export const updateTask=(id,description)=>{
  return {type:'UPDATE_TASK',payload:{id,description}}
}

export const doneTask =(id)=>{
    return {type:'DONE_TASK',payload:id}
  }
