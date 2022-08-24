import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {ProductContext} from './data'


export default function Cart(Props) {

    const products = useContext(ProductContext)
    const [product, setProduct] = useState(products)
    const [cart, setCart] = useState([])
    const [msg, setMsg] = useState(' your cart is empty!')
    function addtocart(item) {
      let cart2 = [...cart]
      cart2.push({ ...item })
      product.map((i) => {
        if (i.id === item.id) {
          if(i.qty >= 1){
            i.cart = true;
            i.qty -= 1
            setMsg('')
          }else {
            setMsg('no more stock')
        }
        }        
      })
      setCart(cart2)
    }

    function removetocart(item) {
        let cart2 = cart.filter((i) => i.id != item.id)
        product.map((i) => {
          if (i.id == item.id) {
            i.cart = false
          }
        })
        setCart(cart2)
      }

    function increase(item) {
        let x = cart.map((i) => {
    
          if (item.id == i.id) {
            i.qty += 1
          }
          return i
        })
        setCart(x)
      }

    function decrease(item) {
        let x = cart.map((i) => {
          if (item.id == i.id && i.qty > 1) {
            i.qty -= 1
          }
          return i
        })
        setCart(x)
      }
    
    function total() {
        let x = 0
        cart.map((i) => {
          x += i.price * i.qty
    
        })
        return x
      }

    return (
      <div>
         <Link to='/cart-list' > cart-list</Link>
         {msg}
        <div>
          {product.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.img} style={{width:'20%'}} />
                <div>
                  <h6>{item.name} - $ {item.price}</h6>
                  {item.cart == false
                    &&
                    <button className='btn btn-primary' onClick={() => addtocart(item)}>
                    Add to cart
                  </button>
                  }
                  {item.cart == true
                    &&
                    <button className='btn btn-success' onClick={() => addtocart(item)}>
                    Added
                  </button>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((i, index) => (
                            <tr key={i.id}>
                                <th>{index + 1}</th>
                                <th><img src={i.img} style={{ width: '4rem' }}/></th>
                                <td>{i.name}</td>
                                <td>{i.price}</td>
                                <td>
                                <button onClick={() => decrease(i)}>-</button>{i.qty}
                                <button onClick={() => increase(i)}>+</button>
                                </td>
                                <td>
                                <button onClick={() => removetocart(i)}>Remove</button>
                                </td >
                            </tr >
                        ))
                        }
                    </tbody>
                </table>

            <div>
                <div>
                    <h4>TOTAL: {total()}</h4></div>
                </div>
            </div>
       </div>

    )
}
