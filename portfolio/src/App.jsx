import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div id = "background">
      <section id = "aboutSection">
        <div class = "contentWrapper">
          <div>
              <div id="about">
                  <div id="leftAbout">
                    <h2 id = "greeting">Hello there!</h2>
                    <h1 class = "title">I am Linus Karlsson, a software developer.</h1>
                    <p>Welcome to my page! I love to work with creative solutions and to fully immerse myself in an exciting project. I am an ambitious and independent worker, but work at my absolut best ability in a motivated team. I know how to communicate and I have a positive attitude. Right now I am doing my master studies in engineering for media technology at Linköping University.</p>
                  </div>
                  <div id="rightAbout">
                    <img id = "portrait" src="/images/portrait.jpg" alt="Portrait of Linus"></img>
                  </div>
              </div>
              <div class = "containerButton1">
                <button class = "button" type="button">Download CV</button>               
              </div>
          </div>  
        </div>            
      </section>

      <section id ="projectsSection">
        <div className="contentWrapper">
          <div id="projects">
            <h2>Portfolio</h2>
            <p>Here's a peek at the exciting projects I've been a part of.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
