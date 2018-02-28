import React, { Component } from 'react'
import { getQueryVariables } from '../utils'


class ActionForm extends Component {

    constructor(props) {
        super(props);
        this.state = getQueryVariables();
        this.state.sent = false;
      
        this.click = this.click.bind(this)
    } 
    
    click(e){
      const processed = this.props.onSubmit(e) || false
     if(processed){
      this.setState({
        sent: true
      })
      this.props.formSubmitted(e)
       }
     }
    
    render() {
      let button = null
      
      if(this.state.sent){
        button = (
          <button className="btn">
            <span>Sending...</span>
          </button>
        )
      } else {
        button = (
          <button className="btn" onClick={ this.click } >
            <span>SIGN NOW</span>
          </button>
        )
      }
      
      return(
        <div className="bftn-form call-action-form">
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
            <div >
              <form>
              <div className="flex">
                <input id="name" type="text" className="form-input" name="name" placeholder="Your Name" pattern="[A-Za-z '.-]+" required/>
                <input id="email" type="email" className="form-input" name="email" placeholder="Your Email" required/>
              </div>
              <div className="flex">
                <input id="street" type="text" className="form-input" name="street" placeholder="Street Address" required/>
                <input id="zip" type="text" className="form-input" name="zip" placeholder="Your Zipcode" required/>
              </div>
              <div className="flex">
                {button}
              </div>
            </form>
           </div>
              <span><i>One or more of the participating organizations (listed at bottom) may email you about their campaigns.</i></span>
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