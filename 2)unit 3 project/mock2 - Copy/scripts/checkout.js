function myorder(event){
    event.preventDefault()
    let id1 =setTimeout(function(){
   alert("Your order is accepted ")
    },0)
    // clearTimeout(id1)
    let id2 = setTimeout(function(){
        alert("Your order is being Prepared ")
         },3000)
        //  clearTimeout(id2)
         let id3= setTimeout(function(){
            alert("Your order is being packed  ")
             },8000)
            //  clearTimeout(id3)
           let id4 =  setTimeout(function(){
                alert("Your order is out for delivery ")
                 },10000)
                //  clearTimeout(id4)
              let id5=   setTimeout(function(){
                    alert("Order delivered")
                     },12000)
                     clearTimeout(id5)
}