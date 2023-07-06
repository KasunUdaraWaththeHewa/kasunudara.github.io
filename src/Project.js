import travelguidesrilanka from './media/TravelSriLanka.png';
import portfolio from './media/kasunudara.portfolio.png';
import flowerexchange from './media/LSEG Flower Exchange Project.png';
import quarantine from './media/Stay Safe Quarantine.png';
import * as React from 'react';
import NavBar from './Components/NavBar';
import './Project.css'
function Project(){
    return(
        <div className='ProjectsDiv'>
            <NavBar />
             <h2 className='h2Project'><b>Projects I have Done</b></h2>
            <div className='projectContainor'>
                <div className="projectRow">
                        <div data-aos="zoom-in-left" data-aos-duration="3000" class="divProjectItem">
                            <img src={travelguidesrilanka} alt="Avatar"/>
                                <div class="divProjectItemContainer">
                                    <h5><b>TravelGuideSriLanka</b></h5>
                                </div>
                        </div>
                        <div  data-aos="zoom-in-left" data-aos-duration="3000" class="divProjectItem">
                            <img src={portfolio} alt="Avatar"/>
                                <div class="divProjectItemContainer">
                                    <h5><b>KasunUdara.portfolio</b></h5>
                                </div>
                        </div>
                        <div  data-aos="zoom-in-left" data-aos-duration="3000" class="divProjectItem">
                            <img src={flowerexchange} alt="Avatar"/>
                                <div class="divProjectItemContainer">
                                    <h5><b>FlowerExchangeProject</b></h5>
                                </div>
                        </div>
                </div>
                <div className="projectDetailRow">
                    <div className="projectDetailContainor">
                        <p  data-aos="zoom-in-left"  data-aos-duration="3000">HTML CSS JS PHP MYSQL</p>

                    </div>
                    <div className="projectDetailContainor">
                        <p  data-aos="zoom-in-left"  data-aos-duration="3000">React HTML CSS Jquery Bootstrap AOS</p>
                    </div>
                    <div className="projectDetailContainor">
                        <p  data-aos="zoom-in-left"  data-aos-duration="3000">C++ MySql </p>
                    </div>
                </div>
                <div className="projectRow">
                        <div  data-aos="zoom-in-left" data-aos-duration="3000" class="divProjectItem">
                            <img src={quarantine} alt="Avatar"/>
                                <div class="divProjectItemContainer">
                                    <h5><b>Stay Safe Quarantine</b></h5>
                                </div>
                        </div>
                        
                       
                </div>
                <div className="projectDetailRow">
                    <div className="projectDetailContainor">
                        <p  data-aos="zoom-in-left"  data-aos-duration="3000">MongoDB Express.js React Node.js Bootstrap Html Css Js</p>

                    </div>
                    
                    
                </div>                 
            </div> 
        </div>
    
        
    );
}
export default Project;