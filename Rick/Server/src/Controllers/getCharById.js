const axios = require('axios')

const getCharById = (res, id) => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.data)
        .then ( data => {
            let char = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
            res.writeHead(200, {"Content-type": "appliaction/json"})
            return res.end(JSON.stringify(char))
        })
        .catch((error) => { res
            .writeHead(500, {"Content-type": "text/plain"})
            return res.end(error.message)
        })
} 
module.exports = getCharById