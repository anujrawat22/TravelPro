let from=document.querySelector(".from");
from.addEventListener("input",fun);

function fun(){
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "bkd4MjdBU0tWeVhwM2ZSYkVvRzNrNkdEUlBlQjB5cXRKNVdvQjVTRA==");
    
  
    let data=from.value;
    data=data.slice(0,3);
    // let a="a";
    let flag=false
    data=data.toUpperCase()
//   for(let i=0;i<arr.length;i++){
//     let sub=arr[i].split("-");
//     // console.log(sub[1])
//     if(data==sub[1]){
//      flag=true;
    
//      break
//     }
//   }
//   console.log(flag)
//   if(flag==false){
//     let ran=Math.floor(Math.random()*36);
//     sub=arr[ran].split("-")[1];
//     data=sub
//   }
//   console.log(data)
    
//     fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${data}/cities`, requestOptions)
//     .then(response => response.text())
//     .then(result => {
//     //     result.forEach((el)=>{
//     //     console.log(el)
//     // })
//     console.log(result)
// }
// )
    // .catch(error => console.log('error', error));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
            'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
        }
    };
    let valuea=from.value;
    if(valuea.includes(" ")){
    let testarr=valuea.split(" ");
    let b=testarr.join("%20");
    console.log(b) 
    }
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?iata=${data}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

        console.log(data)
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?name=${from.value}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
   
}
 
let arr=['IN-WB', 'IN-UT', 'IN-UP', 'IN-TR', 'IN-TN', 'IN-TG', 'IN-SK', 'IN-RJ', 'IN-PY', 'IN-P', 'IN-OR', 'IN-NL', 'IN-MZ', 'IN-MP', 'IN-M', 'IN-ML', 'IN-MH', 'IN-LD', 'IN-LA', 'IN-KL', 'IN-KA', 'IN-JK', 'IN-JH', 'IN-HR', 'IN-HP', 'IN-G', 'IN-GA', 'IN-DL', 'IN-DH', 'IN-CT', 'IN-CH', 'IN-BR', 'IN-AS', 'IN-AR', 'IN-AP']