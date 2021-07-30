var start=1;

function set_time(){
    setInterval(image_show,2000);
}
function image_show(){
    var image_data;
    if(start==1){
        image_data="https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/3de4b702-38df-4410-8b6b-160a4872002d/838_gameofthrones8-20-posters_1.jpg";
    }
    else if(start==2){
        image_data="http://prod-upp-image-read.ft.com/deaaa0e2-7add-11e9-8b5c-33d0560f039c";
    }
    else if(start==3){
        image_data="https://static.onecms.io/wp-content/uploads/sites/6/2019/04/3498h943ho9p485whp9w34h-2000.jpg";
    }
    else if(start==4){
        image_data="https://images.rtl.fr/~c/2000v2000/rtl/www/1302132-daenerys-targaryen-et-son-dragon-dasn-game-of-thrones.jpg";
    }
    else if(start==5){
        image_data="https://www.indiewire.com/wp-content/uploads/2019/06/fa61b4f5e22c1782e222f541b1c7118b96af404f595245cc75fa864768fd5b79312c962d933f62a5c192b94a8afa1bd2.jpg";
    }
    else if(start==6){
        image_data="https://cdn.vox-cdn.com/thumbor/YLrAX7gBfpnWT_eQVbDOukgosb4=/0x0:2094x1571/1200x800/filters:focal(0x0:2094x1571)/cdn.vox-cdn.com/uploads/chorus_image/image/49913721/ramsay_20commander.0.jpg";
    }
    else if(start==7){
        image_data="https://static.wikia.nocookie.net/gotascent/images/b/bc/World_Epic_Battle_Victory.jpg/revision/latest?cb=20140130203410";
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


