import React from 'react';
import './Register.css'
import {Button} from '@material-ui/core'

function Register() {
  return (
      <div className="container">
          <div className='app_register'>
              <div className="row">
                  <div className="col-md-3">
                      <h2>Welcome to emaids</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt possimus nobis aliquam!</p>
                  </div>
                  <div className="col-md-9 form">
                      <h2 className='text'>Create your Profile</h2>
                      <div className="row">
                          <div className="col-md-6">
                                  <label htmlFor="name" className="form-label">Name:</label>
                                  <input type="text" className="form-control" placeholder='Enter name...'/>
                                  <label htmlFor="email" className="form-label">Email:</label>
                                  <input type="email" className="form-control" placeholder='Enter email...'/>
                                  <label htmlFor="location" className="form-label">Location:</label>
                                  <input type="text" className="form-control" placeholder='Enter location...'/>
                                  <label htmlFor="experience" className="form-label">Experience:</label>
                                  <input type="number" className="form-control" placeholder='Experience...'/>
                          </div>
                          <div className="col-md-6">
                                  <label htmlFor="contract" className="form-label">Contract:</label>
                                  <input type="text" className="form-control" placeholder='Full time/Part time...'/>
                                  <label htmlFor="salary" className="form-label">Salary:</label>
                                  <input type="text" className="form-control" placeholder='Expected Salary...'/>
                                  <label htmlFor="name" className="form-label">Age:</label>
                                  <input type="text" className="form-control" placeholder='Age...'/>
                                  <progress className='progress mt-3' max='100'/>    
                                  <input type="file" className='form-control'/>
                         </div>
                        <Button className='btn mt-3'>Submit</Button>
                      </div>
                  </div>
              </div>
            </div>
      </div>
  );
}

export default Register;
