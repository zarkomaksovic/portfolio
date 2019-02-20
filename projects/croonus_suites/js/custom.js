/** Global **/
function findClassName($string, $byClassName) {
    var $rezultat = false;
    //Razdvoji po praznom mestu
    var $elm = $string.split(" ");
    // Proveri da li postoji
    for (var i = 0; i < $elm.length; i++) {
        if ($elm[i] == $byClassName) {
            $rezultat = true;
        }
    }
    // vrati rezultat
    return $rezultat;
}
function findElements(byType = "class", byValue) {
    var $elm = [];

    switch (byType) {
        case "class":
            $elm = document.getElementsByClassName(byValue);
            break;
    }

    return $elm;
}
function findActiveElement($elemts, $byClassName = "active") {
    var $active_position = -1;

    for (var i = 0; i < $elemts.length; i++) {
        if (findClassName($elemts[i].className, $byClassName)) {
            $active_position = i;
        }
    }

    return $active_position;
}
/** ./Global **/

/** Load more **/
var $ajax_done = true;
function loadMore($obj) {
    var $page = $obj.getAttribute('data-page');
    var $holder = $obj.getAttribute('data-holder');

    function loadDoc($page, $holder) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById($holder).innerHTML += this.responseText;
                // Povecaj koju stranu treba da ucitas
                $obj.setAttribute('data-page', Number($page) + Number(1));
                // Proveri da li treba da se skloni dugme load more
                CheckIfEndLoadMore($holder);
                // Omoguci da se ponovo izvrsi load more
                $ajax_done = true;
            }
        };
        xhttp.open("GET", "ajax/gallery/gallery_page_" + $page + ".html", true);
        xhttp.send();
    }

    function CheckIfEndLoadMore($holder) {
        var $holder = document.getElementById($holder);
        var $end_elem = $holder.getElementsByClassName('js-load-more-end');

        if ($end_elem.length > 0) {
            $obj.style.display = 'none';
        }
    }

    if ($ajax_done) {
        // Zabrana da ne ulazi u IF
        $ajax_done = false;
        // Pozivanje Ajax-a
        loadDoc($page, $holder);
    }
}
/** ./Load more **/


// MODAL

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }
// MODAL


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



$ (document).ready(function(){
    var $page = $ ("body".attr)("data-page");
    switch ($page){
        case "index":
        var slideIndex = 1;
        showSlides (slideIndex);
        break;
    }
})