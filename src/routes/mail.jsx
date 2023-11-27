import { useEffect, useState } from 'react';
import { MailService } from "../Services/mailService"
import { Button, Form, InputGroup, DropdownButton } from 'react-bootstrap';
import DropDownEmail from './components/DropDownEmail';
import List from './components/List';


function MailAddresses({ personId }) {

    const service = new MailService();

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        service.getAll(personId)
            .then(data => setEmails(p => data));
    }, [personId]);

    function addMail(mail, label) {
        service.add(personId, mail, label)
            .then(data => setEmails(m => [...emails, data]));
    }


    function removeMail(id) {
        service.remove(personId, id)
            .then(data => setEmails(p => p.filter(m => m.id !== id)));
    }

    function update(id, mail, label) {
        service.edit(personId, id, mail, label)
            .then(data => setEmails(m => m.map(a => a.id === id ? data : a)));
    }

    function submitMail(event) {
        event.preventDefault();
        console.log("hello");
        if (event.target.mail.value !== "")
            addMail(event.target.mail.value, event.target.title.value)
        event.target.mail.value === "";
    }

    return <div className='divAdd'>
        <h3>Mail Addresses</h3>
        <Form className="addMail" onSubmit={(event) => { submitMail(event) }}>
            <InputGroup >
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control name="mail" type="email"
                    placeholder="email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <DropDownEmail/>
            </InputGroup>
            <Button className='Button' type='submit' variant="primary" >Add</Button>
        </Form>
        <List list={emails} removeItems={removeMail} name={"Mail addresses"} update={update}/>
    </div>

}

export default MailAddresses;