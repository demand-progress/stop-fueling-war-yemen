import React, { Component } from 'react'
import { getQueryVariables } from '../utils'
import PhoneScript from './PhoneScript.jsx'
import CallInitiate from './CallInitiate.jsx'
import ActionForm from './ActionForm.jsx'
import { CONF, URLS } from '../config'

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = false;
        this.state.callMade = false; 
        this.state.emailAction = false;
        this.state.name= null;
        this.state.email = null;
        this.state.zip = null; 
        this.onSubmit = this.onSubmit.bind(this);
        this.callMade = this.callMade.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }
    
    componentWillMount () {
      this.setState({
        emailAction: window.location.href.indexOf('email=call') !== -1
      })
    }
    
    callMade(evt) {
      evt.preventDefault();
      setTimeout(function() { 
        this.setState({
            submitted: false,
            callMade: true
          }) 
        }.bind(this), 5000)  
    }
    
    formSubmitted(evt) {
      evt.preventDefault();
      setTimeout(function() { 
        this.setState({
          submitted: true
        })
        }.bind(this), 5000)
    }
    
    onSubmit(evt) {
      evt.preventDefault();
      const name = document.getElementById('name');   
      const email = document.getElementById('email');
      const address1 = document.getElementById('street');
      const zip = document.getElementById('zip');   

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const nameRegex = /^[A-Za-z '.-]+$/.test(name.value)
      
      
      if (!name.value.trim() || !nameRegex) {
        name.focus();
        alert('Please enter your name.');
        return;
      }
      
      // const email = form.email;
      if (!email.value.trim()) {
        email.focus();
        alert('Please enter your email.');
        return;
      } else if (!emailRegex.test(email.value.trim())) {
        email.focus();
        alert('Please enter a valid email.');
        return;
      }
      
      // const address1 = form.street;
      if (!address1.value.trim()) {
        address1.focus();
        alert("Please enter your address.");
        return;
      }
      
      // const zip = form.zip;
      if (!zip.value.trim()) {
        zip.focus();
        alert('Please enter your Zipcode.');
        return;
      } else if (zip.value.length < 5 || zip.value.length > 5) {
        zip.focus();
        alert('Please enter a valid Zipcode.');
        return;
      }
      
      const fields = {
        'action_user_agent': navigator.userAgent,
        'country': 'United States',
        'email': email.value.trim(),
        'form_name': 'act-petition',
        'js': 1,
        'name': name.value.trim(),
        'address1': address1.value.trim(),
        'zip': zip.value.trim(),
        'opt_in': 1,
        'page': CONF.actionKitPageShortName,
        'source': this.state.source || 'website'
      };
      
       return this.sendFormToActionKit(fields);
    }
    
    sendFormToActionKit(fields) {
      // iFrame
      this.setState({
        name: fields['name'],
        email: fields['email'],
        zip: fields['zip']
      })
      
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.setAttribute('name', 'actionkit-iframe');
      document.body.appendChild(iframe);
      
      // Form
      const form = document.createElement('form');
      form.style.display = 'none';
      form.setAttribute('action', URLS.actionKit);
      form.setAttribute('method', 'post');
      form.setAttribute('target', 'actionkit-iframe');
      document.body.appendChild(form);
      
      Object.keys(fields).forEach(function(key) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });
  
      form.submit()  
      return true
    }
    
    render() {
        let form = null;
        
        if(this.state.callMade){
          form = ( 
            < PhoneScript />
          )    
        } else if(this.state.emailAction || this.state.submitted) {
          form = (
            < CallInitiate callMade={ this.callMade } name= { this.state.name } email= { this.state.email } zip= { this.state.zip }/>
          )
        } else {
          form = (
            < ActionForm formSubmitted={ this.formSubmitted } onSubmit = { this.onSubmit } />
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