import React from 'react';
const Contactcard = (props) => {
 //destructuring
//  const {id,name,email} = props.contact;
  return(
    <div class="item">
      {/* <div className="content">
        <div className="header">
           {name}</div>
          <div>{email}</div> */}
          
          <div>Remove</div>
      {/* // </div> */}
      <i className="trash-alternate-outline-icon"
      style={{color:"red"}}>delete</i>
    </div>
  );
}
 
export default Contactcard;