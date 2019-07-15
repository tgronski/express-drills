function addCheckedEventListener(){
    $(".shopping-item-toggle").on("click", (function (event) {
        $(this).closest("li").children().first().toggleClass("shopping-item__checked");
    }));
}

function addDeleteEventListener(){
    $(".shopping-item-delete").on("click", (function (event) {
        this.closest("li").remove();
    }));
}





$(function () {

 


    $("#js-shopping-list-form").submit(function (event) {
        event.preventDefault();

        const appendedItem = $("#shopping-list-entry").val();

        $(".shopping-list").prepend(`<li>
        <span class="shopping-item">${appendedItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`);
        $('.js-shopping-list-entry').val("");
        //i got this last line from the reading material but i dont understand the value 
        
        addCheckedEventListener();
        addDeleteEventListener();
    });



    addCheckedEventListener();
    addDeleteEventListener();


});


