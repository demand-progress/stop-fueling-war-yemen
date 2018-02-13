import React, { Component } from 'react'
import { getQueryVariables } from '../utils'
import { CONF, URLS } from '../config'

class ActionForm extends Component {

    constructor(props) {
        super(props);
        this.state = getQueryVariables();
    }
    
    onSubmit(evt) {
      evt.preventDefault();
      
      const form = evt.target;
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const name = form.name;
      const nameRegex = /^[A-Za-z '.-]+$/.test(name.value)
      
      
      if (!name.value.trim() || !nameRegex) {
        name.focus();
        alert('Please enter your name.');
        return;
      }
      
      const email = form.email;
      if (!email.value.trim()) {
        email.focus();
        alert('Please enter your email.');
        return;
      } else if (!emailRegex.test(email.value.trim())) {
        email.focus();
        alert('Please enter a valid email.');
        return;
      }
      
      const address1 = form.street;
      if (!address1.value.trim()) {
        address1.focus();
        alert("Please enter your address.");
        return;
      }
      
      const zip = form.zip;
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
        'source': this.state.source || 'website',
        'want_progress': 1
      };
      
      this.sendFormToActionKit(fields);
    }
    
    sendFormToActionKit(fields) {
      // iFrame
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
      
      // form.submit()
    }
    
    render() {
      return(
        <div>
          <form className="bftn-form call-action-form" onSubmit={ this.onSubmit.bind(this) }>
            <h3>Tell Congress: Stop Fueling War in Yemen</h3>
            <br/><br/>
            <div style={{color: 'white', lineHeight: 1.5}}>
              <strong style={{ fontSize: "25px" }}>
                Yemen is facing a massive humanitarian catastrophe and we need your help to stop it. American aid is crucial to the Saudi war effort, and removing our assistance would limit Saudi attacks and maybe even push them to the negotiating table.  
              </strong>
                <br/><br/>
                <div>Email your lawmakers now and tell them to support the War Powers Resolution to end US support for the Saudi-led war in Yemen.</div>
                <br/><br/>
                <div>Add your name to send a message (below) to Congress:</div>
            </div>
            <div id="signThePetition">
              <div className="flex">
                <input type="text" className="form-input" name="name" placeholder="Your Name" pattern="[A-Za-z '.-]+"/>
                <input type="email" className="form-input" name="email" placeholder="Your Email" />
              </div>
              <div className="flex">
                <input type="text" className="form-input" name="street" placeholder="Street Address" />
                <input type="text" className="form-input" name="zip" placeholder="Your Zipcode" />
              </div>
              <div className="flex">
                {/* onClick={ this.props.formSubmitted } */}
                <button className="btn" >
                  <span>SIGN NOW</span>
                </button>
              </div>
            </div>
            <span><i>One or more of the participating organizations (listed at bottom) may email you about their campaigns.</i></span>
          </form>
          <p style={{color: 'white', textAlign: 'center'}}>
              <h4>Here's the language that will be sent to Congress:</h4>
          </p>
          <p style={{color: 'white', textAlign: 'center'}}>
            <i>
              As your constituent, I urge you to take action to end American complicity in the Saudi-led war in Yemen. We cannot sit by while our government increases suffering in a country devastated by conflict, cholera, and famine. I strongly urge you to co-sponsor and support the bipartisan War Powers Resolution sponsored by Sens. Bernie Sanders (D-VT) and Mike Lee (R-UT). The privileged resolution would end U.S. military involvement in the Saudi-led war in Yemen.
            </i>
          </p>
          <hr/>
        </div>
      )
    }  
  }
  
export default ActionForm