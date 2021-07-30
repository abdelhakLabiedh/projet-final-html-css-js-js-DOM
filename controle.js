var start=1;

function set_time(){
    setInterval(render_image,2000);
}
function image_show(){
    var image_data;
    if(start==1){
        image_data="https://i.pinimg.com/originals/b6/55/ef/b655ef63ea3889e832f5afb08f11e692.gif";
    }
    else if(start==2){
        image_data="data:image/jpeg;base64,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";
    }
    else if(start==3){
        image_data="https://mir-s3-cdn-cf.behance.net/project_modules/disp/b23f5b41281639.57a00ad43e518.gif";
    }
    else if(start==4){
        image_data="https://media2.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif";
    }
    else{
        start=1;
    }
document.getElementById("data").src=""+image_data;
    
start++;
}


var index = 0;

function render_image()
{
    var obj = document.getElementById("image-slider");
    
    if(obj.childElementCount == 0)
    {
        return;
    }

    if(index==0)
    {
        obj.children[obj.childElementCount - 1].style.display = "none";
    }
    else
    {
        obj.children[index - 1].style.display = "none";
    }

    obj.children[index].style.display = "block";

    index++;
    
    if(index>= obj.childElementCount)
    {
        index=0;
    }

}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


