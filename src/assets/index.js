const show_img = document.querySelector('#show_img');
const text = document.querySelector("#text");  

window.addEventListener('scroll' , () => {

    if ( window.scrollY <= 300 ){
        text.style.display = 'none';
    }else {
        text.style.display = 'block';
    }

    if (window.scrollY >= 600 ){
        text.style.color = 'black';
        text.style.transition = "0.2s ease";
        text.style.marginLeft = "0px";
    }else {
        text.style.color = "transparent";
        text.style.transition = "0.1s ease";
        text.style.marginLeft = "100px";
        

    };
    

});