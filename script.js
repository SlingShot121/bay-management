document.getElementById('camera-menu').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

document.getElementById('go-button').addEventListener('click', function () {
    let outbay2Element = document.getElementById('outbay-2');
    let outbayElement = document.getElementById('outbay');
    if (outbay2Element) outbay2Element.style.display = 'inline-flex';
    if (outbayElement) outbayElement.style.display = 'inline-flex';
});

document.getElementById('add-button').addEventListener('click', function () {
    let outbay2Element = document.getElementById('outbay-2');
    let outbayElement = document.getElementById('outbay');
    if (outbay2Element) outbay2Element.style.display = 'none';
    if (outbayElement) outbayElement.style.display = 'none';

    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element) element.style.display = 'inline-flex';
    }
    let bayFooterElement = document.getElementById('bay-footer');
    let bayCapElement = document.getElementById('bay-cap');
    if (bayFooterElement) bayFooterElement.style.display = 'inline-flex';
    if (bayCapElement) bayCapElement.style.display = 'inline-flex';
});

document.getElementById('remove-button').addEventListener('click', function () {
    for (let i = 47; i <= 57; i++) {
        let element = document.querySelector('.div-div-' + i);
        if (element) element.style.display = 'none';
    }
    let bayFooterElement = document.getElementById('bay-footer');
    let bayCapElement = document.getElementById('bay-cap');
    if (bayFooterElement) bayFooterElement.style.display = 'none';
    if (bayCapElement) bayCapElement.style.display = 'none';
});
