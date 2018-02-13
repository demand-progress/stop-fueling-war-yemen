import React, { Component } from 'react'
import { getQueryVariables } from '../utils'
import PhoneScript from './PhoneScript.jsx'
import CallInitiate from './CallInitiate.jsx'
import ActionForm from './ActionForm.jsx'

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = false;
        this.state.callMade = false; 
        
        this.callMade = this.callMade.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }
    
    callMade(evt) {
      evt.preventDefault();
      this.setState({
        submitted: false,
        callMade: true
      })
    }
    
    formSubmitted(evt) {
      evt.preventDefault();
      this.setState({
        submitted: true
      })
    }
    
    
    render() {
        let form = null;
        let location = window.location.href.indexOf('email=call') !== -1
        
        if(location || this.state.submitted) {
          form = (
            < CallInitiate callMade={ this.callMade }/>
          )
        } else if(this.state.callMade){
          form = ( 
            < PhoneScript />
          )
        } else {
          form = (
            < ActionForm formSubmitted={ this.formSubmitted }/>
          )  
        }
        
        return (
          <div>    
          {form}
        </div>
      );
    }
}

export default Form;