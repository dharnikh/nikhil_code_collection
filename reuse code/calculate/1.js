function calculate(){
 
    let arr = JSON.parse(localStorage.getItem("student_data"))||[]
    let obj = {};
    for(var i = 0 ; i <arr.length;i++){
        if(!obj[arr[i].batch]){
            obj[arr[i].batch]=0;
        }
    }
    for(var i = 0 ; i<arr.length;i++){
        obj[arr[i].batch]++;
        console.log(obj)
    }
    
   
}
calculate();