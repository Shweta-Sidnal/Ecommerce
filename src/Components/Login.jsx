import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div>
        <img src="/assets/logo1.jpg" alt="" width="100" height="100" style={{ marginTop: '30px', borderRadius: '60px' }} />
      </div>
      <div className='col-md-3 ' style={{ backgroundColor: 'white', justifyItems: 'center', marginTop: '30px', padding: '15px', marginLeft: '570px', borderRadius: '5px', border: '1px solid #b0b0b0' }}>
        <h2>Sign In</h2>
        <form>
          <div className="form-group mb-3 ">
            <label style={{ marginLeft: '-300px', fontWeight: '600' }}>Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />

          </div>
          <div class="form-group mb-4 ">

            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-sm mb-2" style={{ width: '220px', backgroundColor: '#f7b757', border: '1px solid black', color: 'black' }}>Submit</button>
          <p style={{ marginLeft: '-12px', fontSize: '12px', fontWeight: '500' }}>By continuing, you agree to Our Conditions of Use and Privacy Notice.</p>
          <p style={{ fontSize: '13px', color: '#8d8f8f' }}> New to SK Collections?</p>
          <button type="submit" className="btn mb-2 btn-sm btn-outline-secondary" style={{ width: '330px', backgroundColor: '#e3e6e6', color: 'black' }}>
            <Link to='/Register' style={{ textDecoration: 'none', color: 'black' }}>Create New Account</Link> </button>
        </form>
      </div>
    </div>
  )
}

export default Login