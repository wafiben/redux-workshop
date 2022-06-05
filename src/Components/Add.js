import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addTask } from './../Redux/Action';

function Add() {
    const dispatch=useDispatch();
  const [task, setTask] = useState({ id: "", description: "", done: false });

  const handleChange = (e) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setTask({ ...task, id: id, description: e.target.value, done: false });
  };
  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addTask(task))
      setTask({ id: "", description: "", done: false });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="set Task"
          value={task.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Add;
