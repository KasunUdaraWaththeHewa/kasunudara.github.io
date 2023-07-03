import './Home.css'
import * as React from 'react';
import NavBar from './Components/NavBar';
import myphoto from './media/my photo.png'
import ProgressBar from 'react-bootstrap/ProgressBar';



function Home(){
    return(
        <div className='HomeDiv'>
            <NavBar />
            <div className="firstDiv">
                <div className='meDetailsWithPhoto'>
                    <div className="divPhoto">
                        <img src={myphoto} alt="" />
                    </div>
                    <div className="divDetails">
                        <h4>Software Engineer</h4>
                        <h3>Kasun Udara</h3>
                        <p>Introducing Kasun Udara, a passionate and dedicated software engineer with a strong drive for innovation and problem-solving. With a solid foundation in software development and a keen eye for detail, Kasun strives to deliver exceptional solutions that seamlessly blend functionality and user experience.</p>
                        <div className='buttonsDiv'>
                            <div className="btnDownload">Download CV</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondDiv">
                    <h2 className='h2Services'><b>Services I Offer</b></h2>
                    <div className='servicesContainor'>
                        <div className='divServiceContainor'>
                            <div className="serviceRow">
                                    <div class="card">
                                        <div class="container">
                                            <h4><b>Full Stack Development</b></h4>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="container">
                                            <h4><b>Front End Development</b></h4>
                                        </div>
                                    </div>
                            </div>
                            <div className="serviceRow">
                                <div class="card">
                                    <div class="container">
                                        <h4><b>Back End Development</b></h4>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="container">
                                        <h4><b>Java Development</b></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className='divServiceImgContainor'>
                                <img src="https://www.norderbergs.com/storage/2020/09/professional-web-design-social-ink-professional-web-design-png-1000_813.png"  class="imageService" alt="" />
                        </div>
                    </div>
                    
            </div>
            <div className="thirdDiv">
                    <h2 className='h2Skills'><b>Skills I Pocess</b></h2>
                    <div className="skillDivContainor">
                        <div className="skillDivContainorLeft">
                                <img src="https://enterprix.us/wp-content/uploads/2020/04/web-design-element1-51-1536x1289.png" alt="" />
                        </div>
                        <div className="skillDivContainorRight">
                            <div className='skillSetLeft'>
                                    <label>HTML</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='HTML'></div>
                                    </div>
                                    <label>CSS</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='CSS'></div>
                                    </div>
                                    <label>JS</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='JS'></div>
                                    </div>
                                    <label>JQuery</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='JQUERY'></div>
                                    </div>
                                    <label>MYSql</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='MYSQL'></div>
                                    </div>
                                    <label>PHP</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='PHP'></div>
                                    </div>
                                    <label>Bootstrap</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='BOOTSTRAP'></div>
                                    </div>
                            </div>
                            <div className='skillSetRight'>
                                    <label>React.js</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='REACT'></div>
                                    </div>
                                    <label>Node.js</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='NODEJS'></div>
                                    </div>
                                    <label>Express.js</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='EXPRESSJS'></div>
                                    </div>
                                    <label>MongoDB</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='MONGODB'></div>
                                    </div>
                                    <label>Java</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='JAVA'></div>
                                    </div>
                                    <label>Python</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='PYTHON'></div>
                                    </div>
                                    <label>C++</label>
                                    <div id="myProgress">
                                        <div id="myBar" className='CPP'></div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="fourthDiv">
                
            </div>
        </div>
    );

}
export default Home;