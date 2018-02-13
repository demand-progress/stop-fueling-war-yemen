import React, { Component } from 'react'
import { CONF, URLS } from '../config'
import ajax from '../utils/ajax'
import PhoneScriptText from './PhoneScriptText.jsx' 

class PhoneScriptForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            sent: false
         }
    }
    
    onClickSendFeedback(e) {
        e.preventDefault();

        const data = {
            campaign: CONF.callCampaign,
            subject: 'Feedback from ' + (CONF.prettyCampaignName || CONF.callCampaign),
            text: '',
        };

        const fields = [
            document.querySelector('#who'),
            document.querySelector('#how'),
        ]

        fields.forEach(field => {
            data.text += `${field.name}:\n${field.value}\n\n`;
        })

        let url = URLS.feedback;

        for (let key in data) {
            url += key;
            url += '=';
            url += encodeURIComponent(data[key]);
            url += '&';
        }

        ajax.get(url);

        this.setState({
            sent: true,
        })
    }
    render() {
      let button = null
      if(this.setState.sent){
        button = (
          <button className="btn" >Thank You!</button>
        )
      } else {
        button = (
          <button className="btn" onClick={this.onClickSendFeedback.bind(this)} type="submit" name="submit">Send Feedback</button>
        )
      }
        return (
          <div>
              <form className="bftn-form call-action-form" action="#" method="get" >
                <h3>WE’RE CALLING YOU NOW.</h3>
                <br/><br/>
                <div style={{color: 'white', lineHeight: 1.5}}>
                  <strong style={{ fontSize: "20px" }}>
                  After the conversation, you can press * and we’ll connect you to the next office.
                  </strong>
                </div>
                <PhoneScriptText />
                  <h4>Who did you speak with?</h4>
                  <input required="required" type="text" name="Who did you speak with?" id="who" style={{'fontSize': '24px', 'height': '50px'}} />
                  <h4>How did it go?</h4>
                  <textarea required="required" type="text" name="How did it go?" id="how" style={{'fontSize': '24px', 'width': '100%', marginBottom: '10px'}} rows="4"></textarea>
                  <br />
                  {button}
              </form>
              <hr/>
            </div>
        )
    }
}

export default PhoneScriptForm