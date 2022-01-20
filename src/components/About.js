import React from 'react';
import './About.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WomanIcon from '@mui/icons-material/Woman';

function About() {
  return ( 
      <div className="app_about">
           <div className='container'>
            <div className="about_summary">
                <div className="summary_item">
                    <GroupAddIcon />
                    <small>5,000+ users</small>
                </div>
                <div className="summary_item">
                    <LockIcon />
                    <small>Lifetime Access</small>
                </div>
                <div className="summary_item">
                    <LockIcon />
                    <small>Value for Money</small>
                </div>
                <div className="summary_item">
                    <SupportAgentIcon />
                    <small>Lifetime Support</small>
                </div>
                <div className="summary_item">
                    <PeopleIcon />
                    <small>Community Support</small>
                </div>
            </div>
            <div className="about_header">
                <h2 className='underline'>Why Choose us</h2>
                <p>We are one of the best because we compliment all your household chore needs.</p>
            </div>
            <div className="about_cards">
                <div className="card-item">
                    <WbSunnyIcon />
                    <h6>2+ years of glory</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero.</p>
                </div>
                <div className="card-item">
                    <WomanIcon />
                    <h6>500+ professional housemaids</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero.</p>
                </div>
                <div className="card-item">
                    <SupportAgentIcon />
                    <h6>Accountability</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero.</p>
                </div>
                <div className="card-item">
                    <LockIcon />
                    <h6>Network Security</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero.</p>
                </div>
            </div>
           </div>
      </div>
        );
}

export default About;
