import myimage from "../Assets/myimage.jpg";
import Layoutone from "../Layout/Layoutone";

function About() {
  return (
    <div>
      <Layoutone/>
      <div className='about'>
          <div className="about-text"> 
              <h1 className="heading">About Me</h1> 
              <p> 
                  GeeksforGeeks is a leading platform 
                  that provides computer science 
                  resources and coding challenges for 
                  programmers and technology 
                  enthusiasts, along with interview 
                  and exam preparations for upcoming 
                  aspirants. With a strong emphasis on 
                  enhancing coding skills and knowledge, 
                  it has become a trusted destination 
                  for over 12 million plus registered 
                  users worldwide. The platform offers 
                  a vast collection of tutorials, practice 
                  problems, interview tutorials, articles, 
                  and courses, covering various domains 
                  of computer science. 
              </p>
          </div> 
          <div className="about-image"> 
              <img src={myimage} alt="My Image"/> 
          </div> 
      </div>
    </div>
  )
}

export default About