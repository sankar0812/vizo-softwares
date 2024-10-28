import React, { useEffect, useState } from 'react';

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100); 

        return () => clearInterval(intervalId);
    }, [text]);

    return <span>{displayedText}</span>;
};

export default TypingText;
