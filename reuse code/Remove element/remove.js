// add a button and add event to it
Button.addEventLiastener("click",function(){
    Remove(ele,index)
})


function Remove(ele,index){
    Array.splice(index,1)
    localStorage.setItem("key_name",JSON.stringify(Array))
    window.location.reload()
}
// Splice function will take two arguements first arguement is starting index and second arguement is delete count
