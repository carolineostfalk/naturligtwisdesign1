function buildMenu()
{
    var links = [
        ["STARTSIDA", "index.html"],
        ["OM MIG", "ommig2.html"],
        ["MINA KUNDERS TRÄDGÅRDAR", "minakunderstradgardar2.html"],
        ["KURSER & WORKSHOPS", "kurserworkshops2.html"]
        
    ]

    var menyHtml = ""
    for(var i = 0; i < links.length; i = i + 1)
    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }
    document.getElementById("meny").innerHTML = menyHtml

}

let slideIndex = 1;
showSlides(slideIndex); 

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});

let quoteIndex = 0;
showQuotes();

function showQuotes() {
    let quotes = document.getElementsByClassName("quote");
    for (let i = 0; i < quotes.length; i++) {
        quotes[i].style.display = "none";  
    }
    quoteIndex++;
    if (quoteIndex > quotes.length) {quoteIndex = 1}    
    quotes[quoteIndex-1].style.display = "block";  
    setTimeout(showQuotes, 3000); // Ändra 3000 till önskat tidsintervall mellan citatbyte (i millisekunder)
}

