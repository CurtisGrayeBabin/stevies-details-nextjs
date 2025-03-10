"use client"; // Ensures this is a Client Component

import { MouseEventHandler } from "react";

const BookButton = () => {

    const isWithinRestrictedHours = (): boolean => {
        const now = new Date();

        // Convert current time to Pacific Time (handles both PST & PDT automatically)
        const pstTime = now.toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          hour12: false,
          hour: "2-digit",
        });
      
        const hours = parseInt(pstTime, 10);
        return hours >= 17 || hours < 8; // 5 PM - 8 AM PST/PDT
    };
      

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (isWithinRestrictedHours()){
            // email
            window.location.href = "mailto:steviesdetailsllc@gmail.com?subject=Hello, I would like to book a detail";
        } else {
            // text
            window.location.href = "sms:+17148009788?body=Hello, I would like to book a detail";
        }
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
