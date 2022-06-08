import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import apiCalls from '../utils/api-calls'
const Navbar = () => {
  const [count, getCount] = useState(null)
  const navigate = useNavigate()
  useEffect(()=>{
    apiCalls.getRequest(apiCalls.url_cart)
    .then((data)=>{
      getCount(data.length)

    })
  },[])
  return (
    <div className='nav-container'>
    <h3
    className='word-link'
    onClick={()=> navigate('/')}
    >
      hey im navbar
    </h3>
    <h3
    className='word-link'
    onClick={()=> navigate('/checkout')}
    >
      Cart {count&& <span>{count}</span>}
      </h3>
    </div>

  )
}



export default Navbar