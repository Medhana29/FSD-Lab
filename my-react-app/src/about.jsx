
import React from "react";

function About() {
    return (
        <main className="container">

            <section id="about" className="hero">
                <div className="hero-content">
                    <h1>
                        Hi, I'm Medhana Alwal
                    </h1>

                    <p className="hero-description">
                        I am a Computer Science student specializing in
                        <strong> AI & ML </strong> at CBIT. I enjoy building
                        websites, solving problems, and exploring the world
                        of Artificial Intelligence.
                    </p>
                </div>
            </section>

            <section className="card">
                <h2>About Me</h2>

                <p>
                    I am passionate about technology and enjoy turning ideas
                    into practical applications. I am constantly learning
                    new technologies and improving my problem-solving skills.
                </p>
            </section>

            <section className="card">
                <h2>Skills</h2>

                <div className="skills">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Python</span>
                    <span>C++</span>
                    <span>Java</span>
                    <span>DBMS</span>
                    <span>AI / ML</span>
                </div>
            </section>

            <section className="card">
                <h2>Coding Profiles</h2>

                <div className="profile-links">
                    <a
                        href="https://leetcode.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LeetCode →
                    </a>

                    <a
                        href="https://www.codechef.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        CodeChef →
                    </a>
                </div>
            </section>

        </main>
    );
}

export default About;

