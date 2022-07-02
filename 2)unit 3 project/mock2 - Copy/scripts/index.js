// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu
var coffee_arr = JSON.parse(localStorage.getItem("hanuman"))||[]
// var coffee_arr = []
 async function getData(){
    try{
        let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
        let data = await fetch(url)
        let collect = await data.json()
        // console.log(collect.menu.data)
        
       append(collect.menu.data)
      return collect.menu.data
    }
    catch(err){
        console.log(err)
    }
}
getData()
document.getElementById("menu")

append(data)
function append(data){


data.forEach(function(elem){
        let container = document.createElement("div")
        let type = document.createElement("p")
        type.innerText = elem.title
        type.setAttribute("class","type")
        let image = document.createElement("img")
        image.src = elem.image
        image.setAttribute("class","photo")
        // let price = document.createElement("p")
        // price.innerText=elem.description
        let btn = document.createElement("button")
        btn.innerText = "add to bucket"
        btn.setAttribute("class","khatka")
        btn.addEventListener("click",function(){
            addtoBucket(elem)})
          
        container.append(image,type,btn)
        document.getElementById("menu").append(container)
    })
}
    
function addtoBucket(elem){
    // arr.push(elem)
    // var coffee_arr = JSON.parse(localStorage.getItem("coffee"))||[]
    
    coffee_arr.push(elem)
    console.log(coffee_arr)
    localStorage.setItem("hanuman",JSON.stringify(coffee_arr))
    alert("coffee added to bucket")
    window.location.href="bucket.html"
}
