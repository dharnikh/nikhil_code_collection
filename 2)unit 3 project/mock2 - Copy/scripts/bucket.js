// On clicking remove button the item should be removed from DOM as well as localstorage.
coffee_arr =JSON.parse(localStorage.getItem("hanuman"))||[]




    coffee_arr.forEach(function(elem,index){

            let box = document.createElement("div")
            box.setAttribute("class","top_box")
            let type = document.createElement("p")
            type.innerText = elem.title
            type.setAttribute("class","type")
            let image = document.createElement("img")
            image.src = elem.image
            image.setAttribute("class","photo")
            let btn = document.createElement("button")
          
            btn.innerText="Remove Coffee"
            btn.setAttribute("class","khatka2")
            btn.addEventListener("click",function(){
                Remove(elem,index)
            })
            
            box.append(image,type,btn)
            document.getElementById("bucket").append(box)
            function Remove(elem,index){
                coffee_arr.splice(index,1)
              
                localStorage.setItem("hanuman",JSON.stringify(coffee_arr))
                window.location.reload()
            }
        })
       var count = 0
        function calculate(){
 
            let coffee_arr = JSON.parse(localStorage.getItem("hanuman"))||[]
            let obj = {};
            for(var i = 0 ; i <coffee_arr.length;i++){
                if(!obj[coffee_arr[i].batch]){
                    obj[coffee_arr[i].batch]=0;
                }
            }
            for(var i = 0 ; i<coffee_arr.length;i++){
                obj[coffee_arr[i].batch]++;
                count++
                console.log(obj)
            }
            
           
        }
        calculate();
        document.getElementById("sum").innerText=count
