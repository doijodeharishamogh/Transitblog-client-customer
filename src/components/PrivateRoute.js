import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function PrivateRoute(ComponentToProtect) {
  
  return class extends Component {
    constructor() {
      super();
      this.state = {
        redirect: false,
      };
    }



    componentDidMount() {
      if (localStorage.token) {
        this.setState({ redirect: false });
      } else {
        this.setState({ redirect: true });
        }        
    }


    render() {
      const { redirect } = this.state;
      
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}