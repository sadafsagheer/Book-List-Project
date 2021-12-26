console.log("This is index.js");

//Constructor
{
    function Book(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;

    }
}
//Display Constructor
function Display() {

}

//Add method to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

//implement the clear fxn

Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset()
}


//implement the validate fxn
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }

}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message</strong>  ${displaymessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    setTimeout(function () {

        message.innerHTML = ``
    }, 5000);

}






//Add submit event listner to libraryform
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    console.log('You have submitted library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;

    let Networking = document.getElementById('Networking');
    let Programming = document.getElementById('Programming');
    let DSA = document.getElementById('DSA');



    if (Networking.checked) {
        type = Networking.value;


    }
    else if (Programming.checked) {
        type = Programming.value;


    }

    else if (DSA.checked) {
        type = DSA.value;


    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added');


    }
    else {
        display.show('danger', 'sorry u cannot add this book');

    }




    e.preventDefault();
}