import React from "react";
import './contact.css';

const Contact = () => {
    return (
            <div>
                <form id="contactForm">
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

                    <button className="submitBtn btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
    );
}

export default Contact;