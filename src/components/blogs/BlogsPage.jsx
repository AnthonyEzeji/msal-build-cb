import React from 'react'
import BlogList from '../BlogList'
import Footer from '../Footer'
import Navbar from '../Navbar'
function BlogsPage() {
  return (
    <div className='pt-[90px]'>
        <Navbar/>
        <BlogList/>
        <Footer/>
    </div>
  )
}

export default BlogsPage