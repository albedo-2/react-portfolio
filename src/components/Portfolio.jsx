import React from 'react'
import django_todolist from '../assets/portfolio/django_todolist.jpg'
import tieFighter from '../assets/portfolio/tieFighter.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src:django_todolist,
      demo:'https://www.youtube.com/watch?v=sprd65gqXY4',
      code:'https://github.com/albedo-2/django-todo-list',
    },
    {
      id: 2,
      src:tieFighter
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
          border-gray-500'>
            Portfolio</p>
          <p className='py-6'>You will be able to see my work here but it is still work in progress.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0'>
        {
          portfolios.map(({id, src, demo, code}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' 
            className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <a href={demo} target="_blank" rel="noopener noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105'>Demo</button></a>
              <a href={code} target="_blank" rel="noopener noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105'>Code</button></a>
            </div>
          </div>
          ))
        }
          
        </div>

      </div>
    </div>
  )
}

export default Portfolio