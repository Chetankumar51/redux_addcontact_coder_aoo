import React from 'react'
import { useSelector } from 'react-redux'
import Contacts from './Contacts';

const Contact = () => {
    const contacts = useSelector(state => state.contact.contacts)
    console.log(contacts);
  return (
    <div>
       <table className="table shadow">
  <thead className='bg-danger text-white' >
    <tr>
      <th>
          <div className='custom-control custom-checkbox' >
              <input type="checkbox" className='custom-control-input' />
              <label className='custom-control-label' ></label>
          </div>
      </th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>E-mail</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {
     contacts.map((data)=><Contacts data={data} key={data.id} />)}
    
  </tbody>
</table>
    </div>
  )
}

export default Contact