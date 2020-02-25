var submitButton = document.querySelector('.submit-button');
var allFormGroups = document.querySelectorAll('.form-group');
var titleInput = document.querySelector('#title');
var authorInput = document.querySelector('#author');
var isbnInput = document.querySelector('#isbn');
var table = document.querySelector('.table');

var booksFromLocalStorage =JSON.parse(localStorage.getItem('books'));
function makeItHappens(){
    
    console.log(booksFromLocalStorage);
    if(booksFromLocalStorage!=null){
        
        for(i=0;i<booksFromLocalStorage.length;i++){
            var newRow = document.createElement('tr');
            var authorData = document.createElement('td');
            var titleData = document.createElement('td');
            var isbnData = document.createElement('td');
                
            authorData.textContent = booksFromLocalStorage[i].author;
            titleData.textContent = booksFromLocalStorage[i].title;
            isbnData.textContent = booksFromLocalStorage[i].isbn;
        
            newRow.appendChild(titleData);
            newRow.appendChild(authorData);
            newRow.appendChild(isbnData);
        
            table.appendChild(newRow);
        }
    }
}


submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    var book = new Book(titleInput.value,authorInput.value,isbnInput.value);
    if(booksFromLocalStorage){
        booksFromLocalStorage.push(book);
    }else{
        booksFromLocalStorage = new Array(book);
        console.log(booksFromLocalStorage);
    }
    
    
    
    var newRow = document.createElement('tr');
    var authorData = document.createElement('td');
    var titleData = document.createElement('td');
    var isbnData = document.createElement('td');
        
    authorData.textContent = booksFromLocalStorage[booksFromLocalStorage.length-1].author;
    titleData.textContent = booksFromLocalStorage[booksFromLocalStorage.length-1].title;
    isbnData.textContent = booksFromLocalStorage[booksFromLocalStorage.length-1].isbn;

    newRow.appendChild(titleData);
    newRow.appendChild(authorData);
    newRow.appendChild(isbnData);

    table.appendChild(newRow);

    localStorage.setItem('books',JSON.stringify(booksFromLocalStorage));
        
    authorInput.value="";
    titleInput.value="";
    isbnInput.value="";
    
});

authorInput.addEventListener('blur',verifInput);

isbnInput.addEventListener('blur',verifInput);

titleInput.addEventListener('blur',verifInput);

function verifInput(){

    if(this.nextElementSibling){
        this.nextElementSibling.remove();
    }
    newParag = document.createElement("p");
    //newParag.setAttribute("id",input);
    if(this.value==""){
        this.style.borderColor='red';
        newParag.innerHTML="Error ! Input is not validated !";
        newParag.style.color="red";
    }else{
        this.style.borderColor='green';
        newParag.innerHTML="Good !";
        newParag.style.color="green";
    }
    this.parentElement.append(newParag);
}

class Book{
    title;
    author;
    isbn;
    constructor(title,author,isbn){
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }
}