import React from 'react'
import { Form ,Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ContactForm = () => {
    //onChange : 타입할때마다 타입한 값을 저장

    const [name,setName]=useState('')
    const [phoneNumber, setPhoneNumber]=useState(0)
    const dispatch = useDispatch();
    

    const addContact=(event)=>{
        event.preventDefault(); //새로고침을 막아줌
        dispatch({type:"ADD_CONTACT", payload:{name,phoneNumber}}) //name:name, phoneNumber:phoneNumber줄임 자스 es6최신문법
    }
   
  return (
    <div>
        <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(event)=>setName(event.target.value)}/> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력하세요" onChange={event=>setPhoneNumber(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm