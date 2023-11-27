export class AddressService{
    baseUrl = "http://localhost:3000/person/"

    getAll(id)
    {
        return fetch(this.baseUrl + id + "/postalAddress", {
            method:"GET"
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

    add(id, address, label)
    {
        return fetch(this.baseUrl + id + "/postalAddress", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({address:address, city:"", country:"", label:label})
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

    remove(personId, addressId)
    {
        return fetch(this.baseUrl + personId + "/postalAddress/" + addressId, {
            method:"DELETE"
        })
            .catch(err => console.log("Error : " + err));
    }

    edit(personId, addressId, address, label) {
        return fetch(this.baseUrl + personId + "/postalAddress/" + addressId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ address: address, city:"", country:"", label: label })
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

}