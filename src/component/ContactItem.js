import React from 'react'
import {Col,Row} from "react-bootstrap"

const ContactItem = ({item}) => {
  return (
    <div className='contact-box'>
        <Row>
            <Col lg={2} className='image-icon'>
                <img width={80} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-YUd4SDH1tKFZUo5wd8M7X5iIpcVyrDwsQ&usqp=CAU'></img>
            </Col>
            <Col lg={10} className='item-box'>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem