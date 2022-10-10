// function getColors(){
//     //თუ წარმატებით მივედით
// function Colors() {
//     let response= this.responseText
//     let responsData= JSON.parse(response);
//     console.log(responsData);
//     let ul = document.createElement('ul');
//     responsData.data.forEach(element=> {
//         let li = document.createElement('li');
//         li.textContent= `${element.name} ${element.color} ${element.year}`;
//         ul.appendChild(li);
//     });

   
   
//     document.getElementById('ajax').appendChild(ul);
// }

// //თუ წარმატებულ პასუხს არ მივიღებთ
// function errorshow(){
//     let p = document.createElement('p');
//     p.textContent= 'server error';
//     p.style.color='red';
//     document.getElementById('ajax').appendChild(p);
// }
// let requist = new XMLHttpRequest();
// requist.addEventListener('load', Colors);
// requist.addEventListener('error', errorshow);
// requist.open('GET', 'https://reqres.in/api/unknown');
// requist.send(); 
// }

// getColors();



//fetch method==========================

fetch('https://reqres.in/api/unknown', {
    method: 'GET'
})
.then(function(response){
    if(response.status !==200){
        throw response.status;
    }
return response.json();
})
.then(function(responseData){
    let ul = document.createElement('ul');
    responseData.data.forEach(element=> {
                let li = document.createElement('li');
                
                li.textContent= `${element.name} ${element.color} ${element.year}`;
                ul.appendChild(li);
            });
    
     document.getElementById('ajax').appendChild(ul);

})
.catch(function(error){
    let p = document.createElement('p');
        p.textContent= 'server error';
        p.style.color='red';
        document.getElementById('ajax').appendChild(p);
})







/////last one---------
