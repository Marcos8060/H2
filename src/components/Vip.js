import React from 'react';
import './Vip.css'
import maid2 from '../Images/maid3.png'
import {Button} from '@material-ui/core'

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
                    <p>Vip Express service is a comprehensive emaids solution tailored for for busy families.
                        Not only will you ever wait at our counters, this free service ensures quick and effecient check-out
                        automatic billing and 24-hour access to our services. Sign up today.
                    </p>
                    <Button>Become a Vip</Button>
                </div>
            </div>
          </div>
      </div>
      );
}

export default Vip;
