import React from 'react';
import ecomImage from '../assets/images/ecommerce.png';
import schoolmanageImage from '../assets/images/schoolmanage.png';
import billingImage from '../assets/images/billings.png';
import dmImage from '../assets/images/dm.png';

const services = [
    {
        src: ecomImage,
        text: "E-Commerce Web Applications",
        paragraph: "Create fully functional e-commerce platforms that allow businesses to sell products online. Learn about payment gateways, user authentication, and inventory management."
    },
    {
        src: schoolmanageImage,
        text: "School Management Projects",
        paragraph: "Develop comprehensive management systems for schools that handle student enrollment, grading, attendance, and communication between teachers and parents."
    },
    {
        src: billingImage,
        text: "Billing Software",
        paragraph: "Build billing systems that automate invoicing and payment processing. Understand how to create user-friendly interfaces and integrate with payment processors."
    },
    {
        src: dmImage,
        text: "Digital Marketing",
        paragraph: "Master the art of digital marketing, including SEO, social media strategies, content marketing, and analytics to boost online presence and engagement."
    },
];

const ServiceCard = ({ src, text, paragraph }) => (
    <div style={styles.card}>
        <img src={src} alt={text} style={styles.image} />
        <h3 style={styles.title}>{text}</h3>
        <p style={styles.description}>{paragraph}</p>
    </div>
);

const Services = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Our Services</h1>
            <div style={styles.grid}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        src={service.src}
                        text={service.text}
                        paragraph={service.paragraph}
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
        margin: '10px 0',
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

export default Services;
