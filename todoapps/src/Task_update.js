import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useLocation, } from 'react-router-dom'
import axios from 'axios'

const baseurl = 'http://127.0.0.1:8000'

function Task_update() {
  const location = useLocation()
  const { id } = location.state
  const [first, setfirst] = useState({
    'name': '',
    'title': '',
    'description': '',
    'priority': '',
  })
  console.log(first)
  const handlechange = (event) => {
    setfirst((firstitem) =>
      firstitem.map((item) =>
        item.id === id ? { ...item, [event.target.name]: event.target.value } : item
      )
    )
  }
  const handleUpdate = async (id) => {
    const datatoupdate = filteredData.find((item) => item.id === id)
    try {
      await axios.put(`${baseurl}/Task_update/${id}`, datatoupdate)
      setfirst(first.filter((item) => item.id !== id))
    }
    catch (error) {
      console.error('error while updating data', error)
    }
  }

  useEffect(() => {
    fetch(baseurl + '/Task_update/')
      .then((response) => response.json())
      .then((data) => setfirst(data))
      .catch((err) => console.log(err))
    document.title = 'updatetask'
  }, [])
  const filteredData = first.filter((item) => item.id === id)

  return (
    <div className='first'>
      
        {filteredData.map((list, index) => (
          <Form className='form1' key={index}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={first.name} onChange={handlechange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={first.title} onChange={handlechange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={first.description} onChange={handlechange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="textarea" rows={3} name="priority" value={first.priority} onChange={handlechange} />
            </Form.Group>
            <Button className='button' type="submit" onClick={() => handleUpdate(list.id)}>Submit</Button>
          </Form>
        ))}
     </div>
    )
        }

export default Task_update