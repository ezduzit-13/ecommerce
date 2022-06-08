import React,{useState,useEffect} from 'react'
import apiCalls from '../utils/api-calls'
import { useNavigate } from 'react-router-dom'
import { logout } from '../utils/authentication'
const HomePage = () => {
  const [products,getProducts] = useState(null)
  const url = 'http://localhost:8000/api/products/'
  const navigate = useNavigate()
  const user = parseInt(localStorage.getItem('user'))

  useEffect(()=>{
    // here include the api call for products
    apiCalls.getRequest(apiCalls.url_products)
    .then(data =>{
      getProducts(data)
      console.log(data)
    })
  },[url])
  return (
    <>
    <h1>I am the home page</h1>
    <button
    onClick={()=>{
      logout()
    }}
    >logout</button>
    <hr />
    <h2>The table of products</h2>
    {
      products && products.map(item =>{
        return(
          <>
          <h3
          onClick={()=>{
            navigate('product/'+ item.id)
          }}
          
          >{item.product_name}</h3>
          <h4>{item.product_description}</h4>
          <button
          onClick={(e)=>{
            e.preventDefault()
            console.log('the item id',item.id)
            console.log('the user', parseInt(user))
            const array = []
            const cart_obj = {
              user_id: user,
              product_id:item.id
            }
            apiCalls.postRequest(apiCalls.url_cart,cart_obj)
            .then(data => console.log(data))
          }}
          >add to cart</button>
          </>
        )
      })
    }
    
    </>
    
  )
}

export default HomePage