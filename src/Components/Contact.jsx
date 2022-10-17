import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ven223x', 'template_yek6qw3', form.current, 'TlgbNKg-tMrS5yeb0').then(res => {
      console.log(res.text);
    }).catch(err => console.log(err));

  }

  return (
    <div style={{ backgroundImage: `url('/assets/black1.jpg')`, height: '636px' }}>
      <Container>
        <Row>
          <Col>
            <div className='contact'>
              <p className='contact_title'> Contact Us</p>
              <div >
                <p className='contact_content'><FontAwesomeIcon icon={faLocationDot} style={{ color: 'white', paddingRight: '15px', fontSize: '25px' }} />Address</p>
                <p className='contact_content1'>No 53/3 Manikanta complex 2nd floor<br />Next to Nagarbhavi village bus stop and skywalk <br />Bangalore 560072
                </p>
              </div>
              <div >
                <p className='contact_content'><FontAwesomeIcon icon={faPhone} style={{ color: 'white', paddingRight: '15px' }} />Phone No.</p>
                <p className='contact_content1'>+91-222-333-4444</p>
              </div>
              <div >
                <p className='contact_content'><FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', paddingRight: '15px' }} />EMail</p>
                <p className='contact_content1'>xyz@gmail.com</p>
              </div>
              <div >
                <p className='contact_content'><FontAwesomeIcon icon={faLink} style={{ color: 'white', paddingRight: '15px', fontSize: '15px' }} />Website</p>
                <p className='contact_content1'>skcollections.com</p>
              </div>
            </div>

          </Col>
          <Col>
            <div className="contact1">
              <div className="card" style={{ width: '400px', height: '500px' }}>

                <div className="card-body">
                  <h5 className="card-title mb-4">Get in Touch With Us</h5>
                  <form ref={form} onSubmit={sendMail} >
                    <div className="form-group">

                      <input type="text" className="form-control mb-4" name='name' aria-describedby="emailHelp" placeholder="Name" />
                      <input type="text" className="form-control mb-4" name='email' placeholder="Email" />
                      <input type="text" className="form-control mb-4" name='concern' placeholder="Concern" />
                      <textarea className="form-control" rows="3" name='message' placeholder="Message" />

                    </div>
                    <button type="submit" className="btn btn-dark mt-5 rounded-pill">Submit</button>
                  </form>


                </div>
              </div>

            </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Contact