import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className="center">
        <Link to = "/" className = 'btn primary'> HOME </Link>
        <h2>PAGE NOT FOUND</h2>
      </div>
    </section>
)
}

export default ErrorPage