import { useEffect, useState } from 'react';
import { GroupService } from '../Services/groupService';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, Button, Form } from 'react-bootstrap';

function PersonGroups({ personId }) {

    const groupService = new GroupService();
    const [group, setGroups] = useState([]);
    const [groups, setAllGroups] = useState([]);

    useEffect(() => {
        groupService.get_by_id(personId).then(
            data => setGroups(data)
        );
    }, [personId]);

    useEffect(() => {
        groupService.getAll().then(
            data => setAllGroups(data)
        )
    }, [personId]);

    function removeGroup(group_id) {

        groupService.remove_person(personId, group_id);
        setGroups(group.filter(g => g.id != group_id));
    }

    function onSubmitGroup(event) {
        event.preventDefault();
        if (event.target.addGroup.value !== "") {
            groupService.addPersonToGroup(event.target.addGroup.value, personId);

            const isIn = group.map(g => g.id == event.target.addGroup.value);
            if (!isIn.includes(true)) {
                setGroups([...group, groups.find(g => g.id == event.target.addGroup.value)]);
            }
        }
    }

    return (
        <div className="divAdd">
            <hr />
            <h3>Groups</h3>
            <Form className="addGroup" action="" onSubmit={(event) => onSubmitGroup(event)}>
                <Form.Select id="SelectGroups" name="addGroup">
                    {
                        groups.map((g) => <option key={g.id} value={g.id}>{g.title}</option>)
                    }
                </Form.Select>
                <Button type="submit" variant="primary">Add</Button>
            </Form>
            <details>
                    <summary>Groups</summary>
                    <ListGroup horizontal style={{ display: 'flex' }}>
                        {
                            group.map((g) =>
                                <ListGroup.Item>
                                    <NavLink to={`/groups/${g.id}`}> {g.title} </NavLink>
                                    <Button id="deleteGroups" variant="primary" onClick={() => { removeGroup(g.id) }} className="small danger">X</Button>
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </details>
        </div>
    )
}

export default PersonGroups;
