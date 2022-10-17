import React from 'react'

const Register = () => {
  return (
    <div>
      <div>
      <img src="/assets/logo1.jpg" alt="" width="100" height="100" style={{marginTop:'20px',borderRadius:'60px'}}/>
      </div>
    <div className='col-md-3 ' style={{backgroundColor:'white', justifyItems:'center',marginTop:'20px', padding:'15px',marginLeft:'570px',borderRadius:'5px',border:'1px solid #b0b0b0'}}>
        <h2>Create an Account</h2>
          <form>
              <div className="form-group mb-3 ">
                <label style={{marginLeft:'-300px',fontWeight:'600'}}>Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter Name" />
              </div>
              <div className="form-group mb-3 ">
                <label style={{marginLeft:'-300px',fontWeight:'600'}}>Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
              </div>
              <div className="form-group mb-3 ">
                <label style={{marginLeft:'-230px',fontWeight:'600'}}>Mobile Number</label>
                  <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter contact no." />
              </div>
              <div class="form-group mb-4 ">
              <label style={{marginLeft:'-280px',fontWeight:'600'}}>Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="At least 6 Characters" />
              </div>
              <p style={{marginLeft:'-12px',fontSize:'12px',fontWeight:'500'}}>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
              <button type="submit" className="btn btn-sm mb-2" style={{width:'220px',backgroundColor:'#f7b757',border:'1px solid black',color:'black'}}>Submit</button>
              <p style={{marginLeft:'-12px',fontSize:'12px',fontWeight:'500'}}> Already have an account?<a href='/Login'>Sign In</a></p>
          </form>
      </div>
      </div>
  )
}

export default Register