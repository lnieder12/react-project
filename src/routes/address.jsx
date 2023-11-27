import { useEffect, useState } from 'react';
import { AddressService } from '../Services/addressService';
import { Button, Form, InputGroup } from 'react-bootstrap';
import DropDownEmail from './components/DropDownEmail';
import List from './components/List';

function PostalAddresses({ personId }) {

    const service = new AddressService();

    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        service.getAll(personId)
            .then(data => setAddresses(a => data));
    }, [personId])

    function addAddress(address, label) {
        service.add(personId, address, label)
            .then(data => setAddresses(m => [...addresses, data]));
    }

    function removeAddress(id) {
        service.remove(personId, id)
            .then(setAddresses(p => p.filter(m => m.id !== id)));
    }

    function update(id, address, label) {
        service.edit(personId, id, address, label)
            .then(data => setAddresses(m => m.map(a => a.id === id ? data : a)));
    }

    function submitAddress(event) 
    {
        event.preventDefault();
        if (event.target.address.value !== "")
            addAddress(event.target.address.value, event.target.title.value)
        event.target.address.value === "";
    }
    return <div className='divAdd'>
        <h3>Postal Addresses</h3>
        <Form className="addAdresse" onSubmit={(event) => { submitAddress(event) }}>
            <InputGroup >
                <Form.Control name="address" type="adresse"
                    placeholder="Addresse"
                />
                <DropDownEmail/>
            </InputGroup>
            <Button className='Button' type='submit' variant="primary" >Add</Button>
        </Form>
        <List list={addresses} removeItems={removeAddress} name={"Postal Addresses"} update={update}/>
    </div>
}

export default PostalAddresses;