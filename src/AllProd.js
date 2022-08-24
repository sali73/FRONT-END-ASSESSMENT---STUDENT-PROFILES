import React,{useContext} from 'react'
import {Link } from 'react-router-dom'
import {ProductContext} from './data'

export default function AllProd() {
    const products = useContext(ProductContext)
    const allProducts = products.map((items)=>{
        return(
            <li key={items.id} >
             <Link to={`/details/${items.id}`}><img style={{width:'20%'}} src={items.img} /></Link>   
           </li>
        )   
    })
  return (
    <div>
        <h4>{allProducts}</h4>
    </div>
    
  )
}
