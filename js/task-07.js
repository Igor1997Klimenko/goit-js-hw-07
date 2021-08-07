const controlFont = document.getElementById('font-size-control');
const textCreate = document.getElementById('text');

controlFont.oninput = function() {
    textCreate.style.fontSize = controlFont.value + 'px';
};