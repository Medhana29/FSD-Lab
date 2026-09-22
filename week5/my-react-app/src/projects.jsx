
import React from "react";

function Projects() {
    return (
        <main className="container">

            <section className="card projects-section">

                <p className="subtitle">MY WORK</p>

                <h2>Projects</h2>

                <div className="projects-grid">

                    <div className="project-card">
                        <div className="project-number">01</div>

                        <h3>To-Do Manager</h3>

                        <p>
                            A simple and intuitive task management website
                            designed to help users organize and track their
                            daily tasks.
                        </p>

                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-number">02</div>

                        <h3>Library Management System</h3>

                        <p>
                            A full-stack web application for managing books,
                            users, and library operations using the MERN stack.
                        </p>

                        <div className="project-tech">
                            <span>MongoDB</span>
                            <span>Express</span>
                            <span>React</span>
                            <span>Node.js</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-number">03</div>

                        <h3>Spam Email Detection</h3>

                        <p>
                            An AI-based machine learning classifier that
                            identifies whether an email is spam or legitimate.
                        </p>

                        <div className="project-tech">
                            <span>Python</span>
                            <span>TensorFlow</span>
                            <span>NumPy</span>
                            <span>Pandas</span>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Projects;

