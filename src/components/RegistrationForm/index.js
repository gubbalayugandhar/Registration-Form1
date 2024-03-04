import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    check: false,
    firsterr: false,
    lasterr: false,
  }
  onBlurLastName = () => {
    const isvalidlast=this.validlastname()
    this.setState({lasterr:!isvalidlast})
  }

  onBlurFirstName = () => {
    const isvalidfirst=this.validfirstname()
    this.setState({firsterr:!isvalidfirst})
  }
  onChangeUserName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangePassword = event => {
    this.setState({lastname: event.target.value})
  }

 validlastname = () => {
  const {lastname} =this.state
  return lastname !== ""
 }
 validfirstname = () => {
  const {firstname} =this.state
  return firstname !== ""
 }

  SumbitForm = event => {
    event.preventDefault()
    const first=this.validfirstname()
    const last = this.validlastname()

    if(first && last) {
      this.setState({check:true})
    }
    else{
      this.setState({check:false,firsterr:!validfirstname,lasterr:!validlastname})
    }
  }

  renderform = () => {
    const {firstname,lastname, firsterr,lasterr} = this.state
    return (
      <form className="successcontainer" onSubmit={this.SumbitForm}>
        <div className="inputcontainer">
          <label className="labelinput" htmlfor="usernameid">FIRST NAME</label>
          <input
            id="usernameid"
            type="text"
            value={firstname}
            placeholder="First name"
            className="userinput"
            onChange={this.onChangeUserName}
            onBlur={this.onBlurFirstName}
          />
          {firsterr && <p>Required</p>}
        </div>
        <div className="inputcontainer" >
          <label className="labelinput" htmlfor="passwordid">LAST NAME</label>
          <input
            type="text"
            id="passwordid"
            value={lastname}
            placeholder="Last name"
            className="userinput"
            onChange={this.onChangePassword}
            onBlur={this.onBlurLastName}
          />
          {lasterr && <p>Required</p>}
        </div>
        <button type="submit" className="loginbtn">
          Submit
        </button>
      </form>
    )
  }

  resetbtn = () => {
    this.setState(pre => ({check:!pre.check,firstname:"",lastname:""})
  )}
  rendersucces = () => {

    return (
      <div className="successcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="successimg"
        />
        <h1 className="successhead">Submitted Successfully</h1>
        <button onClick={this.resetbtn} className="successbtn">Submit Another Response</button>
      </div>
    )
  }

  render() {
    const {check} = this.state
    return (
      <div className="mainformcontainer">
        <h1 className="mainheading">Registration</h1>
        <div className="formcontainer">
          {check ? this.rendersucces() : this.renderform()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
