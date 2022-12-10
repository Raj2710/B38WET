import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate,useParams} from 'react-router-dom'
import {Formik,Field,Form} from 'formik'
import * as yup from 'yup'
import axios from 'axios';

function AddUsers() {

  let [initialValues,setInitialValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    mobile:"",
    dob:""
  })
  let [isValid,setIsValid] = useState(false)
  let navigate = useNavigate()
  let {id} = useParams()
  let UserSchema = yup.object().shape({
  firstName: yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required'),
  lastName: yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  mobile: yup.string().required('Required').matches(/^\d{10}$/,"Invalid Mobile Number"),
  dob:yup.string()
  })

  //save data for new users
  let saveData = async(values)=>{
    try {
      let res = await axios.post('https://61ee1f7ed593d20017dbac50.mockapi.io/users',values)
      console.log(res)
      if(res.status===201)
      {
        navigate('/all-users')
      }
    } catch (error) {
      console.log(error)
    }
  }

  //to Update Data
  let updateData = async(values)=>{
    try {
      let res = await axios.put(`https://61ee1f7ed593d20017dbac50.mockapi.io/users/${id}`,values)
      console.log(res)
      if(res.status===200)
      {
        navigate('/all-users')
      }
    } catch (error) {
      console.log(error)
    }
  }

  //prepopulate the data for edit functionality
  let getData = async()=>{
  try { 
    let res = await axios.get(`https://61ee1f7ed593d20017dbac50.mockapi.io/users/${id}`) 
    setInitialValues(res.data)
    setIsValid(true)
  } catch (error) {
    console.log(error)
  }
}

//will be triggered only if we are here for edit functionality based on params.id
useEffect(()=>{
    if(id)
    {
      getData()
    }
    else
    {
        setIsValid(true)
    }
},[])

  return <>
 <div className='container-fluid'>
 {isValid?<Formik
  initialValues={initialValues}

  validationSchema={UserSchema}

  onSubmit = {async(values) =>{
    if(id)
    {
      updateData(values)
    }
    else
    {
      saveData(values)
    }
  }}
 >
  {({ errors, touched }) => (
         <Form>
           <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" className="form-control" type="text" placeholder="First Name"/>
              {errors.firstName && touched.firstName ? (
             <div style={{color:"red"}}>{errors.firstName}</div>
           ) : null}
          </div>
          <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" className="form-control" type="text" placeholder="Last Name"/>
              {errors.lastName && touched.lastName ? (
             <div style={{color:"red"}}>{errors.lastName}</div>
           ) : null}
          </div>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" className="form-control" type="email" placeholder="Email"/>
              {errors.email && touched.email ? (
             <div style={{color:"red"}}>{errors.email}</div>
           ) : null}
          </div>
          <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <Field name="mobile" className="form-control" type="text" />
              {errors.mobile && touched.mobile ? (
             <div style={{color:"red"}}>{errors.mobile}</div>
           ) : null}
          </div>
          <div className="form-group">
              <label htmlFor="dob">DOB</label>
              <Field name="dob" className="form-control" type="date" />
              {errors.dob && touched.dob ? (
             <div style={{color:"red"}}>{errors.dob}</div>
           ) : null}
          </div>
          
           <Button type="submit" variant='primary'>Submit</Button>
         </Form>
       )}
 </Formik>:<div style={{"textAlign":"center"}}>Loading...</div>}
 </div>
  </>
}

export default AddUsers