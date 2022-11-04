import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../actions/contactAction";
import { MdAddCircle, MdDelete } from "react-icons/md"


function Contacts() {

  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selctedContacts = useSelector(
    (state) => state.contact.selectedContacts
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);


  return (
    <>
    <div class="container">
  <div class="table-wrapper">
    <div >
      <div class="table-title">
        <div>
          <h2>Manage <b>Employees</b></h2>
        </div>
        <div class="col-sm-6">
          <a href="/contacts/add" className="btn btn-success" id="icon" data-toggle="modal"><i class="material-icons" id="material"><MdAddCircle /></i> <span>Add New Employee</span></a>
          <a href="" class="btn btn-danger" id="icon" data-toggle="modal"><i class="material-icons" onClick={() => dispatch(deleteAllContact())} id="material"><MdDelete /></i> <span>Delete</span></a>
        </div>
      </div>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span class="custom-checkbox">
								<input type="checkbox" id="selectAll"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                 />
								<label for="selectAll"></label>
							</span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        
         
      </tbody>
    </table>
 
  </div>
</div>
    </>
  )
}

export default Contacts;