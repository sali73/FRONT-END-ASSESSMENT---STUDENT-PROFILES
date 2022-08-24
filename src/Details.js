import React, { useContext, } from 'react'
import { useParams } from 'react-router-dom';
import {Link } from 'react-router-dom'
import {ProductContext} from './data'

export default function Details() {
    const products = useContext(ProductContext)
    console.log(products)
    const {id} = useParams() 
    const thisProduct= products.find(prod => prod.id.toString() === id)
  return (
    <li >
        <h2>item name:{thisProduct.name}</h2>
        <h2> item dic:{thisProduct.dic}</h2>
        <h2> item price:{thisProduct.price}</h2>
        <h2> item qty:{thisProduct.qty}</h2>
    </li>
  )
}
