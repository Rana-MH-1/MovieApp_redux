import React, {useState} from 'react';
import {Button,Form, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {Addmovie} from '../Actions';


const Add = () => {

    const dispatch = useDispatch() 

const [id, setId] = useState(uuidv4());
const [Newmovie, setNewmovie] = useState({
    title: '',
    posterUrl: '',
    description:'',
    rating:0
    });    

const [show, setShow] = useState(false);
const handleClose = () => {
    setShow(false) 
    setId('')
    setNewmovie({
    title: '',
    posterUrl: '',
    description:'',
    rating:0
    })};

const handleShow = () => setShow(true);
const Handlechange = (e) =>setNewmovie({...Newmovie,id,[e.target.name]: e.target.value})

const style={
    margin : '40px 620px',
    width : '130px',
    fontWeight:'bold'
}

    return (
        <>
    <Button variant="primary" onClick={handleShow} style={style}>
        Add a movie 
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add your favourite movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="title" name='title' onChange={Handlechange}/>
    <Form.Label>posterUrl</Form.Label>
    <Form.Control type="text" placeholder="posterUrl" name='posterUrl' onChange={Handlechange} />
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" placeholder="Rating" name='rating' onChange={Handlechange} />
    
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>description</Form.Label>
    <Form.Control as="textarea" rows={3} name='description' onChange={Handlechange} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>{dispatch(Addmovie(Newmovie))
        handleClose()}}>
            Save
        </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default Add