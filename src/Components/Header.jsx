import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTotals } from '../Cart/CartSlice'

const Header = () => {
  const [message, setMessage] = useState('');
  const cart = useSelector((state) => state.cart);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }

  const read = event => {
    setMessage(event.target.value);

    console.log('value is:', message);
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark py-3 shadow">
        <div className="container-fluid">
          <img src="/assets/logo1.jpg" alt="" width="45" height="45" />
          <a className="navbar-brand fw-bold fs-20 px-2" href="/"> SK COLLECTION</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active px-4" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item py-1">
                <select className="form-select" aria-label="Default select example" onChange={event => handleChange(event.target.value)}>
                  <option value="DEFAULT">All</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Fragrances">Fragrances</option>
                  <option value="skincare">Skincare</option>
                  <option value="Women">Women Clothing</option>
                  <option value="Men">Men Shirts</option>
                  <option value="Womenshoes">Women Footware</option>
                  <option value="Menshoes">Men Footware</option>
                  <option value="Homedecoration">Homedecoration</option>
                  <option value="Sunglasses">Sunglasses</option>
                </select>
              </li>
              <li className='nav-item'>
                <form className="d-flex">
                  <input className="form-control me-2" type="text" placeholder="Search" name="message"
                    onChange={read}
                    value={message} />
                  <button className="search-icon btn btn-warning" ><Link to='/Search' state={{ data: message }}>  <FontAwesomeIcon icon={faMagnifyingGlass} /> </Link> </button>
                </form>
              </li>
              <li className='flag'><img src="/assets/flag.jpg" alt="" width="40" height="30" /> </li>
            </ul>


            <div className='buttons'>
              <a href='/Register' className='btn btn-outline-dark '>
                <FontAwesomeIcon icon={faRightToBracket} />Register
              </a>
              <a href='/Login' className='btn btn-outline-dark ms-3'>
                <FontAwesomeIcon icon={faUserPlus} /> Login
              </a>

              <a href='/Cart' className='btn btn-outline-dark ms-3'>
                <FontAwesomeIcon icon={faCartPlus} />Cart({cart.cartTotalQuantity})</a>
            </div>
          </div>
        </div>
      </nav>


      <nav className="navbar1 navbar-expand-lg navbar-dark py-2 shadow">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/All">All</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Smartphones">Smartphones</a>
              </li>

              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Laptop">Laptops</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Fragrances">Fragrance</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/skincare">Skin Care</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Women">Women Clothing</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Men">Men Clothing</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Womenshoes">Women Shoes</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Menshoes">Men Shoes</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Homedecoration">Home Decoration</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Sunglasses">Sunglasses</a>
              </li>
              <li className="nav-item1">
                <a className="nav-link active" aria-current="page" href="/Contact">Custome Care</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header