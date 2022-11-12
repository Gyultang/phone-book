import React, { useState } from 'react'
import {Row,Col,Form,Button} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'


const SearchBox = () => {
    const [keyword,setKeyword] = useState('')
    let dispatch = useDispatch();
    let {contact} =useSelector((state)=>state)

    const searchName=(event)=>{
        event.preventDefault();
        dispatch({type:"SEARCH_NAME",payload:{keyword}})
    }

  return (
       <div className='search-box'>
         <Form onSubmit={searchName}>
         <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(event)=>setKeyword(event.target.value)}/>
            </Col>
            <Col lg={2}>
                <Button type="submit">Search</Button>
            </Col>
        </Row>
         </Form>
       </div>
  )
}

export default SearchBox