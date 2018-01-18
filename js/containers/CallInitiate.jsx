import React, { Component } from 'react'

class CallInitiate extends Component {

    constructor(props) {
        super(props);
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

        // this.props.changeForm('script');
  
      //#### remember to uncomment
        // request.open('POST', url, true);
        // request.send();
        
    }

    render() {
        return (
          <div className="bftn-form call-action-form">
            <h3>Thanks for signing. <br/> Now, could you make a call?</h3>
            <br/><br/>
            <div style={{color: 'white', lineHeight: 1.5}}>
              <strong style={{ fontSize: "25px" }}>
                Make a call to support the War Powers Resolution to end US support for the Saudi-led war in Yemen.
              </strong>
              <br/><br/>
            </div>
            <article>
              {/* <p style={{fontSize: '20px', fontWeight: 'bold', margin:'0 0 20px 0'}}>
                Make a call to support the War Powers Resolution to end US support for the Saudi-led war in Yemen.
              </p> */}
              <div className="phone-form">
                <form onSubmit={ this.onPhoneFormSubmit.bind(this)}>
                  <input style={{border:'1px solid black'}} placeholder="Your Phone Number" id="fieldPhone" ref="field-phone" className="phone" name="phone" autoComplete="on" pattern="[\d\(\)\-\+ ]*" autoFocus />
                  <button className="btn" onClick={ this.props.callMade }>CALL CONGRESS
                      <img src="images/phone.svg" />
                  </button>
                </form>
                <div className="privacy" style={{fontSize:"12px", fontFamily:"inherit", fontStyle:"italic", textAlign:"center", padding:"10px 0 20px", lineHeight:"1.5"}}>
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
        )
    }
}

export default CallInitiate