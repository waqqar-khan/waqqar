import "../App.css";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section pt-10">
      <span className="section-header-btn bg-purple-600 text-white">
        About Me
      </span>
      <div className="about-me-content">
        <div className="about-me-container max-w-4xl mx-auto p-5 mt-4">
          <div className="about-me-text">
            <h2 className="text-xl text-center font-bold text-purple-800 font-serif pb-4">
              HackerRank Certified ReactJS Developer
            </h2>
            <p>
              As a <strong>HackerRank Certified ReactJS Developer</strong> with
              over <strong>4 years of experience</strong> (3 years specializing
              in ReactJS), I have honed my skills in building scalable and
              high-performance web applications. My expertise spans technologies
              such as <strong>ReactJS</strong>, <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, <strong>Redux</strong>,{" "}
              <strong>NextJS</strong>, <strong>Zustand</strong>, and{" "}
              <strong>GraphQL</strong>, with a deep focus on{" "}
              <strong>UI Engineering</strong> and delivering seamless user
              experiences.
            </p>
            <p>
              Over the years, I have excelled in areas such as{" "}
              <strong>dynamic routing</strong>, <strong>lazy loading</strong>,{" "}
              <strong>modular component architecture</strong>, and the creation
              of <strong>reusable component libraries</strong>. I’m passionate
              about optimizing application performance and ensuring robust,
              maintainable code that scales. In addition to my core technical
              skills, I am proficient in tools like{" "}
              <strong>Tailwind CSS</strong>, <strong>Material UI</strong>,{" "}
              <strong>MongoDB</strong>, <strong>Go/Golang</strong>,{" "}
              <strong>Backstage.io</strong>, <strong>Microsoft Azure</strong>,
              and <strong>GIT</strong>.
            </p>
            <p>
              My journey as a developer has not only involved technical roles
              but also the broader context of{" "}
              <strong>Agile methodologies</strong> and{" "}
              <strong>project management</strong>. I am a{" "}
              <strong>Certified Scrum Product Owner® (CSPO®)</strong>, which has
              allowed me to work closely with cross-functional teams to deliver
              impactful solutions. I’ve also contributed significantly as a{" "}
              <strong>Technical Interviewer</strong>, having conducted over{" "}
              <strong>100 interviews</strong>, where I have sharpened my ability
              to identify and mentor top-tier talent.
            </p>
            <p>
              Throughout my career, I’ve worked in remote settings,
              collaborating with global teams to deliver innovative solutions
              that meet both technical and business goals. As a mentor, I
              actively guide junior developers and foster a culture of
              knowledge-sharing, ensuring that every team member grows while
              delivering excellent user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
