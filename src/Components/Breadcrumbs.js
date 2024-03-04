import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const location = useLocation();
    let currentLink = '';
    const location_seperated = location.pathname.split("/")
        .filter(crumb => crumb !== '')
        .map((crumb) =>{
            currentLink += `/${crumb}`;

            return <div className='crumb' key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        })
  return (
    <div className='breadcrumbs'>{location_seperated}</div>
  )
}

export default Breadcrumbs