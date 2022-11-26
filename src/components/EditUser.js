import React from 'react'
import {useParams} from 'react-router-dom'

function EditUser() {
  let {id} = useParams()
  return<>
    <h1>Edit User {id}</h1>
  </>
}

export default EditUser