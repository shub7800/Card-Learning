import React from 'react'
import Card from "./components/Card";




const App = () => {

  const users=[
    {
      "name": "Shubham Gupta",
      "age": 22,
      "city": "Noida",
      "profession": "Software Engineer",
      "profile_photo": "https://media.licdn.com/dms/image/v2/D4D03AQGkVVZq6gfUDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691567604527?e=1738800000&v=beta&t=VifAx2GZz9G0Oh4AsnuD42tDow9kyfTuAN4cSTp0oDM"
    },
    {
      "name": "Kriti Kumari",
      "age": 26,
      "city": "Lucknow",
      "profession": "Front-end Developer",
      "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQHofnL3WAQacw/profile-displayphoto-shrink_400_400/B56ZOM4vO3HYAk-/0/1733235520225?e=1738800000&v=beta&t=TD8d0-rZ2a3wYGSH5X_rORNNIcRdXY60pCL_cIOMthg"
    },
    {
      "name": "Harshita Shukla",
      "age": 38,
      "city": "Delhi",
      "profession": "Senior Talent Acquisition Analys",
      "profile_photo": "https://media.licdn.com/dms/image/v2/D5635AQE71JCNObaFPw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730974253667?e=1733907600&v=beta&t=X5ikfnu2qhSUsFRXnDj4BAP5C5UG_HdhmFhrRSDE4D8"
    },
    {
      "name": "Chirag Vaishnav",
      "age": 26,
      "city": "Ajmer",
      "profession": "SDE",
      "profile_photo": "https://media.licdn.com/dms/image/v2/D5603AQFQG-OnJAiyXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722274114684?e=1738800000&v=beta&t=w4JV9F19vS4MJM6rWGmQqi5tF8EiqyOsjMUPZ-zrujY"
    },
    {
      "name": "Rajat Verma ",
      "age": 29,
      "city": "Bengaluru",
      "profession": "SDE-2",
      "profile_photo": "https://media.licdn.com/dms/image/v2/D4D03AQF-A1cb_HGDOg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677093242762?e=1738800000&v=beta&t=ct6Mt7cTAyolvdOwjHc2zPaEAUVKdhx1IvBa97yRXYY"
    }
  ]
  
  

  return (
    <div>
      <div className="p-10">
        {users.map((elem,idx)=>{
          return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} pic={elem.profile_photo} />
        })}
      </div>
    </div>
  )
}

export default App