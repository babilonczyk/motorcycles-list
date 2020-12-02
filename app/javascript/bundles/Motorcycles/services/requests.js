
export function deleteRequest(action) {
    return fetch(`http://localhost:3000/motorcycles/${action.payload.id}` , {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
        }
    })  .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
            prompt(error);
        });
}

export function updateRequest(action) {

    return fetch('http://localhost:3000/motorcycles/' + action.payload.id, {
        method: 'PATCH',
        headers: {
            'Content-Disposition':  'form-data',
            'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
        },
        body:  action.payload.data
    })  .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
            prompt(error);
        });
}


export function createRequest(action) {
    return fetch('http://localhost:3000//motorcycles', {
        method: 'POST',
        headers: {
            'Content-Disposition': 'form-data',
            'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').content
        },
        body: action.payload.data
    })  .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



