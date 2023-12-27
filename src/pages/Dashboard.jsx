import React, { useState } from 'react'
import {DUMMY_POSTS} from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [posts, setPosts]= useState (DUMMY_POSTS)
  return (
    <section className="dashboard">
      {
        posts.length?<div className="container dashboard__container">
          {
            posts.map(posts=>{
              return <article key={posts.id} className='dashboard__post'>
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={posts.thumbnail} alt="" />
                  </div>
                  <h5>{posts.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to = {`/posts/${posts.id}`}className = 'btn sm'>View</Link>
                  <Link to = {`/posts/${posts.id}/edit`}className = 'btn sm primary'>Edit</Link>
                  <Link to = {`/posts/${posts.id}/delete`}className = 'btn sm danger'>Delete</Link>
                </div>
              </article>
            })
          }  
        </div> : <h2 className='center'> You have No Posts Yet </h2>
      }
    </section>
  )
}

export default Dashboard