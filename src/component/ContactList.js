import React from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import { useState, useEffect } from 'react';
import {useSelector} from "react-redux";

const ContactList = () => {
    const {contact,keyword} = useSelector(state=>state)

    const [filterList,setFilterList] = useState([])


    useEffect(()=>{
        if(keyword !==""){
            let list = contact.filter((item) => item.name.includes(keyword));
            setFilterList(list);
        }else{
            setFilterList(contact);
        }
    },[keyword])
  return (
    <div>
        <SearchBox></SearchBox>
        <span>num:{filterList.length}</span>
        {filterList.map((item)=>(<ContactItem item={item}></ContactItem>))}
        
    </div>
  )
}

export default ContactList