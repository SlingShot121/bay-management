document.getElementById('camera-menu').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

document.getElementById('add-button').addEventListener('click', function() {
    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element) {
            element.style.display = 'block'; // Show the element
        }
    }
});

document.getElementById('remove-button').addEventListener('click', function() {
    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element) {
            element.style.display = 'none'; // Hide the element
        }
    }
});
