import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

function Home() {
  const [search,setsearch] = useState('');

  const [FoodCat,setFoodCat] = useState([]);
  const [FoodItem,setFoodItem] = useState([]);

  const loaddata=async()=>{
    try {
      let response = await fetch("http://localhost:4000/api/fooddata", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
  
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
   // console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loaddata();
  },[])




  return (
    <>
    <Navbar/>
    <div>
      <Carousel/>
    </div>
    <div style={{marginTop:'1%',marginBottom:'1%'}}>
    <div className="form-inline my-2 my-lg-0" style={{display:'flex',maxWidth:'50%',marginLeft:'25%'}}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
    </div>
    </div>
    <div className='container'>
    {
  FoodCat !== []  // Issue: This condition won't work as expected
  ? FoodCat.map(data => {  // Issue: Arrow function syntax is incorrect
      return (
        <div key={data._id} className='row mb-3'>
          <div className='fs-3 m-3'>
            {data.CategoryName}
          </div>
          <hr />
          {FoodItem !== [] ?  // Issue: This condition won't work as expected
            FoodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())) ).map(filterItems => {
              return (
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                  <Card FoodItem={filterItems} options={filterItems.options[0]}/>
                </div>
              );
            })
            : <div>no such data found</div>
          }
        </div>
      );
    })
  : ""  // Issue: Empty string here might not be necessary depending on your use case
}

    </div>
    <Footer/>
    </>
  )
}

export default Home
