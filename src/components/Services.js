import React from 'react';
import './Services.css'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';


function Services() {
  return (
      <div className="container">
          <div className='app_services'>
              <div className="service_header">
                <h3 className='pt-4 underline'>Our Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta.</p>
              </div>
            <div className="service_progress row">
                <div className='service_item col-4 text-center'>
                    <svg className='yellow'>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    <div className="number">
                        <SecurityIcon />
                        {/* <h2>78%</h2> */}
                    </div>
                </div>
                <div className='service_item col-4 text-center'>
                    <svg className='blue'>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    <div className="number">
                        <SupportAgentIcon />
                        {/* <h2>78%</h2> */}
                    </div>
                </div>
                <div className='service_item col-4 text-center'>
                    <svg className='green'>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    <div className="number text-center">
                        <h2>78%</h2>
                    </div>
                </div>
            </div>
            <div className="service_details row">
                <div className="detail_item col-4 text-center">
                    <h5>Background Checks</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus aperiam, ut odio inventore fugiat!</p>
                </div>
                <div className="detail_item col-4 text-center">
                    <h5>Consultancy</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus aperiam, ut odio inventore fugiat!</p>
                </div><div className="detail_item col-4 text-center">
                    <h5>Consultancy</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus aperiam, ut odio inventore fugiat!</p>
                </div>
            </div>
          </div>
      </div>
  );
}

export default Services;
