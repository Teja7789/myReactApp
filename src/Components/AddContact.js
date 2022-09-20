import React from 'react';

class AddContact extends React.Component {
  //render bcz classcomponent
  //class has state not hook
  state ={
    name:"",
    email:""
  };
  add = (e) =>{
    e.preventDefault();
    //changed
      if(this.state.name==="" || this.state.email ===""){
        alert("All fields are mandatory")
        return
      }
      this.props.addContactHandler(this.state);
      //clearing the fileds
      this.setState({name:"",email:""})
console.log(this.state)
    
  }
render(){
  return(
    <div className="ui main">
      <h2>Add Contacts</h2>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <lable>Name</lable>
          <input type="text" name="name" placeholder="Name" 
          value={this.state.name}
          onChange={(e) => this.setState({name:e.target.value})} />

        </div>
        <div className="field">
          <lable>Email</lable>
          <input type="text" name="email" placeholder="Email" 
          value={this.state.email}
          onChange={(e) => this.setState({email:e.target.value})}/>

        </div>
        <button className="ui button blue">Save</button>
      </form>
    </div>


  )
}
}
export default AddContact;


// const AddContact = () => {
 
//   return(
//     <div>
//      AddContact
//       </div>

//   );
// }
 
// export default AddContact;