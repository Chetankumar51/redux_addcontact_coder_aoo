//actions
import { CREATE_CONTACT,GET_CONTACT } from "../constants/types"
export const addContact = (contact) => {
    return {
      type: CREATE_CONTACT,
      payload: contact,
    }
  }


  //get a contact

  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id,
  })
  