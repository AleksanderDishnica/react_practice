import { React, useState } from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function submit() {
        if (name.length > 0 && surname.length > 0 && email.length > 0 && message.length > 0) {
            alert('success')
        } else {
            alert('fill in all inputs')
        }
    }

    return (
        <form>
            <label for="name">Name</label><br />
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} /><br />
            <label for="surname">Surname</label><br />
            <input type="text" name="surname" id="surname" onChange={(e) => setSurname(e.target.value)} /><br />
            <label for="email">Email</label><br />
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} /><br />
            <label for="message">Message</label><br />
            <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)}></textarea><br />
            <button type="button" onClick={submit}>Submit</button>
        </form>
    )
}
