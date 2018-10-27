import React, { Component } from 'react'
import Img1 from './images/1.jpeg';
import Img2 from './images/2.jpeg';
import Img3 from './images/3.jpeg';
import Img4 from './images/4.jpeg';
import Img5 from './images/5.jpeg';

export default class rabani extends Component {
  render() {
    return (
      <div className="container">
     
 
 
      <div className="container gallery-container">
        
          <h1 className="text-center">Rabani Garden Pictures</h1>
        
          
            
          <div className="tz-gallery">
        
              <div className="row mb-3">
                  <div className="col-md-4">
                      <div className="card">
                          <a className="lightbox" href="images/1.jpeg">
                          <img src={Img1} alt="Park" className="card-img-top" />
                          </a>
                      </div>
                  </div>
                   
                  <div className="col-md-4">
                      <div className="card">
                          <a className="lightbox" href="images/2.jpeg">
                          <img src={Img2} alt="Park" className="card-img-top" />
                          </a>
                      </div>
                  </div>
                   
                  <div className="col-md-4">
                      <div className="card">
                          <a className="lightbox" href="images/3.jpeg">
                          <img src={Img3} alt="Park" className="card-img-top" />
                          </a>
                      </div>
                  </div>
              </div>
                <div className="row"> 
                  <div className="col-md-4">
                      <div className="card">
                          <a className="lightbox" href="images/4.jpeg">
                          <img src={Img4} alt="Park" className="card-img-top" />
                          </a>
                      </div>
                  </div>
                   
                  <div className="col-md-4">
                      <div className="card">
                          <a className="lightbox" href="images/5.jpeg">
                          <img src={Img5} alt="Park" className="card-img-top" />
                          </a>
                      </div>
                  </div>
                   
                 
              </div>
        
          </div>
        
      </div>
       
      </div>                                                                                
    )
  }
}
