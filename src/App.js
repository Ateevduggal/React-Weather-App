import React, { useEffect, useState } from 'react'

const App = () => {
    const [city, setCity] = useState("")//for input field
    const [search, setSearch] = useState("");//for the name of the city or country
    useEffect(() => {
      const fetchApi = async () =>{
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b78023fc9717be1db9ae7347f66dc760`)
        const resJ = await res.json();
        console.log(resJ);
        setCity(resJ.main)
      }      
    fetchApi();
    },[search]);

  const Entry = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <div className="container">
        <div className="row text-center mt-5" id="weather">
        <div className="col-md-4 col-sm-3"></div>
        <div className="col-md-3 col-sm-5">
           <input 
              type="search" 
              className="form-control form-control-sm"
              onChange = {Entry}
            />
          <div className="w-100"></div>
        {
          !city ? 
          (
            <p>Please check the Input</p>
          ) : (
            <>
          <div className="d-flex justify-content-center mt-5">
          <i className="fas fa-street-view"></i>
          <h2>{search}</h2>
          </div>
          <div className="w-100 mt-5">
            <h2>{city.temp} &deg;C</h2>
            <h4 className="temp_min_max">
              Min: 5.3&deg;C ||   Max: 5.7&deg;C
            </h4>
          </div>
            </>
          )
        }
        </div>
      </div>
      </div>
    </>
  )
}

export default App
