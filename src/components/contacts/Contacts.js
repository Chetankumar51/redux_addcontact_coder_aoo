import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'

const Contacts = ({data}) => {
    const {name,phone,email,id} = data
  return (
     <tr>
      <td> <div className='custom-control custom-checkbox' style={{marginRight:5}} >
              <input type="checkbox" className='custom-control-input' />
              <label className='custom-control-label' ></label>
          </div></td>
      <td> 
        <Avatar style={{marginRight:5}} name={name} size="45" round={true} /> {name}
        </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className='actions' >
          <Link to={`/contact/edit/${id}`}>
              <span className='material-icons me-2'  >edit</span>
          </Link>
          <a href="#">
              <span className='material-icons text-danger' >remove_circle</span>
          </a>
      </td>
    </tr>
    
  )
}

export default Contacts