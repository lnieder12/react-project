import { useEffect, useState } from 'react';
import { Table, Button, Form, Accordion } from 'react-bootstrap';
import { GroupService } from '../Services/groupService';
import { useNavigate , Outlet, NavLink } from 'react-router-dom';

function GroupsManager() {
    const [groups, setGroups] = useState([]);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false); // Nouvel état pour l'accordéon

    const navigate = useNavigate();

    useEffect(() => {
        const groupservice = new GroupService();

        groupservice.getAll().then((data) => setGroups(data));
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.formGroupTitle.value !== "") {
            const groupservice = new GroupService();
            groupservice.add(event.target.formGroupTitle.value).then((data) => {
                setGroups([...groups, data]);
                setIsAccordionOpen(true); // Met à jour l'état de l'accordéon après avoir ajouté un groupe
            });
        }
    }

    function AddGroup(props) {
        function handleAddGroup() {
            setIsAccordionOpen(true); // Met à jour l'état de l'accordéon
        }

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupTitle">
                    <Form.Label>Titre du groupe</Form.Label>
                    <Form.Control type="text" placeholder="Entrez le titre du groupe" />
                </Form.Group>
                <Button id="ButtonAddGroup" variant="primary" type="submit" onClick={handleAddGroup}>
                    Ajouter le groupe
                </Button>
            </Form>
        );
    }

    function handleSubmitDelete(event) {
        event.preventDefault();
        if (event.target.deleteGroups.value !== "") {
            const groupservice = new GroupService();
            groupservice.delete(event.target.deleteGroups.value);
            setGroups(groups.filter((g) => g.id != event.target.deleteGroups.value));
            console.log(groups);
            navigate("/groups");
        }
    }

    function DeleteGroup(props) {
        return (
            <Form onSubmit={handleSubmitDelete}>
                <Form.Group controlId="formGroupTitle">
                    <Form.Label>Id du groupe</Form.Label>
                    <Form.Select id="SelectGroups" name="deleteGroups">
                        {
                            groups.map((g) => <option key={g.id} value={g.id}>{g.id}</option>)
                        }
                    </Form.Select>
                </Form.Group>
                <Button id="ButtonAddGroup" variant="primary" type="submit" >
                    Supprimer le groupe
                </Button>
            </Form>

        );
    }



    return (
        <>
            <div className="GroupManager">
                <Table striped bordered hover style={{ width: "700px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((g) => (
                            <tr key={g.id}>
                                <td>{g.id}</td>
                                {/* <td >{g.title}</td> */}
                                <td><NavLink to={"/groups/" + g.id}>{g.title}</NavLink></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ajouter un groupe</Accordion.Header>
                        <Accordion.Body>
                            <AddGroup />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Supprimer un groupe</Accordion.Header>
                        <Accordion.Body>
                            <DeleteGroup />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div id="info">
                <Outlet />
            </div>
        </>
    );
}

export default GroupsManager;