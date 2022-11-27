import React,{useState} from 'react'
export const UserContext = React.createContext();
function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
          name:"Shamshath",
          email:"shamshath@gmail.com",
          mobile:"9876987532",
          batch:"B38WET",
          timings:"11am to 1pm"
        },
        {
          name:"Ajith",
          email:"ajith@gmail.com",
          mobile:"9876987532",
          batch:"B38WET",
          timings:"11am to 1pm"
        },
        {
          name:"Ganesh",
          email:"ganesh@gmail.com",
          mobile:"9876987532",
          batch:"B38WET",
          timings:"11am to 1pm"
        },
        {
          name:"Maheshwari",
          email:"maheshwari@gmail.com",
          mobile:"9876987532",
          batch:"B38WET",
          timings:"11am to 1pm"
        }
      ])
  return <UserContext.Provider value = {{users,setUsers}}>
    {children}
  </UserContext.Provider>
}

export default UserContextComponent