import React from 'react';

const StyledText = ({ children }) => {
    // Define a function to apply styles based on text content
    const getTextStyles = (text) => {
        // Example: Check if the text contains a specific keyword
        if (text.includes('important')) {
            return 'text-red-500 font-bold';
        } else {
            return 'text-blue-500';
        }
    };

    return (
        <div className={`bg-clip-text font-semibold lg:text-4xl text-xl text-transparent inline-block bg-gradient-to-r from-pink-700 to-red-500 ${getTextStyles(children)}`}>
            {children}
        </div>
    );
};

export default StyledText;
