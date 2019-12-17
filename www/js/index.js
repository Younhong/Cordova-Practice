var battery = $("#battery");
var image = $("#image");

var options = {
    quality: 80,
    correctOrientation: true
}

window.addEventListener('deviceready', function() {
    window.addEventListener("batterystatus", function(status) {
        battery.text(status.level);
    });
    $("#btnTakePic").click(load(1));
    $("#btnLoadPic").click(load(2));
}, true);

function load(source) {
    return function() {
        navigator.camera.getPicture(
            function(imageUri) {
                image.attr('src', imageUri);
            },
            function(error) {
                alert('Error!');
            },
            {
                sourceType: source,
                quality: 80,
                correctOrientation: true
            }
        );
    }
}