import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
          <div id="footer">
            <div className="footer">
                <div className="logos-unit">
                    <div className="built-by">
                        <p><br/><br/>Built by:</p> <img src="images/demand-progress.png" />
                        <p style={{marginBottom: "50px"}}><br/><br/>Participating organizations:</p>  
                          <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center", marginTop: "-50px", borderBottomColor:"white"}}>
            
                             <a target="_blank">
                                  <img alt="About Face" src="images/About Face Logo.jpg" />
                              </a>

                              <a target="_blank">
                                  <img alt="Common Defense" src="images/Common-Defense-logo_preview.png" />
                              </a>
                            
                              <a target="_blank">
                                  <img alt="Daily Kos" src="images/DailyKosLogo.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Demand Progress" src="images/demand-progress.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Democracy for America" src="images/DFA-Logo-bottom-white-400.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Friends Committee on National Legislation" src="images/FCNL logo_preview.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Just Foreign Policy" src="images/JFP logo-long_preview.jpeg" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="The Nation" src="images/Nation.jpg" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Peace Action" src="images/PeaceActionLogo_rgb_preview.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Progressive Congress Action Fund" src="images/progressive_congress_fund.jpg" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Roots Action" src="images/RootsAction.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Stand" src="images/stand_rebrand_logo-transparent-bg_preview.png" />
                              </a>

                               <a target="_blank">
                                  <img alt="United For Peace And Justice" src="images/utpj.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Win Without War" src="images/winwithoutwar.jpg" />
                              </a>
                            
                              <a target="_blank">
                                <img alt="Womens Action For New Directions" src="images/WANDLogo.gif" />
                              </a>
                              
                              <a target="_blank">
                                <img alt="World Beyond War" src="images/World Beyond War 300x150_preview.jpeg" />
                              </a>
                              
                          </div>
                          <p style={{marginBottom: "50px"}}>Endorsing organizations:</p> 
                          <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center", marginTop: "-50px", borderBottomColor:"white"}}>
                             
                             <a target="_blank">
                                  <img alt="Anti War" src="images/Antiwarcom logo.png" />
                              </a>

                              <a target="_blank">
                                  <img alt="Code Pink" src="images/CP_logo_preview(1).jpeg" />
                              </a>
                            
                              <a target="_blank">
                                  <img alt="Credo" src="images/CREDO-logo_preview.png" />
                              </a>
                             
                              <a target="_blank">
                                  <img alt="Mpower Change" src="images/FreedomForward logo.jpeg" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Mpower Change" src="images/mpower_logo_preview.png" />
                              </a>
                              
                              <a target="_blank">
                                  <img alt="Our Revolution" src="images/OR-logo_preview.png" />
                              </a>
                  
                              <a target="_blank">
                                  <img alt="The Yemen Peace Project" src="images/YPP-logo_preview.png" />
                              </a>
                          </div>
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
                            <a className="twitter" href="https://twitter.com/intent/tweet?text=Our%20public%20dollars%20are%20fueling%20the%20worst%20humanitarian%20crisis%20on%20the%20globe.%20It%27s%20up%20to%20us%20to%20stop%20it.%20Urge%20your%20Sen%20to%20cosponsor%20%23SandersLeeYemen%20resolution%20%26%20cut%20off%20U.S.%20support%20for%20Saudi%20Arabia%27s%20brutal%20war%20in%20%23Yemen.%20www.Stopthewar.us" target="_blank">
                                <img src="images/twitter_white.svg" />
                                <span>Share on twitter</span>
                            </a>
                            <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://stopthewar.us/" target="_blank">
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