import React, { useEffect } from 'react'
import { fetchLaptopList } from '../features/post.slice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../Cart/CartSlice';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Laptop = () => {
    const postListData = useSelector((state) => state.post.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLaptopList());
    }, [dispatch]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))

    };
    return (
        <>
            <div className="container  py-3">

                <div className="row">

                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center' style={{ color: '#66232b' }}> Lightweight, powerful, built to last. </h1>
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
                                        <Button className='btn btn-warning ms-3' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                                        <ToastContainer/>
                                    </Card.Body>
                                </Card>

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Laptop