$((function () {
    var url;
    var redirectUrl;
    var target;

    $('body').append(`
                    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                          
                            <h4 class="modal-title delete-modal-header" id="myModalLabel">Waing</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body delete-modal-body">
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" id="cancel-delete">Cancel</button>
                            <button type="button" class="btn btn-danger text-light m-0" id="confirm-delete">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>`);

    //Delete Action
    var itemNameForNotification;

    $(".delete").on('click', (e) => {
        e.preventDefault();

        target = e.target;
        var Id = target.dataset.id;
        var controller = target.dataset.controller;
        var action = target.dataset.action;
        var bodyMessage = target.dataset.bodyMessage;
        var headerMessage = target.dataset.headerType;
        var itemToShow = target.dataset.itemName;

        redirectUrl = target.dataset.redirectUrl;
        itemNameForNotification = itemToShow;
        url = "/" + controller + "/" + action + "?Id=" + Id;


        $(".delete-modal-header").text(headerMessage);
        $(".delete-modal-body").text(bodyMessage);
        $("#deleteModal").modal('show');
        
    });


    document.getElementById("confirm-delete").addEventListener("click", confirmDelete);

    function confirmDelete() {
        fetch(url, {
            method: "POST",
            headers: {
                // FetchTokens is for .NetCore token validation - you have to write your own.
                'RequestVerificationToken': FetchTokens() 
            }
        }).then(data => {
            if (data.ok) {
                // If lynxAlerd is imported.
                // lynxAlert.Green(itemNameForNotification + ' deleted Successfully');
                location.reload();
            }
            return data.json();
        });
    }
}()));
