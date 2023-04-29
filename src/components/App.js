import React from "react";
import "./styles.css";
import portrait from "./portrait.jpg";


export default function App() {
    return (
        <main>
            <div className="card-container">
                <img className="portrait" src={portrait} alt="my-pic" />
                <div className="info">
                    <h1 className="info-name">Nutsa Kharazishvili</h1>
                    <p className="info-title">Frontend Developer</p>
                    <div className="contact-buttons">
                        <a href="mailto: nutsa1999@gmail.com">
                            <button className="mail-btn">
                                <i className="fa-solid fa-envelope"></i>
                                Email
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/nino-kharazishvili-368a441b0/" target="_blank" rel="noreferrer" >
                            <button className="linkedin-btn">
                                <i className="fa-brands fa-linkedin"></i>
                                LinkedIn
                            </button>
                        </a>
                    </div>
                    <div className="about">
                        <h4>About</h4>
                        <p className="about-text">Hi, my name is Nino, and I am a front-end developer
                            with a passion for creating engaging and interactive web
                            experiences. Throughout my learning journey I have gained a solid
                            foundation in web development technologies such as HTML, CSS, and JavaScript.
                            I have worked on several personal projects to expand my
                            skill set, including building responsive web pages, creating
                            dynamic user interfaces and complex web applications (e-commerce, to do app) using React.
                        </p>
                    </div>
                    <div className="social-media">
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.facebook.com/nuca.xarazishvili/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/nuccaa/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/nuccaa99" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        </main>

    )

}

