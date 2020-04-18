import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export class login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password: ''
        }
    }
        
      handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

      setAuthToken (token){
        if (token) {
          axios.defaults.headers.common['x-auth-token'] = token;
          localStorage.setItem('token',token)
        } else {
          delete axios.defaults.headers.common['x-auth-token'];
        }
      }

      onSubmit = async (event) => {
        event.preventDefault();
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        
        const body = JSON.stringify(this.state)

        try {
          const res = await axios.post(process.env.REACT_APP_baseAPIURL+'/api/auth', body, config)
          this.setAuthToken(res.data.token)
          this.props.history.push('/')
        }
        catch (err) {
          const errors = err.response.data.errors
          if (errors) {
            console.error(err);
            alert('Error logging in please try again');
          }
        }
        // fetch(process.env.REACT_APP_baseAPIURL+'/api/auth', {
        //   method: 'POST',
        //   body: JSON.stringify(this.state),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
        // .then(res => {
        //   if (res.status === 200) {
        //     //localStorage.setItem('token', res.data.token)
        //     alert("hello")
        //     console.log(res.data.token)
        //     alert(res.data.token)
        //     //this.props.history.push('/');
        //   } else {
        //     const error = new Error(res.error);
        //     throw error;
        //   }
        // })
        // .catch(err => {
        //   console.error(err);
        //   alert('Error logging in please try again');
        // });
      }

    render() {
        return (
          <div className="container">
          <br/>
          <br/>
          <br/>
          <div className="row">
              <form className="col s12" id="reg-htmlForm" onSubmit={this.onSubmit}>
              <div className="row">
                  <div className="input-field col s12">
                  <input placeholder = "Email id" name = "email" id="email" type="email" value={this.state.email} onChange={this.handleInputChange} className="validate" required/>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                  <input placeholder = "password" name = "password" id="password" type="password" value={this.state.password} onChange={this.handleInputChange} required/>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                  <button className="btn btn-large btn-register waves-effect waves-light" type="submit">Login
                      <i className="material-icons right">done</i>
                  </button>
                  </div>
              </div>
              </form>
          </div>
          </div>
        )
    }
}

export default login
