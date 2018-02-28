import React, { Component } from 'react'
import { CONF } from '../config'
import { getQueryVariables } from '../utils'

class CallInitiate extends Component {

    constructor(props) {
        super(props);
        this.state = getQueryVariables()
        this.state.calling = false
        this.phoneNumber = null
        this.onPhoneFormSubmit = this.onPhoneFormSubmit.bind(this)
        this.click = this.click.bind(this)
    }
    
    onPhoneFormSubmit(e) {
        e.preventDefault();
        const phoneField = document.getElementById('fieldPhone');      
        const number = phoneField.value.replace(/[^\d]/g, '');
       
        if (number.length !== 10) {
            phoneField.focus();
            return alert('Please enter your 10 digit phone number.');
        } else {
          this.setState({
            phoneNumber: number
          })
        }
       
        const request = new XMLHttpRequest();
        let url = `https://demandprogress.callpower.org/call/create?campaignId=${CONF.callPowerId}&userPhone=${number}`;
        
        let zip
        try {
            if ('zip' in sessionStorage) {
                zip = `${sessionStorage.zip}`;
            }
        } catch (err) {
            // Oh well
        }

       
        request.open('POST', url, true);
        request.send(); 
        const self = this
        const onSubmit= function(evt){
          evt.preventDefault();

          const sendFormToActionKit= function(fields){
            // iFrame
            
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.setAttribute('name', 'actionkit-iframe');
            document.body.appendChild(iframe);
            
            // Form
            const form = document.createElement('form');
            form.style.display = 'none';
            form.setAttribute('action', 'https://act.demandprogress.org/act/');
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
          }

          const fields = {
            'action_user_agent': navigator.userAgent,
            'country': 'United States',
            'email': self.props.email,
            'form_name': 'act-call',
            'js': 1,
            'name': self.props.name,
            'phone': self.state.phoneNumber,
            'zip': self.props.zip,
            'opt_in': 1,
            'page': 'Yemen',
            'source': self.state.source || 'website'
          };
          
          sendFormToActionKit(fields);
        }

       onSubmit(e)
    }
    
    click(e){
      this.onPhoneFormSubmit(e)
      this.props.callMade(e)
      this.setState({
        calling: true
      })
    }
    
    render() {
      let button = null
      
      if(this.state.calling){
        button = (<button className="btn">CALLING...
        </button>)
      } else {
        button= (<button className="btn" onClick={ this.click }>CALL CONGRESS
          <img src="images/phone.svg" />
        </button>)
      }
        return (
          <div className="bftn-form call-action-form" id="signThePetition">
            <h3>Thanks for signing. <br/>Now, could you make a call to your senators?</h3>
            <br/><br/>
            <div style={{color: 'white', lineHeight: 1.5}}>
              <strong style={{ fontSize: "25px" }}>
                Make a call to support the War Powers Resolution to end US support for the Saudi-led war in Yemen.
              </strong>
              <br/><br/>
            </div>
            <article>
              <p style={{margin:'0 0 20px 0'}}>
                Just enter your number and click “call”.  We’ll call you, give you a script of what you can say, and connect you to your senators.
              </p>
              <div className="phone-form">
                <form >
                  <input style={{border:'1px solid black'}} placeholder="Your Phone Number" id="fieldPhone" ref="field-phone" className="phone" name="phone" autoComplete="on" pattern="[\d\(\)\-\+ ]*" autoFocus />
                  {button}
                </form>
                <div className="privacy" style={{fontSize:"12px", fontFamily:"inherit", fontStyle:"italic", textAlign:"center", padding:"10px 0 20px", lineHeight:"1.5"}}>
                    This tool uses <a href="http://callpower.org/" target="_blank">Call Power</a>
                    <br/>
                </div>
                <strong style={{ fontSize: '25px', marginTop:'-4px', color: 'white' }}>
                  Or dial <a href="tel:+12028998938">202-899-8938</a> to connect.
                </strong>
              </div>
            </article>
          </div>
        )
    }
}

export default CallInitiate