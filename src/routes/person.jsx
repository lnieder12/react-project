import { useEffect, useState } from 'react';
import { PersonService } from "../services/personService";
import { useParams } from "react-router-dom";
import MailAddresses from './mail';
import Groups from './groups'
import PostalAddresses from './address';
import Phones from './phone';
import { Accordion } from 'react-bootstrap';

function Person() {

    const service = new PersonService();

    let { id } = useParams();

    const [person, setPerson] = useState([]);

    useEffect(() => {
        service.getById(id)
            .then(data => setPerson(p => data));
    }, [id]);



    return person ?
        <>
            <h2>{person.firstname} {person.lastname}</h2>
            <Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Groups</Accordion.Header>
                    <Accordion.Body>
                        <Groups personId={id} />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Mail addresses</Accordion.Header>
                    <Accordion.Body>
                        <MailAddresses personId={id} />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Postal addresses</Accordion.Header>
                    <Accordion.Body>
                        <PostalAddresses personId={id} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Phones</Accordion.Header>
                    <Accordion.Body>

                        <Phones personId={id} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
        : <h2>Person not found</h2>
}

export default Person;