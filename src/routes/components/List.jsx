import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import EditableText from '../editableText';

function List({ list, removeItems, name, update }) {
    return  <details>
        <summary>{name}</summary>
        <ListGroup horizontal style={{ flexWrap: 'wrap', marginLeft: '10px' }}>
        {
            list ?
            list.map((g) =>
                <ListGroup.Item>
                    {/* <label> {findItems(g)} </label> */}
                    <EditableText show={findItems(g)} onUpdate={update} label={g.label} text={findItems(g)} id={g.id}></EditableText>
                    <Button id="deleteGroups" variant="primary" onClick={() => { removeItems(g.id) }} className="small danger">X</Button>
                </ListGroup.Item>
            )
            : console.log("no list")
        }
    </ListGroup>
</details>
}

function findItems(g) 
{
    if(g.title)
    {
        return g.title;
    }
    else if(g.number)
    {
        return g.number;
    }
    else if(g.address)
    {
        return g.address;
    }
    else if(g.mail)
    {
        return g.mail;
    }
}

export default List