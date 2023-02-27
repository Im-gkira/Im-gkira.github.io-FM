import React from "react";

export default function Card(){
    return (
        <div className="main">
            <img className="qr--code" src="images/image-qr-code.png" alt="QR Code to scan"/>
            <div className="content">
                <h3>Improve your front-end skills by building projects</h3>
                <p>scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}