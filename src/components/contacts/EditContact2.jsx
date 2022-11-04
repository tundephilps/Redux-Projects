import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {

    let { id } = useParams();
    let Navigate = useNavigate();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (contact != null) {
          setName(contact.name);
          setPhone(contact.phone);
          setEmail(contact.email);
          setAddress(contact.address);
        }
        dispatch(getContact(id));
      }, [contact, dispatch, id]);
    
      const onUpdateContact = (e) => {
        e.preventDefault();
    
        const update_contact = Object.assign(contact, {
          name: name,
          phone: phone,
          email: email,
          address: address,
        });
    
        dispatch(updateContact(update_contact));
        Navigate("/")
      };
    

  return (
    <div  class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <form  onSubmit={(e) => onUpdateContact(e)}>
          <div class="modal-header">
            <h4 class="modal-title">Add Employee</h4>
            <button type="button" class="close" >&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" required
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control"
               placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            </div>
            <div class="form-group">
              <label>Address</label>
              <textarea class="form-control" 
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              
              required></textarea>
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="text" class="form-control" required
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div class="modal-footer">
            <input type="button" class="btn btn-default"  />
            <input type="submit" class="btn btn-success"  />
          </div>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default EditContact