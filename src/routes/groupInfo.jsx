import { NavLink, useParams } from "react-router-dom";
import { GroupService } from '../Services/groupService';
import { useEffect, useState } from 'react';
import { ListGroup } from "react-bootstrap";

function GroupInfo() {

    const service = new GroupService();

    let { id } = useParams();

    const [people, setPeople] = useState([]);

    const [groupName, setGroupName] = useState(null);

    useEffect(() => {
        service.getAllPeople(id)
            .then(data => setPeople(p => data));
        service.get_group_by_id (id)
            .then(data => setGroupName(g => data.title));
    }, [id])


    return <details>
        <summary>Peoples in {groupName}</summary>
        <ListGroup horizontal style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
            {
                people ?
                    people.map((g) =>
                        <ListGroup.Item>
                            {/* <label> {findItems(g)} </label> */}
                            <NavLink to={"/people/" + g.id}>{g.firstname} {g.lastname}</NavLink>
                            {/* <Button id="deleteGroups" variant="primary" onClick={() => { removeItems(g.id) }} className="small danger">X</Button> */}
                        </ListGroup.Item>
                    )
                    : console.log("no list")
            }
        </ListGroup>
    </details>
    // <>
    //     <ul>
    //         {people ?
    //             people.map(p =>
    //                 <li>
    //                     <NavLink to={"/people/" + p.id}>{p.firstname} {p.lastname}</NavLink>
    //                 </li>)
    //         : <li></li>
    //         }
    //     </ul>
    // </>


}

export default GroupInfo