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
            element.style.display = 'inline-flex'; // Show the element
        }
    }
    let bayFooterElement = document.getElementById('bay-footer');
    if (bayFooterElement) {
        bayFooterElement.style.display = 'inline-flex'; // Show the bay-footer element
    }
    let bayCapElement = document.getElementById('bay-cap');
    if (bayCapElement) {
        bayCapElement.style.display = 'inline-flex'; // Show the bay-footer element
    }
});

document.getElementById('remove-button').addEventListener('click', function() {
    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element) {
            element.style.display = 'none'; // Hide the element
        }
    }
    let bayFooterElement = document.getElementById('bay-footer');
    if (bayFooterElement) {
        bayFooterElement.style.display = 'none'; // Hide the bay-footer element
    }
    let bayCapElement = document.getElementById('bay-cap');
    if (bayCapElement) {
        bayCapElement.style.display = 'none'; // Hide the bay-footer element
    }
});
