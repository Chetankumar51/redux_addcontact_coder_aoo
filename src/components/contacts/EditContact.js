import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditContact = () => {
    let {id} = useParams();
    // alert(id)
    let history = useHistory()
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("")

    const createContact = (e) =>{
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        };
        dispatch(addContact(new_contact))
        history.push("/")
        // console.log(name,email,phone);
    }


  return (
    <div className='card-border-0 shadow' >
        <div className="card-header">Edit a Contact</div>
        <div className="card-body">
            <form onSubmit={(e)=>createContact(e)} >
                <div className="form-group">
                    <input type="text" 
                    className='form-control'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input type="text" 
                    className='form-control'
                    placeholder='Enter Your Phone Number'
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input type="text" 
                    className='form-control'
                    placeholder='Enter Your email'
                    value={phone}
                    onChange={(e)=>setphone(e.target.value)}
                    />
                </div>
                <button className='btn btn-primary mt-2' type='submit' >Create Contact</button>
            </form>
        </div>
    </div>
  )
}

export default EditContact