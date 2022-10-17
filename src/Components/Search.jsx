import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { addToCart } from '../Cart/CartSlice';

const Search = (props) => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();
    const key = location.state?.data;
    const url = `https://dummyjson.com/products/search?q=${key}`
    console.log('url', url)
    console.log(key)

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                setData(res.data);
            })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))

    };
    return (
        <>
            <div className="container  py-3">

                <div className="row">

                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center '> New Arrivals</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <>

                        {data.products?.map((item) => {
                            return (

                                <div className="col-md-4 mb-5" key={item.id}>
                                    <Card style={{ width: '20rem', height: '40rem', border: 'none' }} >
                                        <Card.Img src={item.thumbnail} style={{ height: '250px' }} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <p style={{ fontWeight: '500' }}>Ratings:{item.rating}</p>
                                            <p>{item.description} </p>
                                            <p style={{ color: '#f75611', marginBottom: '1px', fontSize: '12px', fontWeight: '700' }}>Great Indian Festival</p>
                                            <p className='card-text lead fw-bold'>

                                                <span style={{ color: '#f75611' }}>-{item.discountPercentage}% </span> ${item.price}

                                            </p>
                                            <p style={{ fontSize: '15px', fontWeight: '800', color: '#047a1d' }}>In stock {item.stock}</p>
                                            <Button className='btn btn-warning'> <Link to='/Images' state={{ data: item.images }} style={{ textDecoration: 'none', color: 'black' }}> View Images </Link> </Button>
                                            <Button className='btn btn-warning ms-4' onClick={() => handleAddToCart(item)} >Add to Cart</Button>
                                            <ToastContainer/>
                                        </Card.Body>
                                    </Card>

                                </div>

                            )
                        })}

                    </>

                </div>
            </div>
        </>
    )
}

export default Search