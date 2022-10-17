import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addToCart } from '../Cart/CartSlice';
import { fetchTopsellList } from '../features/post.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const postListData = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopsellList());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))

  };
  return (
    <>
      <div>
        <Carousel sx={{ height: '50px' }}>
          <Carousel.Item>
            <a href='/Laptop' alt='Not Available'>
              <img
                className="d-block w-100"
                src="/assets/sale2.jpg"
                alt="First slide"
              />
            </a>

          </Carousel.Item>
          <Carousel.Item>
            <a href='/Fragrances' alt='Not Available'>
              <img
                className="d-block w-100"
                src="/assets/Perfume.jpg"
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h2>Fragrances</h2>
              <h4>The perfumes that gets you noticed</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='/Smartphones' alt='Not Available'>
              <img
                className="d-block w-100"
                src="/assets/mobile1.jpg"
                alt="Second slide"
              />
            </a>


          </Carousel.Item>
          <Carousel.Item>
            <a href='/Homedecoration' alt='Not Available'>
              <img
                className="d-block w-100"
                src="/assets/Decoration.jpg"
                alt="Third slide"
              />
            </a>

            <Carousel.Caption>
              <h2>Top Class Home Decors</h2>
              <h4>Intelligent design for every lifestyle</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <>
        <div className="container  py-3">

          <div className="row">

            <div className="col-12 mb-5">
              <h1 className='display-6 fw-bolder text-center' style={{ color: '#66232b' }}> New In Store</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">

            {postListData.products?.map((item) => {
              return (

                <div className="col-md-4 mb-5" key={item.id}>
                  <Card style={{ width: '20rem', height: '40rem' }} >
                    <Card.Img src={item.thumbnail} style={{ height: '250px', border: 'none' }} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <p style={{ fontWeight: '500' }}>Ratings:{item.rating}</p>
                      <p>{item.description} </p>
                      <p style={{ color: '#f75611', marginBottom: '1px', fontSize: '12px', fontWeight: '700' }}>Great Indian Festival</p>
                      <p className='card-text lead fw-bold'>
                        <pre>
                          <span style={{ color: '#f75611' }}>-{item.discountPercentage}% </span> ${item.price}
                        </pre>
                      </p>
                      <p style={{ fontSize: '15px', fontWeight: '800', color: '#047a1d' }}>In stock {item.stock}</p>

                      <Button className='btn btn-warning'> <Link to='/Images' state={{ data: item.images }} style={{ textDecoration: 'none', color: 'black' }}> View Images </Link> </Button>
                      <Button className='btn btn-warning ms-4' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                      <ToastContainer/>
                    </Card.Body>
                  </Card>

                </div>
              )
            })}
          </div>
        </div>
      </>
    </>
  )
}

export default Home