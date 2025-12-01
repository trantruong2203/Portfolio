import React from "react";
import mock08 from '../assets/images/image.png';
import mock09 from '../assets/images/Screenshot 2025-12-01 190151.png';
import mock10 from '../assets/images/Screenshot 2025-12-01 185843.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://personal-note-app-chi.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://personal-note-app-chi.vercel.app/" target="_blank" rel="noreferrer"><h2>Personal Note App</h2></a>
                <p>Developed a personal note app with features such as note creation, editing, and deletion using React, TypeScript, and Vite.</p>
            </div>
            <div className="project">
                <a href="https://chatapp-two-rust.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://chatapp-two-rust.vercel.app/" target="_blank" rel="noreferrer"><h2>Chat App</h2></a>
                <p>Developed a real-time social chat platform with messaging, posts, comments, group management, and Cloudinary image uploads. Tech: React + TypeScript (Vite), Redux Toolkit, Node.js + Express + TypeScript, Drizzle ORM, Socket.IO.</p>
            </div>
            <div className="project">
                <a href="https://streamflix-five-pearl.vercel.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://streamflix-five-pearl.vercel.app/" target="_blank" rel="noreferrer"><h2>StreamFlix</h2></a>
                <p>Developed and released a movie streaming platform with subscription and rental features, admin dashboard, and synchronized interactions. Tech: React + Vite, Firebase (Auth/Firestore/Storage), Cloudinary, Vercel/Netlify.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;