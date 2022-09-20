import React from 'react';
//props used pass contacts array
const Contactlist = (props) => {
// console.log(props)
const renderContactlist = props.contacts.map((contact)=>{
//  const {id,name,email} = props.contact;
  return(
    <div class="item">
      <img className="ui avatar image " src={} alt="user" />
      <div className="content">
        <div className="header">
          {contact.name}</div>
          <div>{contact.email}</div>
          {/* <div>Remove</div> */}
      </div>
      <i className="trash-alternate-outline-icon"
      style={{color:"red"}}>delete</i>
    </div>
  )
})
  return(
    <div className="ui celled list">
     {renderContactlist}
      </div>

  );
}
 
export default Contactlist;