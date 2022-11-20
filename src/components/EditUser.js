import React from 'react'
import {useParams} from 'react-router-dom'

function EditUser() {
  let params = useParams()
  console.log(params)
  return<>
    <h1>Edit User {params.id}</h1>
  </>
}

export default EditUser