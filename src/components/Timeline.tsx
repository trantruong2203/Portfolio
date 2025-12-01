import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* 8/2025 - 11/2025: Global Design IT Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2025 - 11/2022025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Global Design IT
            </h4>
            <p>
              Worked on an AI-powered CV filtering and evaluation system.
              Responsible for backend development using PHP/Laravel: API design,
              file processing, AI scoring integration, database modeling, and
              role-based access control.
            </p>
          </VerticalTimelineElement>

          {/* 6/2025 - 8/2025: Chat App Project */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="06/2025 - 08/2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Chat App Project
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Personal Project
            </h4>
            <p>
              Built a real-time social chat platform with messaging, posts,
              comments, group management, and Cloudinary image uploads. Tech:
              React + TypeScript (Vite), Redux Toolkit, Node.js + Express +
              TypeScript, Drizzle ORM, Socket.IO.
            </p>
          </VerticalTimelineElement>

          {/* 2/2025 - 5/2025: StreamFlix */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="02/2025 - 05/2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              StreamFlix Project
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Personal Project
            </h4>
            <p>
              Developed a movie streaming platform with subscription and rental
              features, admin dashboard, and synchronized interactions. Tech:
              React + Vite, Firebase (Auth/Firestore/Storage), Cloudinary,
              Vercel/Netlify.
            </p>
          </VerticalTimelineElement>

          {/* 6/2024 - 7/2025: Full-time Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="06/2024 - 07/2025"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tien IT</h4>
            <p>
              Developed and optimized web applications using React, TypeScript,
              Redux, and Tailwind CSS. Built backend APIs with Node.js/Express
              and MySQL/PostgreSQL, following MVC architecture and JWT
              authentication. Integrated online payment systems and Cloudinary
              for image management.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
