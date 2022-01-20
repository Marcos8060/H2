import React from 'react';
import './Vip.css'
import maid2 from '../Images/maid3.png'

function Vip() {
  return (
      <div className='app_vip'>
          <div className="container">
            <div class="row">
                <div className="col-6">
                    <div className="back">
                        <img className='img-fluid' src={maid2} alt="maid" />
                    </div>
                </div>
                <div className="col-6">
                    <h2 className='vip_title'>Get the VIP experience</h2>
                    <p>Vip</p>
                </div>
            </div>
          </div>
      </div>
      );
}

export default Vip;
