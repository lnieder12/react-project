export class GroupService{
    baseUrl = "http://localhost:3000/group/"
    baseUrlPersonFirst = "http://localhost:3000/person/"
    getAll()
    {
        return fetch(this.baseUrl)
        .then(res => res.json())
        .catch(err => "Error" + err)
    }

    get_by_id(id)
    {
        return fetch(this.baseUrlPersonFirst + id + "/groups")
        .then(res => res.json())
        .catch(err => "Err" + err)
    }

    remove(id)
    {
        return fetch(this.baseUrl + id,{
            method:"DELETE"
        }).then(res => res.json())
        .catch(err => "Error : " + err)
    }

    remove_person(id_person, id){
        return fetch(this.baseUrlPersonFirst + id_person + "/group/" + id,
        {
            method:"DELETE"
        }).then(res => res.json())
        .catch(err => "Error : " + err)
    }

    addPersonToGroup(id, personId)
    {
        return fetch(this.baseUrlPersonFirst + personId + "/group/" + id,{
            method:"POST"
        }).then(res => res.json())
        .catch(err => "Error : " + err)
    }

    add(title)
    {
        return fetch(this.baseUrl,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title:title})
        }).then(res => res.json())
        .catch(err => "Error : " + err)
    }
    
    delete(id)
    {
        return fetch(this.baseUrl + id,{
            method:"DELETE"
        }).then(res => res.json())
        .catch(err => "Error : " + err)
    }

    getAllPeople(id)
    {
        return fetch(this.baseUrl + id + "/people", {
            method:"GET"
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }

    get_group_by_id(id)
    {
        return fetch(this.baseUrl + id, {
            method:"GET"
        })
            .then(res => res.json())
            .catch(err => console.log("Error : " + err));
    }
}

//fonctionnalité : aspect graphique
//ajouter des interfaces : composant avec seulement une recherche de personne