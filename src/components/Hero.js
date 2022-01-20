import React from 'react';
import './Hero.css'
import Img1 from '../Images/maid1.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Hero() {
  return(
    <div className='app_hero'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-5">
                    <h1>Exclusive Agency for Housemaids within Nairobi county</h1>
                    <p>At emaids, we help meet you <br /> needs by ensuring you get access to some of the most professional housemaids in Nairobi.</p>
                    <form className='form'>
                        <div>
                          <input size="30" type="email" className='form-control' placeholder='Email Adress' />
                        </div>
                        <div>
                          <button className='btn'>Subscribe</button>
                        </div>
                    </form>
                    <div className='icons'>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon className='instagram' />
                        <LinkedInIcon />
                    </div>
                </div>
                <div className="col-7">
                        <div className='founder'>
                            <div>
                                <img className='img-fluid img1' src="https://avatars.githubusercontent.com/u/26818458?v=4" alt="" />
                            </div>
                            <div>
                                <h5>Marcos Ochieng</h5>
                                <p>Founder of <strong>emaids</strong></p>
                            </div>
                        </div>
                        <div className="statistics">
                            <h5>Agency Analysis</h5>
                            <small>Engagement</small><br />
                            <small>Impression</small>
                        </div>
                        <div>
                            <div className='background'>
                              <img className='img-fluid img' src={Img1} alt="image" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Hero;
