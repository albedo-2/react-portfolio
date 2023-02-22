import React from 'react'
import sqldeveloper from "../assets/sqldeveloper.png";
import jira from "../assets/jira.png";
import servicenow from "../assets/servicenow.png";
import soapUI from "../assets/soapUI.png";
import jselenium from "../assets/jselenium.png";

const Skills2 = () => {
  const techs = [
    {
      id: 1,
      src: jira,
      title: 'Jira',
      style: 'shadow-blue-500'
    },
    {
      id: 2,
      src: servicenow,
      title: 'ServiceNOW',
      style: 'shadow-green-800'
    },
    {
      id: 3,
      src: sqldeveloper,
      title: 'Oracle SQL Developer',
      style: 'shadow-gray-400'
    },
    {
      id: 4,
      src: soapUI,
      title: 'SoapUI',
      style: 'shadow-green-300'
    },
    {
      id: 5,
      src: jselenium,
      title: 'Java Selenium',
      style: 'shadow-gray-400'
    },
    
  ]

  return (

    <div name='skills2' className='w-full bg-gradient-to-t
    from-gray-800 to-black h-screen'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full text-white'>
          <div>
            <p className='py-6'>These are the technologies I have experience to my past job roles</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3
          gap-8 text-center py-8 px-12 sm:px-0'>

            {
              techs.map(({id, src, title, style}) => (
                <div key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              
              <img src={src} alt='' className='w-20 mx-auto'/>
              
              <p className='mt-4'>{title}</p>
            </div>
              ))}

            
          </div>
        </div>
        
      </div>
  )
}

export default Skills2