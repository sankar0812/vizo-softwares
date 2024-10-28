import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box, Typography } from '@mui/material';

const ContactUsContainer = styled.div`
    position: relative;
    height: 100vh; 
    overflow: hidden;
`;

const BackgroundImage = styled.div`
    background-image: url('https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small_2x/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg'); 
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); 
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-bottom: 305;
    position: relative;

    @media (min-width: 768px) {
        flex-direction: row; 
        justify-content: space-around; 
    }
`;

const Card = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    margin: 20px;
    padding: 20px;
    width: 90%; 
    max-width: 300px; 
    height: auto; 
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }

    @media (min-width: 768px) {
        height: 300px; 
    }
    @media (max-width: 480px) {
        margin-top: 5%;
        height: 400px;
    }
`;

const CombinedCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    transition: color 0.3s ease;
    color: black; 
`;

const Description = styled.p`
    transition: color 0.3s ease;
    color: black; 
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin-top: auto; 
`;

const ContactUs = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ContactUsContainer>
            <BackgroundImage>
                <Overlay />
                <ContentContainer>
                    {isMobile ? (
                       <>
                         <CombinedCard>
                            <PhoneInTalkIcon sx={{ fontSize:{ xs: '3rem',sm: '3rem'}, color: 'black' }} />
                            <Title>Contact Us</Title>
                            <Description >For inquiries or support:</Description>
                            <InfoBox>
                                <Typography sx={{ fontSize:{ xs: '0.8rem', sm: '1rem'}, lineHeight: 1, color: 'black' }}>
                                    91-6379691338
                                </Typography>
                            </InfoBox>
                            <Description>Visit us at:</Description>
                            <InfoBox>
                                <Typography variant="body2" sx={{ fontSize:{ xs: '0.8rem', sm: '1rem'}, lineHeight: 1, color: 'black' }}>
                                    200A/3, Main Road, Hyundai Showroom Upstairs, Ambasamudram, Tirunelveli.
                                </Typography>
                            </InfoBox>
                        </CombinedCard>
                       </>
                    ) : (
                        <>
                            <Card>
                                <PhoneInTalkIcon sx={{ fontSize: '3rem', color: 'black' }} />
                                <Title>Get in Touch</Title>
                                <Description>Contact us for any inquiries or support.</Description>
                                <InfoBox>
                                    <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.5, color: 'black' }}>
                                        91-6379691338
                                    </Typography>
                                </InfoBox>
                            </Card>
                            <Card>
                                <LocationOnIcon sx={{ fontSize: '3rem', color: 'black' }} />
                                <Title>Location</Title>
                                <Description>Visit us at our office or find us online.</Description>
                                <InfoBox>
                                    <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.5, color: 'black' }}>
                                        200A/3, Main Road, Hyundai Showroom Upstairs, Ambasamudram, Tirunelveli.
                                    </Typography>
                                </InfoBox>
                            </Card>
                        </>
                    )}
                </ContentContainer>
            </BackgroundImage>
        </ContactUsContainer>
    );
};

export default ContactUs;
