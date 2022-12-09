import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <div>
            <ul class="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <form id="contactForm">
                        <h3>Contact Me</h3>
                        <div class="mb-3">
                            <label htmlFor="name">Name</label>
                            <input class="form-control" id="name" type="text" placeholder="Name" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" htmlFor="emailAddress">Email Address</label>
                            <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" required/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" htmlFor="message">Message</label>
                            <textarea class="form-control" id="message" type="text" placeholder="Message" required></textarea>
                        </div>

                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </ul>
        </div>
    );
}

export default Contact;