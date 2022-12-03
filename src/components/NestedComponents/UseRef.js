import React,{useEffect, useRef, useState} from 'react'
import { Button } from 'react-bootstrap'

function UseRef() {
    let [name,setName] = useState("")
    // let [count,setCount] = useState(0)
    let count = useRef(0)
    let rollRef = useRef(null)
    useEffect(()=>{
        // setCount(count+1)
        count.current = count.current+1
    })
  return <div className='container-fluid'>
  <h1>
    Use Ref Example
  </h1>
  <input type={'text'} value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
  <span>{count.current}</span><br/><br/>
  <input type="text" placeholder='Roll No.' ref={rollRef}/><br/><br/>
  <Button variant='primary' onClick={()=>rollRef.current.focus()}>Click me to Focus</Button>
  </div>
}

export default UseRef