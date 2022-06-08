import axios from 'axios'
const apiCalls = {}
apiCalls.url_products = 'http://localhost:8000/api/products/'
apiCalls.url_cart = 'http://localhost:8000/api/cart/'
apiCalls.url_deepCart = 'http://localhost:8000/api/deep-cart/'


apiCalls.getRequest = async (url) => {
  let response = await fetch(url,{
    method:'GET',
    headers:{'Content-type': 'application/json'}
  })
  let data = response.json()
  return data
}

apiCalls.postRequest = async(url,obj) => {
  let response =  await fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(obj)
  })

  let data = await response.json()
  return data
}

apiCalls.putRequest = async (url,obj) => {
  let response =  await fetch(url, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(obj)
  })
  
  let data = await response.json()
  return data
}

 apiCalls.deleteRequest  = (url)=>{
  axios.delete(url).then(()=>{
    console.log('delete successful')
  })
}

export default apiCalls

