import Main from '../Components/Main';
import Portfolio from './Portfolio';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function Website() {
  return (
    <div>
      <Main/>
      <Portfolio/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Website;