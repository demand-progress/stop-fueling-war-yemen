import React, { Component } from 'react';
import Form from './Form.jsx';
import Video from './Video.jsx';

class Main extends Component {

    render() {
        return (
          <div className="unit">
            <div className="hero" id="bftn-action-form">
                <div>
                    <div id="signThePetition">
                        <Form />
                    </div>
                </div>
                
                <div className="unit">
                    <Video />
                    <h4 style={{color: 'white', textAlign: 'center'}}>More information:</h4>
                    <p style={{ textAlign: 'center' }}>
                        <b>What’s Going in Yemen?</b>                      
                        <br/><br/>
                        Since March 2015, the U.S. has supported an Arab military coalition led by Saudi Arabia and the United Arab Emirates (UAE) in a civil war in Yemen. The war, that pits an armed Yemeni rebel group called the Houthis against the Yemeni government, has resulted in massive civilian casualties, and the largest humanitarian crisis in the world. It has killed more than 10,000 Yemenis and wounded more than 40,000, the majority of whom were civilians. The United Nations has stated that U.S.-supported airstrikes carried out by the Saudi-led coalition are the leading cause of civilian casualties. Meanwhile Amnesty International and Human Rights Watch have documented coalition airstrikes that have repeatedly targeted schools, hospitals, weddings, public markets, water and sanitation systems, and other vital civilian infrastructure – all probable war crimes carried out with U.S. support.                      
                        <br/><br/>
                        The coalition’s destruction of such vital civilian infrastructure has created the conditions necessary for the world’s largest humanitarian crisis – a crisis even larger than Syria according to the UN. The coalition has also used starvation as a weapon of war by blockading and interfering with the delivery of vital humanitarian and commercial assistance, which the majority of Yemeni civilians depend on for survival. Thanks to the war, more than 8 MILLION people are now on the brink of starvation and Yemen is home to the largest and fastest growing cholera crisis ever documented. Every 10 minutes, a Yemeni child under 5 dies from starvation or disease. It’s time to end America’s role in this suffering.
                        <br/><br/>
                        <b>The United States’ Role in Yemen's Civil War</b>
                        <br/><br/> 
                        Congress has never authorized America’s involvement in this war in Yemen, yet for almost three years the United States has literally fueled the conflict and its war crimes. Since the beginning of the intervention in March 2015, the United States has provided midair refueling to coalition jets, shared intelligence for targeting assistance, other logistical support, and sold U.S. bombs to the coalition. Throughout the war, Saudi Arabia and its allies have targeted civilians, hospitals, schools, and farms with American made bombs dropped by planes refueled by America. Meanwhile, the US has provided Saudi Arabia and its allies political cover while they deliberately use starvation and disease as weapons of war, putting 8 million Yemenis a step away from famine. None of this brutality would be possible without continued American support.
                        <br/><br/>
                        <b>What does this bill do?</b>
                        <br/><br/>
                        America’s unconstitutional war in Yemen has never been authorized by Congress. That’s why Senators Bernie Sanders (I-VT) and Mike Lee (R-UT) introduced a resolution, which would end U.S. military involvement in the Saudi-led coalition’s war in Yemen. The resolution would end U.S. refueling of and intelligence-sharing to coalition warplanes conducting aerial bombings in Yemen. It invokes the War Powers Resolution of 1973 that was passed in the wake of Vietnam to empower Congress as the sole body that can declare war. Under the War Powers Resolution, this important legislation is guaranteed a vote, which means that the Senate will finally debate and vote on this completely unauthorized war soon. This legislation is our best chance to end America’s role in this unconstitutional war and push for peace, which is the only significant way to relieve the suffering of the Yemeni people.
                        <br/><br/>
                        <strong><a className="back-to-form-link" href="#signThePetition">Our public dollars should not be funding Saudi and UAE war crimes in Yemen. Will you sign our petition and call your senators today to urge them to support the Sanders-Lee resolution?</a></strong>
                    </p>
                </div>
            </div>
        </div>);
    }
}

export default Main;