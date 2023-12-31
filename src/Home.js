import './Home.css'
import * as React from 'react';
import NavBar from './Components/NavBar';
import myphoto from './media/my photo.png';
import travelguidesrilanka from './media/TravelSriLanka.png';
import portfolio from './media/kasunudara.portfolio.png';
import flowerexchange from './media/LSEG Flower Exchange Project.png';
import Footer from './Components/Footer';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className='HomeDiv'>
            <NavBar />
            <div className="firstDiv">
                <div className='meDetailsWithPhoto'>
                    <div className="divPhoto">
                        <img  data-aos="zoom-out-up" data-aos-duration="1500" src={myphoto} alt="" />
                    </div>
                    <div className="divDetails">
                        <h4  data-aos="fade-up" data-aos-duration="1500">FullStack Developer</h4>
                        <h3  data-aos="fade-up" data-aos-duration="1500">Kasun Udara</h3>
                        <p  data-aos="fade-up" data-aos-duration="1500">Introducing Kasun Udara, a passionate and dedicated software engineer with a strong drive for innovation and problem-solving. With a solid foundation in software development and a keen eye for detail, Kasun strives to deliver exceptional solutions that seamlessly blend functionality and user experience.</p>
                        <div className='buttonsDiv'>
                            <div  data-aos="flip-left"data-aos-duration="1500" className="btnDownload">Download CV</div>
                        </div>
                        <div className="socialDiv">
                            <div className="divImgLinkedIn">
                                <img  data-aos="zoom-in" data-aos-duration="1500" src="https://www.metroprop.com/wp-content/uploads/2019/08/linkedin-icon-square-white.png" alt="" className="linkedIn" />
                            </div>
                            <div className="divImgGitHub">
                                <img  data-aos="zoom-in" data-aos-duration="1500" src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="" />
                            </div>
                            <div className="divImgGmail">
                                <img  data-aos="zoom-in" data-aos-duration="1500" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da5056e3-da67-4ecb-a7f0-9dfba254e40e/ddpribr-f16837f3-2840-406c-906e-90c2ae875d5e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RhNTA1NmUzLWRhNjctNGVjYi1hN2YwLTlkZmJhMjU0ZTQwZVwvZGRwcmlici1mMTY4MzdmMy0yODQwLTQwNmMtOTA2ZS05MGMyYWU4NzVkNWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Cv1o28OmnSBUErr8VvRgvSYUrat1YFjdbVHUdOO8SLA" alt="" />
                            </div>
                            <div className="divImgInstagram">
                                <img  data-aos="zoom-in"data-aos-duration="1500" src="https://www.vippng.com/png/full/39-392497_new-instagram-logo-white-png.png" alt="" />
                            </div>
                            <div className="divImageFacebook">
                                <img  data-aos="zoom-in"data-aos-duration="1500" src="https://www.pinclipart.com/picdir/big/560-5604487_facebook-clip-art.png" alt="" />
                            </div>    
                            <div className="divImgHackerrank">
                                <img  data-aos="zoom-in"data-aos-duration="1500" src="https://www.pinclipart.com/picdir/big/138-1388876_2017-intertech-americas-corp-white-twitter-bird-transparent.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondDiv">
                    <h2 className='h2Services'><b>Services I Offer</b></h2>
                    <div className='servicesContainor'>
                        <div className='divServiceContainor'>
                            <div className="serviceRow">
                                    <div  data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="700" class="serviceCard">
                                        <div class="serviceCardcontainer">
                                            <h4><b>Full Stack Development</b></h4>
                                        </div>
                                    </div>
                                    <div  data-aos="zoom-out-down" data-aos-easing="linear" data-aos-duration="700" class="serviceCard">
                                        <div class="serviceCardcontainer">
                                            <h4><b>Front End Development</b></h4>
                                        </div>
                                    </div>
                            </div>
                            <div className="serviceRow">
                                <div    data-aos="zoom-out-up" data-aos-easing="linear"  data-aos-duration="700"  class="serviceCard">
                                    <div class="serviceCardcontainer">
                                        <h4><b>Back End Development</b></h4>
                                    </div>
                                </div>
                                <div   data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="700"  class="serviceCard">
                                    <div class="serviceCardcontainer">
                                        <h4><b>Java<br/>Development</b></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className='divServiceImgContainor'>
                                <img src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png"  class="imageService" alt="" />
                                <div className="buttonsDivContact">
                                    <div  data-aos="flip-left"data-aos-duration="1500"  className="btnDownload">
                                        <Link to="/contact" className="link" >Contact Me</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
            </div>
            <div className="thirdDiv">
                    <h2 className='h2Skills'><b>Proficient Skills</b></h2>
                    <div className="skillDivContainor">
                        <div className="skillDivContainorLeft">
                                <img  src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-Full-Stack-Developer-from-us.png" alt="" />
                        </div>
                        <div className="skillDivContainorRight">
                            <div className='skillSetLeft'>
                                    <label>HTML</label>
                                    <div id="myProgress">
                                        <div  id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='HTML'></div>
                                    </div>
                                    <label>CSS</label>
                                    <div id="myProgress">
                                        <div id="myBar"  data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='CSS'></div>
                                    </div>
                                    <label>JS</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='JS'></div>
                                    </div>
                                    <label>JQuery</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='JQUERY'></div>
                                    </div>
                                    <label>MySQL</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='MYSQL'></div>
                                    </div>
                                    <label>PHP</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='PHP'></div>
                                    </div>
                                    <label>Bootstrap</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='BOOTSTRAP'></div>
                                    </div>
                            </div>
                            <div className='skillSetRight'>
                                    <label>React.js</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='REACT'></div>
                                    </div>
                                    <label>Node.js</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='NODEJS'></div>
                                    </div>
                                    <label>Express.js</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='EXPRESSJS'></div>
                                    </div>
                                    <label>MongoDB</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='MONGODB'></div>
                                    </div>
                                    <label>Java</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='JAVA'></div>
                                    </div>
                                    <label>Python</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='PYTHON'></div>
                                    </div>
                                    <label>C++</label>
                                    <div id="myProgress">
                                        <div id="myBar" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='CPP'></div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="fourthDiv">
            <h2 className='h2Projects'><b>Projects I have Done</b></h2>
                <div className='projectsContainor'>
                    <div className="projectRow">
                            <div  data-aos="zoom-in-left"  data-aos-duration="3000" class="divProjectItem">
                                <img src={travelguidesrilanka} alt="Avatar"/>
                                    <div class="divProjectItemContainer">
                                        <h5><b>TravelGuideSriLanka</b></h5>
                                    </div>
                            </div>
                            <div  data-aos="zoom-in-left"  data-aos-duration="3000" class="divProjectItem">
                                <img src={portfolio} alt="Avatar"/>
                                    <div class="divProjectItemContainer">
                                        <h5><b>KasunUdara.portfolio</b></h5>
                                    </div>
                            </div>
                            <div  data-aos="zoom-in-left"  data-aos-duration="3000" class="divProjectItem">
                                <img src={flowerexchange} alt="Avatar"/>
                                    <div class="divProjectItemContainer">
                                        <h5><b>FlowerExchangeProject</b></h5>
                                    </div>
                            </div>
                    </div>
                    <div>
                        <div className="buttonsDivProjects">
                            <div  data-aos="flip-left"data-aos-duration="1500"  className="btnDownload">
                                <Link  className="link"  to="/projects">Projects</Link>
                            </div>
                        </div>
                    </div>
                        
                </div>
                
            </div>
            <Footer />
        </div>
    );

}
export default Home;