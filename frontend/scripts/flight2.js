document.querySelector(".leaving").innerText=JSON.parse(localStorage.getItem("leaving_place"))
document.querySelector(".going").innerText=JSON.parse(localStorage.getItem("going_place"));



async function appendfetch(){
    let data=await fetch("https://cloudy-kilt-tick.cyclic.app/");
    data= await data.json();
    // console.log(data)
    appenddata(data)
}

function appenddata(data){
    let div=document.querySelector('#appendcen');
    // div.innerHTML="";
    console.log(div)

    data.forEach((el)=>{
        let main_div=document.createElement("div");
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        main_div.className="carr-child";
        let para=document.createElement("p")
        let para1=document.createElement("p");
        para1.innerText=el.airline;
        let img=document.createElement("img");
        let name;
        if(el.airline=="Indigo"){
            name=img_arr[0];
            // console.log(true)
        }
        else if(el.airline=="vistara"){
            name=img_arr[1]
        }else{
            name=img_arr[2]
        }
        img.className="air_img"
        img.src=name
        para1.append(img)
        let para2=document.createElement("p");
        para2.innerText=innerText=`${JSON.parse(localStorage.getItem("going_place"))} - ${JSON.parse(localStorage.getItem("leaving_place"))}`;
        para.innerText=`${el.takeof}-${el.landing}`
        div1.append(para,para2,para1);
      
        let cost=document.createElement("p");
        cost.innerText="$"+el.cost;
        // console.log(cost)
        let stats=document.createElement("p");
        stats.innerText="Price for OneroundTrip"
        div3.append(cost,stats)
        main_div.append(div1,div3)
        div.append(main_div)
    })
}


appendfetch();





let img_arr=["https://seeklogo.com/images/I/indigo-logo-EDBB4B3C09-seeklogo.com.png","https://pbs.twimg.com/media/B3B6A-7CUAAjarl.jpg","https://1000logos.net/wp-content/uploads/2020/04/AirAsia-Logo.png"]