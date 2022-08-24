import React,{useState, useContext} from 'react'
import {ProductContext} from './data'


export default function Test() {
    const products = useContext(ProductContext)
  return (
<>
    <ProductContext.Provider value={products}>
    </ProductContext.Provider>
    </>
  )
}


