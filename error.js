document.getElementById("back").onclick = function() {
    document.location.href = '../'
}

document.getElementById("img").onmouseover = function() {
    img1.play()
    img2.play()
}

document.getElementById("img").onmouseout = function() {
            img1.reset()
            img2.reset()
}

var img1 = anime({
    autoplay: false,
    targets: '.style1',
    translateX: 7,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    duration: 10
}); 
var img2 = anime({
    autoplay: false,
    targets: '.style2',
    translateX: -7,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    duration: 10
});

