import React, { Component } from 'react';
import { CONF, URLS } from '../config';
import { getQueryVariables } from '../utils';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = getQueryVariables();
        this.state.submitted = false;
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
                  <h2 id="modal-header-thanks">Thanks for signing.</h2>
                </header>
                <article>
                  <p>
                    <p style={{fontSize: '20px', fontWeight: 'bold'}}>
                    Now, one of the most impactful things you can do to save net neutrality is to <strong>CALL CONGRESS TODAY</strong> and tell your lawmakers to support the ‘resolution of disapproval’ to overturn the FCC vote.
                  </p>
                </p>
                  <h4 style={{color: 'black'}}>Call: <a href="tel:8582640403">858-264-0403</a></h4>
                  <p>
                    We will connect you to the offices of your lawmakers.
                    <br/><br/>
                    You can use this script when talking to them —  just introduce yourself, be polite, and say:
                    <br/><br/>
                    <i>"As your constituent, I urge you to cosponsor the Congressional Review Act ‘resolution of disapproval’ to reverse the FCC's December vote repealing net neutrality. An open internet is vital for free expression and innovation.’</i>
                  </p>
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

}

export default Form;