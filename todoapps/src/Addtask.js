import React, { useEffect, useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import axios from 'axios'
import './Addtask.css';
import {BsListCheck} from "react-icons/bs";






const baseurl='http://127.0.0.1:8000/'
function Addtask() {

    const [first, setfirst] = useState({
        'name':'',
        'title':'',
        'description':'',
        'priority':'',
    })
    console.log(first)
    const handlechange=(event)=>{
        setfirst({
            ...first,
            [event.target.name]:event.target.value
        })
    }
    const submitform=(e)=>{
        e.preventDefault();
        const Taskdata=new FormData();
        Taskdata.append('name',first.name)
        Taskdata.append('title',first.title)
        Taskdata.append('description',first.description)
        Taskdata.append('priority',first.priority)


        try{
            axios.post(baseurl+'/Task_add',first).then((Response)=>console.log(Response.data))
        }
        catch(error){
            console.log("error")
        }
    }
    useEffect(() => {
      document.title='task_add'
    
      
    }, [])
  return (
    <div className='first'>
      <div className="header-bar">
    <h5 className='head2'><b>ADD TASK<BsListCheck/></b></h5>
</div>
      <div className='img'>
    <Form className='form1'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={first.name} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={first.title} onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={4} name="description" value={first.description} onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
        <Form.Label>Priority</Form.Label>
        <Form.Control as="textarea" name="priority" placeholder='high/low' value={first.priority} onChange={handlechange} />
      </Form.Group>
      <Button className='button' type="submit" onClick={submitform}>Submit</Button>
      
  </Form>
  </div>
  </div>
  )
}

export default Addtask