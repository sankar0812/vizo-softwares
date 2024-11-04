import React from 'react';
import { Box, Button, Typography, Toolbar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mernImage from '../assets/images/mern.png';
import cloudImage from '../assets/images/cloud.png';
import pthonImage from '../assets/images/python.png';
import ecomImage from '../assets/images/ecommerce.png';
import schoolmanageImage from '../assets/images/schoolmanage.png';
import billingImage from '../assets/images/billings.png';
import dmImage from '../assets/images/dm.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};



const Home = () => {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };

    return (
        <>
            <Box
                component="main"
                sx={{
                    p: 3,
                    flexGrow: 1,
                    height: '100vh',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(https://image.slidesdocs.com/responsive-images/background/3d-computer-with-open-pages-a-stunning-landing-page-for-your-web-design-needs-powerpoint-background_189bfb8980__960_540.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 0,
                    }}
                />
                <Toolbar />
                <Box sx={{ zIndex: 1, position: 'relative', textAlign: 'center' }}>
                    <Typography variant="h2" color="white" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '4rem' } }}>
                        Transform your digital <br /> landscape with Vizo
                    </Typography>

                    <Box sx={{ mt: 2, color: '#fff' }}>
                        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                            Explore our services and solutions tailored to meet your needs.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff', mt: 2 }}>
                            Learn more
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ zIndex: 0, position: 'relative', textAlign: 'center', padding: '12px', marginTop: '12px' }}>
                <AnimatedSection>
                    <Typography variant="h4" color="black" sx={{ fontWeight: 'bold', fontFamily: 'Share Tech Mono', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                        Why choose Vizo software solutions?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
                        {[
                            "https://st2.depositphotos.com/2037307/50820/v/450/depositphotos_508200556-stock-illustration-puzzled-man-looking-for-problem.jpg",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-H1Dr5mAYYJgCuATo0DTHiMKutZ_qmKjbTN6Yp8uws7k2nqp2dtXDBNGvMr7vTzi4esM&usqp=CAU",
                            "https://media.istockphoto.com/id/1311896951/vector/business-mentor-helps-to-improve-career-and-holding-stairs-steps-vector-illustration.jpg?s=612x612&w=0&k=20&c=qHFrNhSgm3ppgvAAst8Bhh8ORla0CznDXUPJdLNBhT0=",
                        ].map((src, index) => (
                            <Box key={index} sx={{ m: 2, width: '150px', height: '150px', overflow: 'hidden', borderRadius: '8px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                                <img src={src} alt={`Feature ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                                <Typography variant="body1" sx={{ color: 'black', mt: 1, transition: 'color 0.3s', '&:hover': { color: 'blue' } }}>Feature {index + 1}</Typography>
                            </Box>
                        ))}
                    </Box>
                </AnimatedSection>
            </Box>
            <Box sx={{ zIndex: 0, position: 'relative', textAlign: 'center', padding: '20px' }}>
                <AnimatedSection>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
                        {[
                            "https://kantata.marketing/wp-content/uploads/2022/07/man-on-tablet-with-graphs-and-numbers-floating-above-the-tablet.jpg",
                        ].map((src, index) => (
                            <Box
                                key={index}
                                sx={{
                                    mb: 3,
                                    mr: 3,
                                    ml: 3,
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'scale(1.1)' }
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Feature ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        overflow: 'hidden',
                                        padding: '8px'
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '3rem' }, fontWeight: 'bold', textAlign: 'center', mt: 2, transition: 'color 0.3s', '&:hover': { color: 'blue' } }}>Rise Together, Succeed as One Team</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </AnimatedSection>
            </Box>

            <Box sx={{ zIndex: 0, position: 'relative', textAlign: 'center', padding: '8px' }}>
                <Typography variant="h4" color="black" sx={{ fontFamily: "Share Tech Mono", fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                    Expertise
                </Typography>
                <Box sx={{ mt: 2, color: '#000' }}>
                    <Typography sx={{ fontFamily: "Share Tech Mono", fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                        Our team consists of experienced software developers and designers who have worked on a variety of projects. We have expertise<br /> in a range of technologies and tools, including cloud computing, machine learning, and blockchain technology.
                    </Typography>
                </Box>
                <AnimatedSection>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
                        {[
                            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiq2Cuj0WKZ3_cau_L3GiFB9_vGZfB5O4Rfg&s", text: "Programming Experts" },
                            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84TTxUMJTm3ic-26UaVxiPfMks6zSQqaAKA&s", text: "Timely Delivery" },
                            { src: "https://t4.ftcdn.net/jpg/02/66/25/93/360_F_266259364_xLQQ1evsZQt7oSRbcJW8zH5cHlijjsdW.jpg", text: "Quality Design" },
                            { src: "https://t3.ftcdn.net/jpg/04/43/98/24/360_F_443982441_rBudWjP3eXwZ20EAZhvIWNLx4jDr1kup.jpg", text: "Professional Support" },
                        ].map(({ src, text }, index) => (
                            <Box key={index} sx={{ m: 1, width: '150px', height: '200px', overflow: 'hidden', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                                <img src={src} alt={text} style={{ width: '80px', height: '80px', objectFit: 'cover', marginTop: '10px', transition: 'transform 0.3s' }} />
                                <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'center', mt: 1, transition: 'color 0.3s', '&:hover': { color: 'blue' } }}>{text}</Typography>
                            </Box>
                        ))}
                    </Box>
                </AnimatedSection>
            </Box>
            {/* <Box sx={{ zIndex: 1, position: 'relative', textAlign: 'center', padding: '8px' }}>
                <Typography variant="h4" color="black" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                    Courses we offered
                </Typography>
                <Box sx={{ mt: 0, color: '#000' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
                    {[
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByIMwuussTWrybuHByBScEo772_TmG5hxzw&s", text: "MERN Stack" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAojdfiU-YTTglyAywGexed1DmziFkV5v1Yg&s", text: "Python Full Stack" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWkFwUVTOXFHXqka1yajnok6Py67aUBBXPQ&s", text: "DevOps" },
                        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LNYNOFpZjnIdB19KejIWA3W3YLVZ7WNmuw&s", text: "Cloud Computing" },
                    ].map(({ src, text }, index) => (
                        <Box key={index} sx={{ m: 1, width: '200px', height: '200px', overflow: 'hidden', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                            <img src={src} alt={text} style={{ width: '180px', height: '120px', objectFit: 'cover', marginTop: '10px', transition: 'transform 0.3s' }} />
                            <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'center', mt: 2, transition: 'color 0.3s', '&:hover': { color: 'blue' } }}>{text}</Typography>
                        </Box>
                    ))}
                </Box>
                </Box>
            </Box> */}
            <Box sx={{ zIndex: 0, position: 'relative', textAlign: 'center' }}>
                <Typography variant="h4" color="black" sx={{ fontFamily: "Share Tech Mono", mb: 2, fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                    Courses We Offered
                </Typography>
                <AnimatedSection>
                    <Box
                        sx={{
                            m: 2,
                            backgroundColor: '#062229',
                            position: 'relative',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.5,
                                zIndex: 1
                            }
                        }}
                    >
                        <Slider {...settings}>
                            {courses.map(({ src, text, paragraph }, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 2,
                                        textAlign: 'center',
                                        position: 'relative',
                                        zIndex: 2,
                                        '&::before': {
                                            backgroundImage: `url(${src})`,
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            opacity: 0.5,
                                            content: '""',
                                            zIndex: -1
                                        }
                                    }}
                                >
                                    <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                        <img src={src} alt={text} style={{ width: '220px', height: '120px', objectFit: 'cover' }} />
                                    </Box>
                                    <Box sx={{ flex: '2', textAlign: 'center', px: 2 }}>
                                        <Typography color="white" variant="body1" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                                            {text}
                                        </Typography>
                                        <Typography color="white" variant="body2" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                                            {paragraph}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </AnimatedSection>
            </Box>

            <AnimatedSection>
                <Box sx={{ zIndex: 0, position: 'relative', textAlign: 'center', padding: '8px' }}>
                    <Typography variant="h4" color="black" sx={{ fontFamily: "Share Tech Mono", mt: 2, mb: 2, fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                        Our Services
                    </Typography>
                    <Box
                        sx={{
                            m: 2,
                            backgroundColor: '#062229',
                            position: 'relative',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.5,
                                zIndex: 1
                            }
                        }}
                    >
                        <Slider {...settings}>
                            {services.map(({ src, text, paragraph }, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 2,
                                        textAlign: 'center',
                                        position: 'relative',
                                        zIndex: 2,
                                        '&::before': {
                                            backgroundImage: `url(${src})`,
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            opacity: 0.5,
                                            content: '""',
                                            zIndex: -1
                                        }
                                    }}
                                >
                                    <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                        <img src={src} alt={text} style={{ width: '220px', height: '120px', objectFit: 'cover' }} />
                                    </Box>
                                    <Box sx={{ flex: '2', textAlign: 'center', px: 2 }}>
                                        <Typography color="white" variant="body1" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                                            {text}
                                        </Typography>
                                        <Typography color="white" variant="body2" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                                            {paragraph}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>
            </AnimatedSection>

            <AnimatedSection>
                <Box
                    sx={{
                        zIndex: 0,
                        position: 'relative',
                        textAlign: 'center',
                        padding: '16px',
                        m: 2,
                        borderRadius: '8px',
                        boxShadow: 2,
                        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5h7-dvQb-XFFJe7637hY-8yIb3ZMAsWZRw&s)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '8px',
                        }}
                    />

                    <Typography
                        variant="h4"
                        color="white"
                        sx={{ fontFamily: "Share Tech Mono", fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' }, mb: 3, position: 'relative', zIndex: 0 }}
                    >
                        Contact Us
                    </Typography>

                    <Box sx={{ mt: 2, color: 'white', textAlign: 'center', mx: { xs: 2, sm: 5 }, position: 'relative', zIndex: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
                            <LocationOnIcon sx={{ fontSize: '2rem', color: 'white' }} />
                            <Typography variant="body2" sx={{ ml: 1, fontSize: '1rem', lineHeight: 1.5 }}>
                                200A/3, Main Road, Hyundai Showroom Upstairs, Ambasamudram
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2 }}>
                            <PhoneInTalkIcon sx={{ fontSize: '2rem', color: 'white' }} />
                            <Typography variant="body2" sx={{ ml: 1, fontSize: '1rem', lineHeight: 1.5 }}>
                                91-6379691338
                            </Typography>
                            <Typography variant="body2" sx={{ ml: 1, fontSize: '1rem', lineHeight: 1.5 }}>
                               91-8754130812
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </AnimatedSection>
        </>
    );
};

export default Home;
