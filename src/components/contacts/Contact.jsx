import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";
import {AiFillDelete, AiFillEdit} from "react-icons/ai"

function Contact({ contact, selectAll }) {
    const dispatch = useDispatch();
    const { name, phone, email, id, address } = contact;
    return (
        <tr>
        <td>
          <span class="custom-checkbox">
                              <input   checked={selectAll}
                                          type="checkbox"
                                        />
                              <label for="checkbox1"></label>
                          </span>
        </td>
        <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
        <td>{email}</td>
        <td>{address.suite}{address.street}{address.city}</td>
        <td>{phone}</td>
        <td>
       <Link to={`/contacts/edit/${id}`} className="edit" >
       <i class="material-icons" data-toggle="tooltip" title="Edit"><AiFillEdit /></i>
                      </Link>
          <a href="" className="delete" 
             onClick={() => dispatch(deleteContact(id))}>
                <i class="material-icons" data-toggle="tooltip" title="Delete"><AiFillDelete /></i>
                </a>
        </td>
      </tr>
    );
}

export default Contact;