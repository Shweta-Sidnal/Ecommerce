import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "./CartSlice";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (

    <div className="cart-container p-4 mx-3 my-4" style={{ backgroundColor: 'white' }} >
      <div className="col">
        <h2 style={{ textAlign: 'left', marginLeft: '45px' }}>Shopping Cart</h2>
        <hr />
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Your cart is currently empty</p>
            <div className="start-shopping">
              <Button className='btn btn-warning' ><Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: '500' }}>Start Shopping</Link></Button>
              <ToastContainer/>
            </div>
          </div>
        ) : (
          <div>
            <div className="container">
              {cart.cartItems?.map(cartItem => (

                <div className="row align-items-start" key={cartItem.title}>
                  <div className="col mb-5" >
                    <img src={cartItem.thumbnail} alt={cartItem.title} style={{ height: '250px', width: '350px', marginLeft: '-80px' }} />
                  </div>
                  <div className='col' style={{ textAlign: 'left' }}>
                    <h3>{cartItem.title}</h3>
                    <h4>{cartItem.description}</h4>
                    <p style={{ color: '#047a1d', fontWeight: '600' }}>In Stock   {cartItem.stock} </p>
                    <p> Eligible for Free Shipping in India</p>

                    <div className="cart-product-quantity">
                      Quantity<button className="rounded-circle m-2 " onClick={() => handleDecreaseCart(cartItem)}>-</button>
                      <span className="count">{cartItem.cartQuantity}</span>
                      <button className="rounded-circle m-2" onClick={() => handleIncreaseCart(cartItem)}>+</button>
                      <button className="btn btn-light" style={{ color: '#7db5a0', marginLeft: '110px' }} onClick={() => handleRemoveFromCart(cartItem)}> Remove</button>
                    </div>
                  </div>
                  <div className='col align-items-end ' style={{ marginLeft: '70px' }} >
                    <p >Price</p>
                    <p className="cart-product-price" style={{ fontWeight: '600', fontSize: '20px' }}>${cartItem.price}</p>
                  </div>
                  <hr />
                </div>
              ))}
              <div className=" row align-items-start">
                <div className="col "> </div>

                <div className="col  align-items-start" style={{ marginLeft: '-150px', marginTop: '10px' }}>
                  <span style={{ fontfamily: 'Monaco', fontSize: '20px', fontWeight: '600' }}><pre> Total 1Items in Cart : {cart.cartTotalQuantity}</pre></span>
                  <button className="btn btn-warning  mt-4" onClick={() => handleClearCart()}>Clear Cart</button>
                  <ToastContainer/>
                </div>
                <div className="col align-items-start" >
                  <span style={{ fontfamily: 'Monaco', fontSize: '20px', fontWeight: '600' }}><pre> Subtotal :  ${cart.cartTotalAmount}</pre></span>
                  <p>Taxes and shipping calculated at checkout</p>
                  <button className="btn btn-warning " >
                    <Link to="/Login" style={{ textDecoration: 'none', color: 'black' }}>Proceed to Buy </Link>
                  </button>

                  <button className="btn btn-warning ms-3" >
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Continue Shopping </Link>
                  </button>

                </div>
              </div>


            </div>

          </div>
        )}
      </div>
    </div>

  );
};

export default Cart;
