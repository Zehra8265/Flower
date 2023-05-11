const cactuse=document.querySelector(".row").querySelectorAll("li")
.console.log(cactuse);
cactuse.forEach(element=>{
    element.addEventListener("click",function()
    {
        cactuse.forEach(div=>div.classlist.remove("active"))
        this.classlist.add("active")
    })
})