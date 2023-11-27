export class PhoneService{
    baseUrl = "http://localhost:3000/person/"

    getAll(id)
    {
        return fetch(this.baseUrl + id + "/Phone", {
            method:"GET"
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

    add(id, number, label)
    {
        return fetch(this.baseUrl + id + "/Phone", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({number:number, label:label})
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

    remove(personId, phoneId)
    {
        return fetch(this.baseUrl + personId + "/Phone/" + phoneId, {
            method:"DELETE"
        })
            .catch(err => console.log("Error : " + err));
    }

    edit(personId, phoneId, number, label) {
        return fetch(this.baseUrl + personId + "/Phone/" + phoneId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ number: number, label: label })
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

}