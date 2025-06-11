import "./about.css";

const tools = [
  { name: "React.js", color: "#61dafb" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "CSS", color: "#2965f1" },
  { name: "HTML", color: "#e34c26" },
  { name: "NumPy", color: "#013243" },
  { name: "Keras", color: "#d00000" },
  { name: "Python", color: "#306998" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "SQL", color: "#4479A1" },
  { name: "REST API", color: "#4CAF50" },
  { name: "Next.js", color: "#339933" },
  { name: "VS Code", color: "#007ACC" },
];

const education = [
  {
    degree: "Master’s in Networks and Distributed Systems",
    school: "University of Constantine 2, Abdelhamid Mehri",
    date: "2022 – 2024",
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "University of Constantine 2, Abdelhamid Mehri",
    date: "2019 – 2022",
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          I graduated in 2024 with a Master's degree in Networks and Distributed Systems from the University of Constantine 2, Abdelhamid Mehri. I have worked on projects involving federated learning, deep learning-based security, and web development. I thrive on tackling new challenges and am passionate about continuously learning and exploring emerging technologies.
        </p>

        <div className="about-boxes">
          <div className="about-box">
            <img src="networks.png" alt="Networking" className="about-icon" />
            <div>
              <h2>Networking</h2>
              <p>Strong background in switching, routing, and network security.</p>
            </div>
          </div>

          <div className="about-box">
            <img src="ai.png" alt="AI Techniques" className="about-icon" />
            <div>
              <h2>AI Techniques</h2>
              <p>Experience in machine learning, deep learning, and advanced techniques like federated and active learning.</p>
            </div>
          </div>

          <div className="about-box">
            <img src="re.png" alt="Research" className="about-icon" />
            <div>
              <h2>Research</h2>
              <p>Passionate about exploring innovative solutions and emerging technologies through constant learning.</p>
            </div>
          </div>

          <div className="about-box">
            <img src="web.png" alt="Web Development" className="about-icon" />
            <div>
              <h2>Web Development</h2>
              <p>Skilled in building modern, responsive websites using React, JavaScript, and best practices in UX/UI.</p>
            </div>
          </div>
        </div>

        {/* --- SECTION EDUCATION --- */}
        <div className="education-section">
          <h2 className="education-title">Education</h2>
          <div className="education-timeline">
            {education.map(({ degree, school, date }) => (
              <div key={degree} className="education-entry">
                <div className="education-info">
                  <h3 className="education-degree">{degree}</h3>
                  <p className="education-school">{school}</p>
                </div>
                <span className="education-date">{date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION TOOLS --- */}
        <div className="tools-section">
          <h2 className="tools-title">Tools & Technologies I Use</h2>
          <div className="tools-list">
            {tools.map(({ name, color }) => (
              <div
                key={name}
                className="tool-item"
                style={{ borderColor: color, color: color }}
                title={name}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
