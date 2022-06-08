import React,{useEffect,useState} from 'react'
import apiCalls from '../utils/api-calls'

const CheckoutPage = () => {
  const [cartItems,getCart] = useState(null)
  useEffect(()=>{
    apiCalls.getRequest(apiCalls.url_deepCart)
    .then(data=>{
      console.log(data)
      getCart(data)
      console.log(cartItems)
    })
  },[])
  return (
    <>
    <h1>Checkout Page</h1>
    <hr />
    {
      cartItems &&

      cartItems.map((i)=>{
       
        return( 
        <>
        <button
        onClick={()=>{
          apiCalls.deleteRequest(apiCalls.url_cart+ i.id + '/')
        }}
        >delete</button>
        <h1>{i.product_id.product_name}</h1>
        <h3>{i.product_id.product_description}</h3>
        <p>{i.product_id.price}$</p>
        <hr />
        </>
        )
      })
    }

    </>
  )
}

export default CheckoutPage