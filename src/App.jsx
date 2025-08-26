import React, { useMemo, useState } from 'react';

const productData=[
  {
    id:1,
    name:"LapTop",
    price:250,
  },
   {
    id:2,
    name:"Iphone",
    price:300,
  },
   {
    id:3,
    name:"Shoe",
    price:50,
  },
   {
    id:4,
    name:"Jacket",
    price:250,
  },
   {
    id:5,
    name:"Headphone",
    price:250,
  },
   {
    id:6,
    name:"Key Board",
    price:70,
  },
   {
    id:7,
    name:"Monitor",
    price:100,
  },
]

function App() {
  const [search,setSearch]=useState('');
  const [sortOrder,setSortOrder]=useState('asc')

  const filteredProducts=useMemo(()=>{
    const filteredData=productData.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));
    filteredData.sort((a,b)=>(sortOrder==="asc"?a.price-b.price:b.price-a.price));
    return filteredData
  },[search,sortOrder])

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-xl'> Product dashboard</h1>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search For product...' className='text-sky-300 border-2 border-blue-600'/>
      <select name="" id="" value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)} className='p-4'>
        <option value="asc">low to high</option>
        <option value="dsc">high to low</option>
      </select>
      <ul>
        {filteredProducts.map((product)=>(
          <li key={product.id}>
            {product.name}:{product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
