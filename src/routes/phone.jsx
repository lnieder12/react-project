import { useEffect, useState } from 'react';
import { PhoneService } from '../Services/phoneService';
import { Button, Form, InputGroup } from 'react-bootstrap';
import DropDownEmail from './components/DropDownEmail';
import List from './components/List';

function Phones({ personId }) {

    const service = new PhoneService();

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        service.getAll(personId)
            .then(data => setPhones(a => data));
    }, [personId])

    function addPhones(number, label) {
        service.add(personId, number, label)
            .then(data => setPhones(m => [...phones, data]));
    }

    function removePhones(id) {
        service.remove(personId, id)
            .then(data => setPhones(p => p.filter(m => m.id !== id)));
    }

    function update(id, phone, label) {
        service.edit(personId, id, phone, label)
            .then(data => setPhones(p => p.map(a => a.id === id ? data : a)));
    }

    function submitPhones(event) {
        event.preventDefault();
        if (event.target.number.value !== "")
            addPhones(event.target.number.value, event.target.title.value)
        event.target.number.value === "";
    }
    return <div className='divAdd'>
        <h3>Phones</h3>
        <Form className="addPhones" onSubmit={(event) => { submitPhones(event) }}>
            <InputGroup >
                <Form.Control name="number" type="number"
                    placeholder="Phones"
                />
                <DropDownEmail/>
            </InputGroup>
            <Button className='Button' type='submit' variant="primary" >Add</Button>
        </Form>
        <List list={phones} removeItems={removePhones} name={"Phones"} update={update}/>
    </div>

}

export default Phones;