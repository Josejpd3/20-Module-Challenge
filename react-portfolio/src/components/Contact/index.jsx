import React from "react";

const Contact = () => {
    return (
            <div>
                <form id="contactForm">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Name" required/>
                    </div>
                    <div>
                        <label htmlFor="emailAddress">Email Address</label>
                        <input id="emailAddress" type="email" placeholder="Email Address" required/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" type="text" placeholder="Message" required></textarea>
                    </div>

                    <button className="submitBtn" type="submit">Submit</button>
                </form>
            </div>
    );
}

export default Contact;