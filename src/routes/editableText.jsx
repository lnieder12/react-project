import { useState } from "react";
import { ValidateEmail, ValidatePhone } from "../Services/validate";

function EditableText(props) {
    const [editing, setEditing] = useState(false);

    const [updating, setUpdating] = useState(false);

    function submitText(event) {
        event.preventDefault();
        setUpdating(true);
        let check = true;

        props.isMail ? check = ValidateEmail(event.target.updateText.value) : 0;
        props.isPhone ? check = ValidatePhone(event.target.updateText.value) : 0;
        if (check) {
            props.onUpdate(props.id, event.target.updateText.value !== "" ? event.target.updateText.value : props.text, event.target.label.value);
            setEditing(false);
        }
        setUpdating(false);



        event.target.updateText.value = "";
    }



    return <>
        {editing ?
            <>
                <form onSubmit={(event) => submitText(event)}>
                    <input type="text" name="updateText" />
                    <select name="label" defaultValue={props.label}>
                        <option value="work">work</option>
                        <option value="home">home</option>
                    </select>
                    <input type="submit" value="Done" disabled={updating} />
                    {/* <button onClick={(event) => submitText(event)}>Done</button> */}
                </form>
                <button className="small" onClick={() => setEditing(false)}>Back</button>
            </>
            : <><label>{props.show}</label>
                <button className="small" onClick={() => setEditing(true)}>Edit</button></>}
    </>
}

export default EditableText;