
import './hero.css';
import Lottie from "lottie-react";
import Animation1 from '../../../public/Ani/animation1.json'
const Hero = () => {
    return (
        <section className='hero flex'>
        <div className='left-section border'>
            <div>
           
         <h1 className="saida">Frontend Developer & Network Engineer</h1>
<p className="paragraph">
  I'm passionate about networks, web development, and artificial intelligence. I thrive on solving complex challenges and continuously explore emerging technologies to drive innovation at the intersection of AI, cybersecurity, and networking.
</p>

            <div className='icons'>
            <a
                            href="linkedin.com/in/saida-tamadartaza-a830a3348" // Replace with your LinkedIn URL
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer" // Security best practice
                            className="icon-linkedin flex"
                        ></a>


            <a    href="https://github.com/happy-tmd" // Remplacez par votre URL GitHub
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-github flex">
                
            </a>
                
          <a href="#contact" className="download-cv-button">
  Contact Me
</a>

            
      </div>
      </div>


        </div>
        <div className='right-section animation border'>
        <Lottie style={{height : 450}} animationData={Animation1} />
        </div>

        </section>
        
    );
};

export default Hero;
