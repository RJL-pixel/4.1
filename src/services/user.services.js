const CreateUser = (obj) => {
    return fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POSt',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(responce => responce.json())


}

export {CreateUser};