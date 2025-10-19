"use client"; // Ensures this is a Client Component

import { MouseEventHandler } from "react";

const BookButton = () => {

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        window.location.href = "sms:+17148009788?body=Hello, I would like to book a detail";
    };

    return (
        <button 
            id="homepage-pricing-button" 
            className="button-appearance transition"
            onClick={handleClick}
            aria-label="Book us - will open email client or sms client to contact us for booking your detail"
        >Book Us</button>
    );
};

export default BookButton;
