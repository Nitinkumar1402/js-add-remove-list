 function myclick() {

     let list = document.getElementById("list");
     let add = document.getElementById("add");
     add.disabled = "true";


     let row = document.createElement('li');
     row.innerText = 'Air Freshner';
     list.appendChild(row);

 }
 let btn = document.getElementById("remove");

 btn.onclick = () => {
     let list = document.getElementById("list");
     let li = document.querySelectorAll("#list li");
     //  console.log(li);
     li[li.length - 1].remove();




     //  parentElement.remove();


     //  list.removeChild(list.childNodes[0]);




 }






 //  function displayDate() {
 //      parentElement.remove()
 //  }