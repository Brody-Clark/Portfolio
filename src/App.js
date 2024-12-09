import './App.css';
import Banner from "./components/Banner";
import BodyContentWrapper from "./components/BodyContentWrapper";
import AboutMeContent from "./components/AboutMe";
import Education from "./components/Education";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import BlogWrapper from './components/BlogWrapper';
import PortfolioFooter from './components/PortfolioFooter'

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">
          <Banner></Banner>
        </header>
        <main>
          <div className='main-content'>
            <BodyContentWrapper id="about-me" content={<AboutMeContent></AboutMeContent>}></BodyContentWrapper>
            <BodyContentWrapper id="education" content={<Education></Education>}></BodyContentWrapper>
            <BodyContentWrapper id="work-experience" content={<ProfessionalExperience></ProfessionalExperience>}></BodyContentWrapper>
            <BodyContentWrapper id="projects" content={<Projects></Projects>}></BodyContentWrapper>
            <BodyContentWrapper id="blog" content={<BlogWrapper></BlogWrapper>}></BodyContentWrapper>
            <BodyContentWrapper id="contact-me" content={<ContactForm></ContactForm>}></BodyContentWrapper>
          </div>
        </main>
        <footer>
          <PortfolioFooter></PortfolioFooter>
        </footer>
      </body>
    </div>
  );
}

export default App;
