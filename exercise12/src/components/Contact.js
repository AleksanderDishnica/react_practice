import React from 'react'

export default function Contact({ title, address }) {
    return (
        <div className="w3-container w3-padding-64" id="contact">
            <h1>{title}</h1><br />
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className="w3-text-blue-grey w3-large"><b>{address}</b></p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form action="/action_page.php" target="_blank">
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
                <p><input className="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People" /></p>
                <p><input className="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00" /></p>
                <p><input className="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
                <p><button className="w3-button w3-light-grey w3-section" type="submit">SEND MESSAGE</button></p>
            </form>
        </div>
    )
}
