const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getPais(pais) {
  return fetch(`${path}/${pais}`, headers)
    .then((response) => response.json())
}

export default {
  getPais
}