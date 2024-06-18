function Book(title,author,pageNumber,read){
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
}

let book1=new Book('A Dance with Dragons', 'George R.R. Martin', '1016', 'Read');
let book2=new Book('BBEG', 'Jerry Joe Seltzer', '105', 'Unread');
let book3=new Book('BBEG', 'Jerry Joe Seltzer', '105', 'Unread');
let book4=new Book('BBEG', 'Jerry Joe Seltzer', '105', 'Unread');

const myLibrary=[book1, book2, book3, book4];


const dialog=document.querySelector('dialog')
const addButton=document.querySelector('dialog+button')
addButton.addEventListener('click',addBookToLibrary)
const modalForm=document.querySelector('form')
const cancel = document.querySelector("#cancel");
cancel.addEventListener("click", () => {
    dialog.close();
});


function addBookToLibrary(){
    dialog.showModal()
    modalForm.addEventListener('submit',(event)=>{
        event.preventDefault()
 let title=document.querySelector('#book-title').value
 let author=document.querySelector('#book-author').value
 let pageNumber=document.querySelector('#page-number').value
 let read=document.querySelector('select').value
 if (pageNumber===undefined||pageNumber===null||pageNumber===''){
    modalForm.reset()
    dialog.close()}
 else{
 let newBook= new Book(title,author,pageNumber,read);
 myLibrary.push(newBook)
 let content=document.createElement('div')
 content.classList.add('content');
 let titleDiv=document.createElement('div')
    titleDiv.classList.add('title')
    titleDiv.textContent=`${newBook.title}`
    content.appendChild(titleDiv)
    let authorDiv=document.createElement('div')
    authorDiv.classList.add('author')
    authorDiv.textContent=`${newBook.author}`
    content.appendChild(authorDiv)
    let pagesDiv=document.createElement('div')
    pagesDiv.classList.add('pages')
    pagesDiv.textContent=`${newBook.pageNumber} pages`
    content.appendChild(pagesDiv)
    let buttonDiv=document.createElement('div')
    buttonDiv.classList.add('button-div')
 let delButton=document.createElement('button')
 delButton.classList.add('del-button')
 delButton.textContent='Delete'
 buttonDiv.appendChild(delButton)
 let statusButton=document.createElement('button')
 statusButton.classList.add('status-button')
 statusButton.textContent=`${newBook.read}`
 if(statusButton.textContent==='Read'){
    statusButton.style.backgroundColor='green'
    statusButton.style.color='white'
}
else(statusButton.style.backgroundColor='red')
 buttonDiv.appendChild(statusButton)
 content.appendChild(buttonDiv)
 display.appendChild(content)
 delButton.addEventListener('click', () => {
     content.remove();
    });
 modalForm.reset()
 dialog.close()
}
 })}

const display=document.querySelector('#display');

function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
    let content=document.createElement('div')
    content.classList.add('content');
    let titleDiv=document.createElement('div')
    titleDiv.classList.add('title')
    titleDiv.textContent=`${myLibrary[i].title}`
    content.appendChild(titleDiv)
    let authorDiv=document.createElement('div')
    authorDiv.classList.add('author')
    authorDiv.textContent=`${myLibrary[i].author}`
    content.appendChild(authorDiv)
    let pagesDiv=document.createElement('div')
    pagesDiv.classList.add('pages')
    pagesDiv.textContent=`${myLibrary[i].pageNumber} pages`
    content.appendChild(pagesDiv)
    let buttonDiv=document.createElement('div')
    buttonDiv.classList.add('button-div')
   delButton=document.createElement('button')
   delButton.classList.add('del-button')
   delButton.textContent='Delete'
   buttonDiv.appendChild(delButton)
   let statusButton=document.createElement('button')
statusButton.classList.add('status-button')
statusButton.textContent=`${myLibrary[i].read}`
if(statusButton.textContent==='Read'){
    statusButton.style.backgroundColor='green'
    statusButton.style.color='white'
}
else(statusButton.style.backgroundColor='red')
buttonDiv.appendChild(statusButton)
content.appendChild(buttonDiv)    
display.appendChild(content)
    delButton.addEventListener('click', () => {
        content.remove();
       });      
    }
}
console.log(displayBooks())

display.addEventListener("click", (event) => {
    if(event.target.innerText === 'Read') {
      event.target.innerText='Unread'
      event.target.style.backgroundColor='red'
    }
    else if (event.target.innerText==='Unread'){
        event.target.innerText='Read'
        event.target.style.backgroundColor='green'
    }
  })