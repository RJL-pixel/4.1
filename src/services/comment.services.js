const CreateComment = (obj) => {
    return fetch('https://jsonplaceholder.typicode.com/comments',
        {
            method: 'POSt',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(responce => responce.json())


}

export {CreateComment};