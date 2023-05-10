import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/5eab75b5-7432-4fd3-b60a-1bfe89f7d786/US-en-20230313-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='' 
    />
  <div className='bg-black/20 fixed top-0 left-0 w-full h-[500px]'></div>
  <div className='absolute top-[20%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
  </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account