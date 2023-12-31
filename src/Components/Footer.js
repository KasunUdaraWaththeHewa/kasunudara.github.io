import './Footer.css';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer(){
    return (
        <MDBFooter className='bg-black text-center text-white' id="FooterContainor">
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>
                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
                </section>
            </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: '#1b263b' }}>
            © 2023 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
            KasunUdara.com
            </a>
        </div>
    </MDBFooter>
    );
}
export default Footer;