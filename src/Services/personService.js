export class PersonService{
    baseUrl = "http://localhost:3000/person"
    add(firstname, lastname)
    {
        return fetch(this.baseUrl, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({firstname:firstname, lastname:lastname})
        })  
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
            
    }

    remove(id)
    {
        return fetch(this.baseUrl + "/" + id, {
            method:"DELETE"
        })
            .catch(err => console.log("Error : " + err));
    }

    getAll()
    {
        return fetch(this.baseUrl, {
            method:"GET"
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

    getById(id)
    {
        return fetch(this.baseUrl + "/" + id, {
            method:"GET"
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }
    
}