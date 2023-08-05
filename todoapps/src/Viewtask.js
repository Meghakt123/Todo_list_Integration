import React, { useEffect, useState } from 'react'
import { Table,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Viewtask.css';




const baseurl='http://127.0.0.1:8000'

function Viewtask() {
    const [first, setfirst] = useState([])
  useEffect(() => {
    fetch(baseurl+'/Task_get').then(response=>response.json()).then(data=>setfirst(data))  //Task_get is the table view data
    .catch(err=>console.log(err))
  
  }, [])
  
  console.log(first)

  const handleDelete= async(id) => {
      await fetch(`${baseurl}/Task_delete/${id}`, {
        method:"DELETE",
      //   headers: {
      //     "content-type":"application/json"
      // }
    })
    setfirst(first.filter(_list=>_list.id !== id))
  }
  return (
    <div>
 <Table bordered className='tab' cellSpacing={20}>
      <thead>
        <tr>
          <th>SI No</th>
          <th>Name</th>
          <th>Title</th>
          <th>Description</th>
          <th>Priority(high/low)</th>
          <th>Delete</th>
          <th>Update</th>
          
        </tr>
      </thead>
      <tbody>
        {first.map((list,index)=>(     //index is for SI No
        <tr key={list.id}>
          <td>{index+1}</td>
          <td>{list.name}</td>
          <td>{list.title}</td>
          <td>{list.description}</td>
          <td>{list.priority}</td>

          <td><Button className='del' onClick={()=>handleDelete(list.id)}>Delete</Button></td>
          <td><Link  to="/Task_update/" state={{id:list.id}}><Button variant='success'>Update</Button></Link></td>

        </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Viewtask