export class MailService{
    baseUrl = "http://localhost:3000/person/"
    getAll(id)
    {
        return fetch(this.baseUrl + id + "/mailAddress", {
            method:"GET",
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

    add(id, mail, label)
    {
        return fetch(this.baseUrl + id + "/mailAddress", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({address:mail, label:label})
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err))
    }

    remove(personId, mailId)
    {
        return fetch(this.baseUrl + personId + "/mailAddress/" + mailId, {
            method:"DELETE"
        })
            .catch(err => console.log("Error : " + err));
    }

    edit(personId, mailId, mail, label) {
        return fetch(this.baseUrl + personId + "/mailAddress/" + mailId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ address: mail, label: label })
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

}