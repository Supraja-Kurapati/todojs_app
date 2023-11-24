var blur=document.querySelector('div')
//to target header,section, input ,addlist
var todoHeading=document.querySelector('section')
var interface2=document.querySelector('.interface2')
var interface3=document.querySelector(".interface3")
var inputvalue=document.querySelector('#addpara')

var addItemhead=document.querySelector('#inputtext')
var header= document.querySelector('.header')
// for all cards unique id's
var todocount=0;
var newtodocount=0;
//function Popup1
function popup1(){
blur.classList.add('blur')
interface2.style.display='flex';

document.querySelector('#addpara').value=' ';

}
document.querySelector('.closebutton').addEventListener('click',()=>{
    blur.classList.remove('blur');
    interface2.style.display='none';
})



//functionpopup2
function popup2(){
console.log("popup2")
todocount++;
blur.classList.remove('blur');
interface2.style.display="none";
document.querySelector('.notext').style.display="none";

//creating the dynamic Cards on add-popup2
var todocard = document.createElement('div');
var cardheading =document.createElement('div');
var line= document.createElement('hr');
var deletebtn =document.createElement("div");
var addbtn =document.createElement("div")

todoHeading.appendChild(todocard)
todocard .classList. add('box')
todocard.appendChild(cardheading)
todocard.setAttribute('id',`box ${todocount}`)
//assigning input value to cardheading
cardheading.innerHTML=`${inputvalue.value}`;
console.log(cardheading.innerHTML)

//if no-input alert message

 if(inputvalue.value.length<=1){
   alert("Please Enter an ToDo")
todocard.remove()   
}

todocard.appendChild(line)
line.style.color="black" // not working (hr color to be black )

//By Clicking on the heading of the card should display that individual card
cardheading.addEventListener('click',()=>{
    var allItems= document.querySelectorAll('.box')
    //targetting the todocard
    var card=cardheading.parentNode;
    var cardval=cardheading.innerHTML;

    header.style.display="none";
    card.style.display='block';
    todoHeading.style.justifyContent="center";

    allItems.forEach((cards)=>{
        if(cards!==card)
        cards.style.display='none'
    });

  document.querySelector('.upperbar').style.display='flex'
  document.querySelector('.text').innerHTML=`${cardval}`;
  
  //back button in individual cards
  document.querySelector('.back').addEventListener('click',()=>{
    header.style.display='flex';
    todoHeading.style.display='flex';
    todoHeading.style.justifyContent="space-between";
    document.querySelector('.upperbar').style.display='none';
    allItems.forEach((cards)=>{
        cards.style.display='block';
    })
  })
})  
// to delete the cards
todocard.appendChild(deletebtn);
deletebtn.classList.add('deleteclass');
deletebtn.innerHTML=`<img src=./del_img.png>`
deletebtn.addEventListener('click',()=>{
    var carddelete =deletebtn.parentNode;
    carddelete.style.display='none';
    carddelete.remove();
    todocount--;
    // all items deleted 
    if(todocount===0){

     document.querySelector('.notext').style.display="flex";
}
})
//adding the todo tasks in cards
todocard.appendChild(addbtn);
addbtn.classList.add('Addbtn')
addbtn.innerHTML=`<img src=./plus_logo.svg>`

addbtn.addEventListener('click' ,()=>{
    blur.classList.add('blur')
    interface3.style.display='flex'
    card=addbtn.parentNode;
})
}

document.querySelector('.Itembtn').addEventListener('click',()=>{
    //newtodocount++;
    blur.classList.remove('blur')
    interface3.style.display='none';
var todoDiv =document.createElement('div')
var rowtext=document.createElement('div')
var markdown=document.createElement('div')

card.appendChild(todoDiv)
todoDiv.appendChild(rowtext)
todoDiv.appendChild(markdown)

todoDiv.setAttribute('id', `tododiv ${newtodocount}`);
todoDiv.classList.add('todoDiv')
markdown.classList.add('markdown')
rowtext.classList.add('rowtext')

//the assigned todo task should appear in row text

rowtext.innerHTML=(`${inputText.value}`);
document.querySelector('#inputText').value=' ';
//if no-input alert message
if(rowtext.innerHTML.length<=1){
    alert("Please enter the Task")
    todoDiv.remove()
}

console.log(addItemhead)
markdown.innerHTML=`Mark`;
markdown.addEventListener('click',()=>{
    todoDiv.classList.add('linethrough');
    markdown.style.display='none';
})

})
document.querySelector('.close2').addEventListener('click',()=>{
    blur.classList.remove('blur');
    interface3.style.display='none';
})