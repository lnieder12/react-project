import { useEffect, useState } from 'react';
import { PersonService } from "../services/personService";
import { NavLink, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function People() {

    const service = new PersonService();

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(data => setPersons(p => data));
    }, []);




    function addPerson(firstname, lastname) {
        service.add(firstname, lastname)
            .then(data => setPersons(p => [...persons, data]));
    }

    function removePerson(id) {
        service.remove(id)
            .then(data => setPersons(p => p.filter(a => a.id !== id)));
    }

    function submitPerson(event) {
        event.preventDefault();
        if (event.target.firstname.value !== "" && event.target.lastname.value !== "")
            addPerson(event.target.firstname.value, event.target.lastname.value);
        event.target.firstname.value === "";
        event.target.lastname.value === "";
    }

    return <div id="container">
        <div id="sidebar">
            <form onSubmit={(event) => { submitPerson(event) }} >
                <label>Firstname </label>
                <input name="firstname" type="text" />
                <label>Lastname </label>
                <input name="lastname" type="text" />
                <input type="submit" value="Add" />
            </form>
            <List peoples={persons} removePerson={removePerson} />
        </div>
        <div id="info">
            <Outlet />
        </div>
    </div>
}

function List({ peoples, removePerson }) {
    return (
        <ul>
            {peoples ?
                peoples.map(a =>
                    <li id='person' key={a.id}>
                        <NavLink to={"/people/" + a.id} > {a.firstname} {a.lastname} </NavLink>
                        <Button  className="danger small" onClick={() => { removePerson(a.id) }} >Delete</Button>
                    </li>) : <li>Vide</li>
            }
        </ul>
    )
}

export default People;