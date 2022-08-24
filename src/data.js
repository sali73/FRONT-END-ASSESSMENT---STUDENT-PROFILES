import React, { createContext} from 'react';
const products =[
  
    {
        id:1,
        name:'pr1',
        img:"https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        dis:"oriirkf",
        price:1,
        qty:1,
        cart: false,
    },   
    {
        id:2,
        name:'pr2',
        img:"https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        dis:"oriirkf",
        price:2,
        qty:2,
        cart: false,
    },
    {
        id:3,
        name:'pr3',
        img:"https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        dis:"oriirkf",
        price:3,
        qty:3,
        cart: false,
    },
    {
        id:4,
        name:'pr4',
        img:"https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        dis:"oriirkf",
        price:4,
        qty:4,
        cart: false,
    },
]

export const ProductContext = createContext(products)


