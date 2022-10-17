import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'

const Images = () => {
  const location = useLocation();
  const history = useNavigate();
  const key = location.state?.data;
  console.log(key)
  return (
    <div>
      <div>
        <Carousel sx={{ height: '40px' }}>
          {key?.map((i) => {
            return (
              <Carousel.Item key={i} >
                <img
                  className="d-block1"
                  src={i}
                  alt="First slide"
                />
              </Carousel.Item>
            )
          })}

        </Carousel>
      </div>

      <div style={{ marginTop: '25px' }}>
        <Button className='btn btn-warning' onClick={() => history(-1)}> Back  </Button>
      </div>

    </div>
  )
}

export default Images