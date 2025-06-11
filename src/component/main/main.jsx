import React, { useState } from 'react';
import './main.css';

const Main = () => {
  const [activeButton, setActiveButton] = useState('all');

  return (
    <main className="main-layout flex">
      {/* Filter Buttons */}
      <section className="left-section flex">
        {['all', 'android', 'ai', 'web'].map((type) => (
          <button
            key={type}
            className={activeButton === type ? 'active' : ''}
            onClick={() => setActiveButton(type)}
          >
            {type === 'all'
              ? 'All Projects'
              : type === 'android'
              ? 'Android + AI'
              : type === 'ai'
              ? 'Advanced AI'
              : 'Web Development'}
          </button>
        ))}
      </section>

      {/* Project Cards */}
      <section className="right-section flex">
        {(activeButton === 'all' || activeButton === 'android') && (
          <article className="card">
            <div className="box">
              <video controls>
                <source src="/pr1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2>Android App with AI</h2>
              <p>
                A mobile app predicting laptop prices in Algeria using ML. It helps users make smarter buying decisions based on AI.
              </p>
            </div>
          </article>
        )}

        {(activeButton === 'all' || activeButton === 'ai') && (
          <article className="card">
            <div className="box">
              <img src="gl.jpg" alt="AI Project" className="gl" />
              <h2>DDoS Detection with AI</h2>
              <p>
                A thesis project using deep learning, federated learning, and active learning to detect DDoS in smart transport systems.
              </p>
            </div>
          </article>
        )}

        {(activeButton === 'all' || activeButton === 'web') && (
          <article className="card">
            <div className="box">
              <video controls>
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2>Doctor Appointment Website</h2>
              <p>
                Built with React, CSS Modules, and responsive design techniques.
              </p>
            </div>
          </article>
        )}
      </section>
    </main>
  );
};

export default Main;
