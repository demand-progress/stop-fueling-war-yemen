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
        this.state.emailAction = false; 
        
        this.callMade = this.callMade.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }
    
    componentWillMount () {
      this.setState({
        emailAction: window.location.href.indexOf('email=call') !== -1
      })
    }

    componentDidMount () {
      window.scrollTo(0, 0)
    }
    
    callMade(evt) {
      evt.preventDefault();
      setTimeout(function() { 
        this.setState({
            submitted: false,
            callMade: true
          }, function(){
            window.scrollTo( 0, 0);
          }) 
        }.bind(this), 5000)  
    }
    
    formSubmitted(evt) {
      evt.preventDefault();
      setTimeout(function() { 
        this.setState({
          submitted: true
        }, function(){
          window.scrollTo( 0, 0);
        })
        }.bind(this), 5000)
    }
    
    
    render() {
        let form = null;
        
        if(this.state.callMade){
          form = ( 
            < PhoneScript />
          )    
        } else if(this.state.emailAction || this.state.submitted) {
          form = (
            < CallInitiate callMade={ this.callMade } callActionEmailForm= {this.state.emailAction} />
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