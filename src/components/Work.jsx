import React from 'react'
import ama from "../assets/ama.png";
import accenture from "../assets/accenture.png";
import ibm from "../assets/ibm.png";
import atos from "../assets/atos.png";


const Work = () => {

  const work = [
    {
      id: 1,
      src: atos,
      institute: 'ATOS Information Technology, Inc.',
      title: 'IT Service Desk Analyst',
      date:'May 2022 - October 2022 | 6 months', 
      tasks:'Troubleshoots through inbound calls of hardware and software problems (third party and inhouse applications) involving technical resources to ensure resolution; Providing password reset and account unlock using Active Directory.'     
    },
    {
      id: 2,
      src: ibm,
      institute: 'IBM Business Services, Inc.',
      title: 'HR Contact Center Representative',
      date:'March 2021 - April 2022 | 1 year and 2 months',
      tasks: 'Receive inbound and outbound calls from employees and answer HR inquiries such as HR policies, payroll, benefits and recruitment.',
    },
    {
      id: 3,
      src: accenture,
      institute: 'Accenture, Inc.',
      title: 'Software Quality Assurance Engineer',
      date:'April 2019 - June 2020 | 1 year and 3 months',
      tasks:'Analyzing and reading of test requirements, test case execution, write and track bug reports using Jira/RTC. Work in coordination with the development team to resolve issues and complete the project activities.',
    },
    {
      id: 4,
      src: ama,
      institute: 'AMA Fairview Computer College',
      title:'Bachelor of Science in Computer Science',
      date:'March 2014 - April 2017',
    },
  ]

  return (
    <div name='work' className='w-full bg-gradient-to-b
    from-gray-800 to-black text-white'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 
          border-gray-500'>
            Experience and Education
            </p>
        </div>
        {
          work.map(({id, src, institute, title, date, tasks}) => (

            <div key={id} className="flex flex-col lg:flex-row items-center mb-20">

          <img src={src} alt='amacollege'
          className='w-28 hover:scale-105 duration-500 mr-6 mt-5' />
          <p className='text-xl mt-3 font-bold lg:flex-1 text-center sm:text-left'>
          {institute}

            <p className='text-base font-bold'>
            {title}
              </p>
            <p className='text-base text-gray-400'>
          {date}
              </p>
              <p className='text-base text-gray-400'>
          {tasks}
              </p>
            </p>
        </div>

          ))}

        
        
        
        
      </div>
    </div>
  )
}

export default Work