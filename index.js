    const toggleBtn= document.querySelector('.togglebtn');
    const hidden= document.querySelector(".hidden");
    const toggleBtn1= document.querySelector('.togglebtn1');
    const hidden1= document.querySelector(".hidden1");
    const toggleBtn2= document.querySelector('.togglebtn2');
    const hidden2= document.querySelector(".hidden2");
    const toggleBtn3= document.querySelector('.togglebtn3');
    const hidden3= document.querySelector(".hidden3");
    document.querySelector('.hidden').style.display='none';//This allow to hide when the page is first loaded
    document.querySelector('.hidden1').style.display='none';//This allow to hide when the page is first loaded 
    document.querySelector('.hidden2').style.display='none';//This allow to hide when the page is first loaded 
    document.querySelector('.hidden3').style.display='none';//This allow to hide when the page is first loaded 
 
    toggleBtn.addEventListener('click', ()=>{
        if(hidden.style.display==='none'){//we add a click event
            hidden.style.display='block';//if it's hidden when click it turn it to block
            hidden.style.scroll="smooth"
            document.querySelector('.togglebtn').style.backgroundColor='#2c98f0'
            document.querySelector('.heading').style.color='white';
            document.querySelector('.signh').style.display='block';
            document.querySelector('.sign').style.display='none';
        }else{
            hidden.style.display='none';//else when click it turn it to hidden
            document.querySelector('.togglebtn').style.backgroundColor='#f2f3f7'
            document.querySelector('.heading').style.color='#333';
            document.querySelector('.signh').style.display='none';
            document.querySelector('.sign').style.display='block';
            document.style.scroll
    }
})
toggleBtn1.addEventListener('click', ()=>{
    if(hidden1.style.display==='none'){//we add a click event
        hidden1.style.display='block';//if it's hidden when click it turn it to block
        document.querySelector('.togglebtn1').style.backgroundColor='#2c98f0'
        document.querySelector('.heading1').style.color='white';
        document.querySelector('.signh1').style.display='block';
        document.querySelector('.sign1').style.display='none';

    }else{
        hidden1.style.display='none';//else when click it turn it to hidden
        document.querySelector('.togglebtn1').style.backgroundColor='#f2f3f7'
        document.querySelector('.heading1').style.color='#333';
        document.querySelector('.signh1').style.display='none';
        document.querySelector('.sign1').style.display='block';
}
})
toggleBtn2.addEventListener('click', ()=>{
    if(hidden2.style.display==='none'){//we add a click event
        hidden2.style.display='block';//if it's hidden when click it turn it to block
        document.querySelector('.togglebtn2').style.backgroundColor='#2c98f0'
        document.querySelector('.heading2').style.color='white';
        document.querySelector('.signh2').style.display='block';
        document.querySelector('.sign2').style.display='none';
    }else{
        hidden2.style.display='none';//else when click it turn it to hidden
        document.querySelector('.togglebtn2').style.backgroundColor='#f2f3f7'
        document.querySelector('.heading2').style.color='#333';
        document.querySelector('.signh2').style.display='none';
        document.querySelector('.sign2').style.display='block';
}
})
toggleBtn3.addEventListener('click', ()=>{
    if(hidden3.style.display==='none'){//we add a click event
        hidden3.style.display='block';//if it's hidden when click it turn it to block
        document.querySelector('.togglebtn3').style.backgroundColor='#2c98f0'
        document.querySelector('.heading3').style.color='white';
        document.querySelector('.signh3').style.display='block';
        document.querySelector('.sign3').style.display='none';
    }else{
        hidden3.style.display='none';//else when click it turn it to hidden
        document.querySelector('.togglebtn3').style.backgroundColor='#f2f3f7'
        document.querySelector('.heading3').style.color='#333';
        document.querySelector('.signh3').style.display='none';
        document.querySelector('.sign3').style.display='block';
}
})


