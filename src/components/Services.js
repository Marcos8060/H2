import React from 'react';
import './Services.css'

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
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    <div className="number">
                        <h2>78%</h2>
                    </div>
                </div>
                <div className='service_item col-4 text-center'>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <circle cx='70' cy='70' r='70'></circle>
                    </svg>
                    <div className="number">
                        <h2>78%</h2>
                    </div>
                </div>
                <div className='service_item col-4 text-center'>
                    <svg>
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
                    <h5>Consultancy</h5>
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
