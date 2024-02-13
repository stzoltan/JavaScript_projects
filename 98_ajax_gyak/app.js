let dataUrl = 'https://jsonplaceholder.typicode.com/users'


fetch(dataUrl)
.then(res => res.json())
.then(dataArray => {  
    let mindegyik = [];
    
    dataArray.forEach(element => {
        
        let egyik = {};
        let keys = Object.keys(element);
        let values = Object.values(element);
        
        for (let i = 0; i < keys.length; i++) { 
            egyik[keys[i]] = values[i]
        }
        mindegyik.push(egyik)
        
    });
    console.log(mindegyik)

})

/*
.then(dataArray => dataArray[0])
.then(data => {
    let egyik = {};
    let keys = Object.keys(data);
    let values = Object.values(data);
        
    for (let i = 1; i < keys.length; i++) { 
        egyik[keys[i]] = values[i]
    }
    console.log(egyik)


    fetch(dataUrl, { 
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(egyik)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(er => console.log('Error something was wrong'))

})
*/

.catch(er => console.log('Error something was wrong'))
