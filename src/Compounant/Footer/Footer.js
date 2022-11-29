import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div><footer class="bg-light center text-lg-start"  className='footer'>
  <div class="container p-4 pb-0">
        <form action="">
          <center>
      <div class="row">
        <div class="col-auto mb-5 mb-md-0">
              <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
    
        <div class="col-md-5 col-12 mb-4 mb-md-0">
          <div class="form-outline mb-4">
            <input type="email" id="form5Example25" class="form-control" />
            <label class="form-label" for="form5Example25">Email address</label>
          </div>
        </div>

        <div class="col-auto mb-4 mb-md-0">
          <button type="submit" class="btn btn-primary mb-4">
            Subscribe
          </button>
              </div>
              
            </div>
            </center>
    </form>
  </div>

      <div class="text-center p-3" style={{backgroundColor:" #0d6efd"}}>
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">Turkyeh Yousef </a>
  </div>
</footer></div>
  )
}
