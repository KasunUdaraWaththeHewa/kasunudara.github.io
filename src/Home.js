import './Home.css'
import * as React from 'react';
import NavBar from './Components/NavBar';
import myphoto from './media/my photo.png'

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