import React,{useState} from 'react'

const Home = () => {
  const [data,setData]=useState([]);
  const GetData=()=>{
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>
            setData(json)
            )
  }
  
  return (
    <>
    <div>
      {GetData()}
      {/* {data.map((el)=>{
        console.log(el)
      })} */}
    </div>
    </>
  )
}

export default Home

