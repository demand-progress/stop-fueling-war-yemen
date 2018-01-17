import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="logos-unit">
                    <div className="built-by">
                        <p><br/><br/>Built by:</p> <img src="images/demand-progress.png" />
                        {/* <p>In partnership with: </p> <img src="images/DailyKosLogo.png" /> */}
                    </div>
                    {/* <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
                       <a target="_blank">
                          <img alt="American Family Voices (AFV)" src="images/PasAFV.jpg" />
                       </a>
                      
                        <a target="_blank">
                            <img alt="Center for Media Justice" src="images/CMJ logo hi-res.jpg" />
                        </a>
                      
                        <a target="_blank">
                            <img alt="Climate Hawks Vote" src="images/CHV Logo2.jpg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Color of Change" src="images/COC-Full-Color.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Common Cause" src="images/common_cause_logo.jpg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Common Dreams" src="images/CD_stacked_white.jpg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Consumers Union" src="images/CU New Logo Hi-res (1).jpg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Democracy for America" src="images/DFA-Logo-bottom-white-400.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Free Press Action Fund" src="images/fp-actionfund.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="LoveArmy" src="images/LoveArmy.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="The Nation" src="images/Nation.jpg" />
                        </a>

                        <a target="_blank">
                            <img alt="OpenMedia" src="images/IMG_9304.jpg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="PEN America" src="images/Pen_Box_lrg (1).jpg" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="People Demanding Action" src="images/Logo-PeopleDemandingAction.jpg" />
                        </a>

                        <a target="_blank">
                            <img alt="People For the American Way" src="images/PFAW.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Presente Action" src="images/PresenteAction2016.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="Progressive Congress Action Fund" src="images/IMG_8465.jpg" />
                        </a>

                        <a target="_blank">
                            <img alt="Public Citizen" src="images/PC logo-high resolution.jpg" />
                        </a>

                        <a target="_blank">
                            <img alt="RootsAction.org" src="images/RootsAction.png" />
                        </a>
                        
                        <a target="_blank">
                            <img alt="SumOfUs" src="images/SumOfUs_lg_color.png" />
                        </a>      
                          
                    </div> */}
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
            </div>);
    }
}

export default Footer;