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
      fetch(process.env.REACT_APP_baseAPIURL+'/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ redirect: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ redirect: true });
        });
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