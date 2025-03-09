"use client"; // Ensures this is a Client Component

import { MouseEventHandler } from "react";

const BookButton = () => {

    const isWithinRestrictedHours = (): boolean => {
        const now = new Date();
        const pstOffset = 8 * 60; // PST is UTC-8
        const pdtOffset = 7 * 60; // PDT (Daylight Saving Time) is UTC-7
        
        // Check if daylight saving time is in effect
        const isDST = new Date().toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour12: false }).includes("PDT");
        const offset = isDST ? pdtOffset : pstOffset;
        
        // Convert UTC time to PST/PDT
        const pstTime = new Date(now.getTime() - offset * 60 * 1000);
        const hours = pstTime.getUTCHours(); // Get the hour in PST
        
        return hours >= 17 || hours < 8; // Between 5 PM and 8 AM
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
        >Book Us</button>
    );
};

export default BookButton;
