// select element
// click on any img-->show layer


// select element img-layer

var allImages = Array.from(document.querySelectorAll("img"))
// console.log("img")
var layer = document.querySelector(".layer")
var inner = document.querySelector(".inner")
var closeBtn = document.querySelector(".fa-xmark")
var nextBtn = document.querySelector(".fa-arrow-right")
var prevBtn = document.querySelector(".fa-arrow-left")

// for عشان اكتر من صوره

var index;

for(var i=0; i< allImages.length; i++ ){
    
    allImages[i].addEventListener("click",function(e){
        // console.log("mmmm")
        layer.classList.remove("d-none");
        // change bg img inner --->clicked img
        // select inner
        // inner.style.backgroundImages = value clicked img
        // console.log(e.target.getAttribute("src"))
        var srcImg = e.target.getAttribute("src")

        inner.style.backgroundImage =`url(${srcImg})`

        index = allImages.indexOf(e.target)
    })
}

// closebtn---->hide layer
function hideLayer(){
//  cnsole.log("kkk")
layer.classList.add("d-none")

}
closeBtn.addEventListener("click",hideLayer)

function getNext(){
    // console.log(index)
    index++
    
    if(index == allImages.length){
       index=0
    }
    var srcImg = allImages[index].getAttribute("src")
 inner.style.backgroundImage =`url(${srcImg})`
}
nextBtn.addEventListener("click",getNext)

function getPrev(){
    // console.log(index)
    index--
    
     if(index == -1){
        index= allImages.length-1
    }
    var srcImg = allImages[index].getAttribute("src")
 inner.style.backgroundImage =`url(${srcImg})`
}
prevBtn.addEventListener("click",getPrev)



 

document.addEventListener("keyup",function(e){
    // consle.log("hi")
    // console.log(e)
     if(e.code == "Space"){
        hideLayer()
    }
else if(e.code == "ArrowLeft"){
    getPrev()
}
else if(e.code == "ArrowRight"){
    getNext()
}

})


layer.addEventListener("click", function(e){
    // console.log("kkk")
    // hideLayer()
    if(e.target != inner){
     hideLayer()

    }
})


