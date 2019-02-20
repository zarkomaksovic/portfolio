/** Validation **/
document.getElementById("js-form-submit").addEventListener("click", function (event) {
    if (!validateForm(event.path[0])) {
        event.preventDefault();
    }
});
function validateForm($obj) {
    var $is_valid = true;

    var $holder = $obj.parentNode;
    var $elements = $holder.getElementsByClassName('js-filed');

    function removeAllErrors($holder){
        var $elem = $holder.getElementsByClassName('js-error');
        for (var $i = 0; $i < $elem.length; $i++) {
            $elem[$i].innerHTML = '';
        }
    }

    function checkIfEmpty($elem) {
        var $status = false;

        if (!$elem.value) {
            $status = true;
        }

        return $status;
    }

    function displayError($elem) {
        var $error_elm = $elem.parentNode;
        $error_elm = $error_elm.getElementsByClassName('js-error')[0];
        $error_elm.innerHTML = 'Obavezno polje';
    }

    removeAllErrors($holder);

    for (var $i = 0; $i < $elements.length; $i++) {
        var $elem = $elements[$i];
        // Check if value is empty
        if (checkIfEmpty($elem)) {
            // Display error
            displayError($elem);
            $is_valid = false;
        }
    }

    return $is_valid;
}
/** ./Validation **/