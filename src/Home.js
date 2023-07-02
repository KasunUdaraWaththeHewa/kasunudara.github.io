import './Home.css'
import * as React from 'react';
import NavBar from './Components/NavBar';
import myphoto from './media/my photo.png'
import Button from 'react-bootstrap/Button';

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

            </div>
            <div className="thirdDiv">

            </div>
        </div>
    );

}
export default Home;