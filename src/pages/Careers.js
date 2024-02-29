import React from 'react'
import { useLoaderData,NavLink } from 'react-router-dom'
const Careers = () => {

    const careers = useLoaderData();

  return (
    <div className='careers'>
        {
            careers.map((career) =>(
                <NavLink to="/" key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </NavLink>
            ))

        }
    </div>
  )
}

//loader function
export const careerLoaders = async () =>{
    const res = await fetch('http://localhost:4000/careers');

    return res.json()
}

export default Careers