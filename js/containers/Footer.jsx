import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
          <div id="footer">
            <div className="footer">
                <div className="logos-unit">
                    <div className="built-by">
                        <p><br/><br/>Built by:</p> <img src="images/demand-progress.png" />
                        {/* <p>In partnership with: </p> <img src="images/DailyKosLogo.png" /> */}
                    </div>
                    <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
                    
                        <a target="_blank">
                            <img alt="Common Defense" src="images/Common-Defense-logo_preview.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Credo" src="images/CREDO-logo_preview.png" />
                        </a>
                      
                        <a target="_blank">
                            <img alt="Daily Kos" src="images/DailyKosLogo.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Democracy for America" src="images/DFA-Logo-bottom-white-400.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Friends Committee on National Legislation" src="images/FCNL logo_preview copy-iloveimg-resized.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Just Foreign Policy" src="images/JFP logo-long_preview.jpeg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Mpower Change" src="images/mpower_logo_preview.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Our Revolution" src="images/OR-logo_preview.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Peace Action" src="images/PeaceActionLogo_rgb_preview.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Roots Action" src="images/RootsAction.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Stand" src="images/stand_rebrand_logo-transparent-bg_preview.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Win Without War" src="images/winwithoutwar.jpg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="The Yemen Peace Project" src="images/YPP-logo_preview.png" />
                        </a>

                        

                    </div>
                    <div className="spacer"></div>
                    <div>
                        <div className="press-inquiries">
                            <h3>For Press inquiries, please contact us at:</h3>
                            <p>
                                <a className="no-em" href="tel://1-202-681-7582">202-681-7582</a> or <a href="mailto:press@demandprogress.org">press@demandprogress.org</a>
                            </p>

                            <br/>
                            <p>
                                <a href="https://demandprogress.org/privacy-policy/" target="_blank">Our privacy policy</a>
                            </p>
                        </div>
                        <div className="social-media">
                            <a className="twitter" href="https://twitter.com/intent/tweet?text=Call%20Congress%21%20Tell%20them%20they%20must%20stop%20the%20FCC%E2%80%99s%20plan%20to%20destroy%20the%20open%20internet%20by%20supporting%20legislation%20to%20restore%20%23NetNeutrality%20https%3A%2F%2Fstopthefcc.net%2F" target="_blank">
                                <img src="images/twitter_white.svg" />
                                <span>Share on twitter</span>
                            </a>
                            <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://www.savethenetfromtrump.com/" target="_blank">
                                <img src="images/facebook_white.svg" />
                                <span>Share on facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>);
    }
}

export default Footer;