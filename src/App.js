import { useState } from 'react'
import './App.css'

function ToolbarButton({ href, text }) {
  return (
    <div className='col-auto' style={{ fontSize: 12 }}>
      <a href={href} className='mt-2 text-white'>
        {text}
      </a>
    </div>
  )
}

function BodyText({ parentHeading = '', head, body, id }) {
  return (
    <div id={id} className='container text-center mt-4'>
      {parentHeading && <h2>{parentHeading}</h2>}
      <h3>{head}</h3>
      <p className='mt-4' style={{ fontSize: 25 }}>
        {body}
      </p>
    </div>
  )
}

function App() {
  const [toolbarButtonProps] = useState([
    {
      href: '#intro',
      text: 'My Introduction'
    },
    {
      href: '#HOE',
      text: 'Hands On Experience'
    },
    {
      href: '#LO',
      text: 'Learning Opportunities'
    },
    {
      href: '#Mentor',
      text: 'Mentorship'
    },
    {
      href: '#PS',
      text: 'Problem-Solving'
    },
    {
      href: '#ETD',
      text: 'Exposure to Dynamics'
    },
    {
      href: '#PB',
      text: 'Portfolio Building'
    },
    {
      href: '#FAG',
      text: 'Feedback & Growth'
    },
    {
      href: '#Net',
      text: 'Networking'
    }
  ])

  const [BodyTextProps] = useState([
    {
      id: 'LO',
      head: 'Learning Opportunities',
      body: 'Gain insights into industry practices, tools (like Git, npm, or various frameworks), and workflows (such as Agile).'
    },
    {
      id: 'Mentor',
      head: 'Mentorship',
      body: 'Collaborate with experienced developers who can provide guidance, feedback, and support.'
    },
    {
      id: 'PS',
      head: 'Problem-Solving',
      body: 'Tackle bugs, develop features, and learn how to troubleshoot issues effectively.'
    },
    {
      id: 'ETD',
      head: 'Exposure to Dynamics',
      body: 'Participate in team meetings, code reviews, and collaborative projects, enhancing your communication skills.'
    },
    {
      id: 'PB',
      head: 'Portfolio Building',
      body: 'Create tangible work that you can showcase in your portfolio.'
    },
    {
      id: 'FAG',
      head: 'Feedback & Growth',
      body: 'Receive constructive criticism to improve your coding and project management skills.'
    },
    {
      id: 'Net',
      head: 'Networking',
      body: 'Build connections within the tech community, which can help with future job opportunities.'
    }
  ])
  return (
    <div className='App'>
      <div className='container-fluid text-white bg-black'>
        <div className='row'>
          <div className='col-5 mt-2'>
            <h4>CodeQuest Internship Program</h4>
          </div>
          <div className='col-7'>
            <div className='container-fluid mt-2'>
              <div className='row'>
                {toolbarButtonProps.map((obj) => {
                  return <ToolbarButton href={obj.href} text={obj.text} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src='/baner.jpg' alt='baner' width='1903' height='800'></img>
      <div id='intro' className='container text-center mt-4'>
        <h3>My Introduction</h3>
        <p className='mt-4' style={{ fontSize: 25 }}>
          "My name is Muhammad Rehan Rasheed, and I am a recent graduate of the Virtual University of Pakistan. Currently, I am gaining practical experience as
          a Web Developer Intern at Codequest, where I am dedicated to expanding my technical skills and contributing to innovative web development projects."
        </p>
      </div>
      <div id='HOE' className='container text-center mt-4'>
        <h2>What I expect form this Internship</h2>
        <h3 className='my-4'>Hands On Experience</h3>
        <p style={{ fontSize: 25 }}>
          Work on real projects, applying your coding skills in HTML, CSS, JavaScript using framework like react.js and possibly backend language like next.js.
        </p>
      </div>
      {BodyTextProps.map((obj) => {
        return <BodyText head={obj.head} body={obj.body} id={obj.id} parentHeading={obj.parentHeading} />
      })}
      <div className='container-fluid p-5 text-white text-center  mt-5 bg-black '>
        <h3 className='mt-5'>Conclusion</h3>
        <p className='mt-5' style={{ fontSize: 25 }}>
          "Overall, it’s a chance to bridge the gap between theoretical knowledge and practical application in a professional setting."
        </p>
      </div>
    </div>
  )
}

export default App
