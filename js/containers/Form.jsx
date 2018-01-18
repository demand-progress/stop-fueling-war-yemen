import React, { Component } from 'react';
import { CONF, URLS } from '../config';
import { getQueryVariables } from '../utils';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = true;
        this.state.countDown = 5;
    }

    render() {
        return (
          <form className="bftn-form call-action-form" onSubmit={ this.onSubmit.bind(this) }>
            <h3>Tell Congress: Stop fueling war in Yemen</h3>
            <br/><br/>
            <div style={{color: 'white', lineHeight: 1.5}}>
              <strong style={{ fontSize: "25px" }}>
                Yemen is facing a massive humanitarian catastrophe and we need your help to stop it. American aid is crucial to the Saudi war effort, and removing our assistance would limit Saudi attacks and may be even push them to the negotiating table.  
              </strong>
                <br/><br/>
                <div>Email your lawmakers now and tell them to support the War Powers Resolution to end US support for the Saudi-led war in Yemen.</div>
                <br/><br/>
                <div>Add your name to send a message (below) to Congress:</div>
            </div>
            <div id="signThePetition" style={{ 'display' : this.state.submitted ? 'none' : ''}}>
              <div className="flex">
                <input type="text" className="form-input" name="name" placeholder="Your Name" />
                <input type="email" className="form-input" name="email" placeholder="Your Email" />
              </div>
              <div className="flex">
                <input type="text" className="form-input" name="street" placeholder="Street Address" />
                <input type="text" className="form-input" name="zip" placeholder="Your Zipcode" />
              </div>
              <div className="flex">
                <button className="btn">
                  <span>SIGN NOW</span>
                </button>
              </div>
            </div>
            <span><i>One or more of the participating organizations (listed at bottom) may email you about their campaigns.</i></span>
            <div id="thanks" className="modal-wrapper-thanks modal-open-thanks" style={{ 'display' : this.state.submitted ? 'block' : 'none'}}>
              <div className="modal-thanks">
                <a className="close-thanks" href="#" onClick={ this.closeModal.bind(this) }>×</a>
                <header>
                  <h2 id="modal-header-thanks">Thanks for signing. <br/> Now, could you make a call?</h2>
                </header>
                <article>
                    <p style={{fontSize: '20px', fontWeight: 'bold'}}>
                      Make a call to stop warrantless spying on Americans:
                  </p>
                <div className="phone-form">
                    <form onSubmit={ this.onPhoneFormSubmit.bind(this) }>
                        <input placeholder="Your Phone Number" id="fieldPhone" ref="field-phone" className="phone" name="phone" autoComplete="on" pattern="[\d\(\)\-\+ ]*" autoFocus />
                        <button className="btn">CALL CONGRESS
                            <img src="images/phone.svg" />
                        </button>
                    </form>
                    <div className="privacy" style={{fontSize:"12px", fontStyle:"italic", textAlign:"center", padding:"5px 0 20px", lineHeight:"1.5"}}>
                        This tool uses <a href="http://callpower.org/" target="_blank">Call Power</a>
                        <br/>
                        Or dial <a href="tel:+12028998938">202-899-8938</a> to connect.
                    </div>
                </div>
                    Just enter your number and click “call”
                    <br/><br/>
                    We’ll connect you with members of Congress and key party leaders, and give you a script of what you can say.
                </article>
              </div>
            </div>
        </form>);
    }

    countDownToRedirect() {
        if (this.state.countDown <= 1) {
            window.location.href = "https://battleforthenet.com";
        }
        this.setState( { countDown: this.state.countDown - 1 });
    }
    
    closeModal(evt) {
      evt.preventDefault();
      this.setState({ submitted: false });
    }

    onSubmit(evt) {
        evt.preventDefault();

        const form = evt.target;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const name = form.name;
        if (!name.value.trim()) {
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

        this.setState({ submitted: true });
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

        form.submit()
    }
    
    onPhoneFormSubmit(e) {
        e.preventDefault();

        const phoneField = e.target.fieldPhone;       
        const number = phoneField.value.replace(/[^\d]/g, '');

        if (number.length !== 10) {
            phoneField.focus();
            return alert('Please enter your 10 digit phone number.');
        }

        const request = new XMLHttpRequest();
        let url = `https://demandprogress.callpower.org/call/create?campaignId=6&userPhone=${number}`;

        let zip
        try {
            if ('zip' in sessionStorage) {
                zip = `${sessionStorage.zip}`;
            }
        } catch (err) {
            // Oh well
        }

        this.props.changeForm('script');

        request.open('POST', url, true);
        request.send();
        
    }

}

export default Form;