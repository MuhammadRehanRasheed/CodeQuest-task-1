import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid text-white bg-black'>
          <div className='row'>
            <div className='col-5 mt-2'>
              <h4>CodeQuest Internship Program</h4>
            </div>
            <div className='col-7'>
              <div className='container-fluid mt-2'>
                <div className='row'>
                  <div className='col-auto'>
              <a href='#intro' className='mt-2 text-white' style={{fontSize: 12}}>My Introduction </a>
            </div>
            <div className='col-auto' style={{fontSize: 12}}>
              <a href='#HOE' className='mt-2 text-white'> Hands On Experience </a>
            </div>
            <div className='col-auto' style={{fontSize: 12}}>
              <a href='#LO' className='mt-2 text-white'> Learning Opportunities </a>
            </div>
            <div className='col-1' style={{fontSize: 12}}>
              <a href='#Mentor' className='mt-2 text-white'> Mentorship </a>
            </div>
            <div className='col-auto' style={{fontSize: 12}}>
              <a href='#PS' className='mt-2 text-white'> Problem-Solving </a>
            </div>
            <div className='col-auto' style={{fontSize: 12}}>
              <a href='#ETD' className='mt-2 text-white'> Exposure to Dynamics</a>
            </div>
            <div className='col-auto' style={{fontSize: 12}}>
              <a href='#PB' className='mt-2 text-white'> Portfolio Building </a>
            </div>
            <div className='col-auto' style={{fontSize: 12}}>
              <a href='#FAG' className='mt-2 text-white'> Feedback & Growth </a>
            </div>
            <div className='col-auto' style={{fontSize: 12}}>
              <a href='#Net' className='mt-2 text-white'> Networking </a>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <img src='/baner.jpg' alt="baner" width="1903" height="800"></img>
      <div id='intro' className='container text-center mt-4'>
      <h3>
        My Introduction
      </h3>
      <p className='mt-4' style={{fontSize: 25}}>"My name is Muhammad Rehan Rasheed, and I am a recent graduate of the Virtual University of Pakistan. Currently, I am gaining practical experience as a Web Developer Intern at Codequest, where I am dedicated to expanding my technical skills and contributing to innovative web development projects."</p>
      </div>
      <div id='HOE' className='container text-center mt-4'>
      <h2>What I expect form this Internship</h2>
      <h3 className='my-4'>
        Hands On Experience
      </h3>
      <p style={{fontSize: 25}}>"Work on real projects, applying your coding skills in HTML, CSS, JavaScript using framework like react.js and possibly backend language like next.js."</p>
      </div>
      <div id='LO' className='container text-center mt-4'>
      <h3>
      Learning Opportunities
      </h3>
      <p className='mt-4' style={{fontSize: 25}}>"Gain insights into industry practices, tools (like Git, npm, or various frameworks), and workflows (such as Agile)."</p>
      </div>
      <div id='Mentor' className='container text-center mt-4'>
      <h3>
      Mentorship
      </h3>
      <p className='mt-4' style={{fontSize: 25}}>"Collaborate with experienced developers who can provide guidance, feedback, and support."</p>
      </div>
      <div id='PS' className='container text-center mt-4'>
      <h3>
      Problem-Solving
      </h3>
      <p className='mt-4' style={{fontSize: 25}}>"Tackle bugs, develop features, and learn how to troubleshoot issues effectively."</p>
      </div>
      <div id='ETD' className='container text-center mt-4'>
      <h3>
      Exposure to Dynamics
      </h3>
      <p id='PB' className='mt-4' style={{fontSize: 25}}>"Participate in team meetings, code reviews, and collaborative projects, enhancing your communication skills."</p>
      </div>
      <div className='container text-center mt-4'>
      <h3>
      Portfolio Building
      </h3>
      <p className='mt-4' style={{fontSize: 25}}>"Create tangible work that you can showcase in your portfolio."</p>
      </div>
      <div id='FAG' className='container text-center mt-4'>
      <h3>
      Feedback and Growth
      </h3>
      <p className='mt-4' style={{fontSize: 25}}>"Receive constructive criticism to improve your coding and project management skills."</p>
      </div>
      <div id='Net' className='container text-center mt-4'>
      <h3>
      Networking
      </h3>
      <p className='mt-4' style={{fontSize: 25}}>"Build connections within the tech community, which can help with future job opportunities."</p>
      </div>
      <div className='container-fluid p-5 text-white text-center  mt-5 bg-black '>
      <h3 className='mt-5'>
      Conclusion
      </h3>
      <p className='mt-5' style={{fontSize: 25}}>"Overall, it’s a chance to bridge the gap between theoretical knowledge and practical application in a professional setting."</p>
      </div>
    </div>
  );
}

export default App;


