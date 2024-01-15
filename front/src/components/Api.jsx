import React, { useEffect, useState } from 'react'

const Api = (props) => {
const [user,setUser]=useState([]);
const targeturl = "http://localhost:8080/controller/user";

useEffect(() => {




    fetch(targeturl, { method: "GET" })
      .then(res => res.json())
      .then(user => {
        props.HnadleJcbprops(user);
          
    })

          
},[]);




return (
    <div>Api</div>
  )
}

export default Api