import React from 'react';
import mernImage from '../assets/images/mern.png';
import cloudImage from '../assets/images/cloud.png';
import pthonImage from '../assets/images/python.png';

const courses = [
    {
        src: mernImage,
        text: "MERN Stack",
        paragraph: "Build dynamic web applications using MongoDB, Express, React, and Node.js. Learn how to create a complete full-stack application with user authentication and database integration. This course covers everything from front-end design to back-end development."
    },
    {
        src: pthonImage,
        text: "Python Full Stack",
        paragraph: "Develop robust applications with Django or Flask for the backend and React or Angular for the frontend. This course offers comprehensive insights into building scalable web applications and mastering Python programming, along with best practices."
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/devops-2.svg",
        text: "DevOps",
        paragraph: "Automate and streamline software delivery and infrastructure changes. Explore CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes. This course prepares you to implement DevOps principles effectively in your projects."
    },
    {
        src: cloudImage,
        text: "Cloud Computing",
        paragraph: "Utilize cloud services for scalable and flexible infrastructure solutions. This course covers cloud architecture, deployment strategies, and best practices for managing resources on platforms like AWS and Azure. Understand how to optimize cloud usage effectively."
    },
];

const CourseCard = ({ src, text, paragraph }) => (
    <div style={styles.card}>
        <img src={src} alt={text} style={styles.image} />
        <h3 style={styles.title}>{text}</h3>
        <p style={styles.description}>{paragraph}</p>
    </div>
);

const Courses = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Available Courses</h1>
            <div style={styles.grid}>
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        src={course.src}
                        text={course.text}
                        paragraph={course.paragraph}
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#062229',
        minHeight: '100vh',
        color: '#fff',
    },
    heading: {
        marginTop: '50px',
        marginBottom: '20px',
        fontFamily: 'Share Tech Mono'
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px 0',
    },
    card: {
        flex: '1 1 calc(25% - 20px)',
        maxWidth: '300px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        background: '#fff',
        transition: 'box-shadow 0.3s',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    title: {
        margin: '10px 0px',
        fontSize: '1.5em',
        color: 'black'
    },
    description: {
        fontSize: '1em',
        color: '#555',
    },
};


const mediaQuery = window.matchMedia('(max-width: 600px)');
if (mediaQuery.matches) {
    styles.grid.flexDirection = 'column';
    styles.grid.alignItems = 'center';
    styles.card.flex = '1 1 100%';
}

export default Courses;
