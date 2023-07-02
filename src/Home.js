import './Home.css'
import * as React from 'react';
import NavBar from './Components/NavBar';
import myphoto from './media/my photo.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                                <img src="https://www.designurway.com/wp-content/uploads/2020/12/Software-development.png" alt="" />
                        </div>
                    </div>
                    
        </div>
        </div>
    );

}
export default Home;