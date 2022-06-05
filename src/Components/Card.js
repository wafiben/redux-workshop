import React,{useState} from "react";
import { Button, Card ,Form} from "react-bootstrap";
import { deleteTask } from "../Redux/Action";
import { useDispatch } from "react-redux";
import { updateTask ,doneTask} from './../Redux/Action';
function CustomCard({ task }) {
  const [show, setShow] = useState(false);
  const [description,setDescription]=useState('')
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  const handleChange=(e)=>{
    setDescription(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateTask(task.id,description))
    setDescription("");
    setShow(false)
  }
  const handleDone=()=>{
    dispatch(doneTask(task.id))
  }
  return (
    <Card style={{ width: "18rem", display: "flex", margin: "auto" }}>
      <Card.Body>
        <Card.Title>{task.description}</Card.Title>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="primary" onClick={handleShow}>
          Update
        </Button>
        <Button variant="success" onClick={handleDone}>done</Button>{' '}
      </Card.Body>
      {show && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="set Task"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Card>
  );
}

export default CustomCard;
