const skills = [
  "Angular",
  "HTML5",
  "CSS3",
  "Git",
  "TypeScript",
  "React.js",
  "Next.js"  
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">Geethu K A</a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
      <section id="home" className="hero section">
  <div className="hero-content">
    <p className="eyebrow">HELLO, I'M</p>
    <h1>Geethu K A</h1>
    <h2>Front-End Developer</h2>
    <p>
      Software developer with around 4 years of
      Angular experience, passionate about building
      clean and user-friendly web applications.
    </p>
    <a className="primary-button" href="#about">
      Discover More
    </a>
  </div>

  <div className="hero-image">
    <img src="/geethu.jpeg" alt="Geethu K A" />
  </div>
</section>

        <section id="about" className="section">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p>
            I am a software developer with experience
            in Angular and front-end development.
            My career objective is to obtain a responsible 
            and challenging Front end developer's position 
            where my education and work experience will have 
            valuable application.
          </p>
          <p>
            My current learning journey includes
            React and TypeScript, as I continue
            developing my front-end skills.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">MY WORK</p>
          <h2>Projects</h2>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              A portfolio built with
              React, TypeScript and CSS to present
              my profile, skills and projects.
            </p>
            <span className="project-tag">
              React · TypeScript · CSS
            </span>
          </div>

          <div className="project-card">
            <h3>Baashaa Exam Center</h3>
            <p>
              A plug-in platform which can be used as the
              exam center in any learning management system.
            </p>
            <span className="project-tag">
              Angular · TypeScript · 
            </span>
          </div>

           <div className="project-card">
            <h3>Baashaa LMS</h3>
            <p>
              Web based learning management system which
              includes features like online course materials,
              exams,continuous assesment reports and much more.            
            </p>
            <span className="project-tag">
              Angular · TypeScript 
            </span>
          </div>
           <div className="project-card">
            <h3>Lakshya Learning</h3>
            <p>
              Online learning platform for students joining Lakshya- a 
              coaching center for professional courses like ACCA,CA,CMA USA,
              CMA INDIA and CS.
            </p>
            <span className="project-tag">
              Angular · TypeScript
            </span>
          </div>
           <div className="project-card">
            <h3>leloJEE</h3>
            <p>
              An online platform designed for students appearing for JEE main

            </p>
            <span className="project-tag">
              Angular · TypeScript
            </span>
          </div>
        </section>

        <section id="contact" className="section">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Contact Me</h2>
          <p>
            Interested in working together?
            Feel free to get in touch.
          </p>
          <p>
            Phone: 9544174322
            Gmail: geethuka.tech@gmail.com
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Geethu K A</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;