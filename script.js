document.getElementById('camera-menu').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

document.getElementById('go-button').addEventListener('click', function() {
    let outbay2Element = document.getElementById('outbay-2');
    if (outbay2Element) {
        outbay2Element.style.display = 'inline-flex'; // Show the bay-footer element
    }
    let outbayElement = document.getElementById('outbay');
    if (outbayElement) {
        outbayElement.style.display = 'inline-flex'; // Show the bay-footer element
    }
});

document.getElementById('add-button').addEventListener('click', function() {
    let outbay2Element = document.getElementById('outbay-2');
    if (outbay2Element) {
        outbay2Element.style.display = 'none'; // Show the bay-footer element
    }
    let outbayElement = document.getElementById('outbay');
    if (outbayElement) {
        outbayElement.style.display = 'none'; // Show the bay-footer element
    }
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
