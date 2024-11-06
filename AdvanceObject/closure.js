/* document.getElementById('orange').addEventListener('click', (e) => {
    document.body.style.backgroundColor = e.target.id;
});
document.getElementById('green').addEventListener('click', (e) => {
    document.body.style.backgroundColor = e.target.id;
}); */

// Let's see how we can achieve this closure

function handleColor(color) {
    // document.body.style.backgroundColor = `${color}`;
    return function () {
        document.body.style.backgroundColor = `${color}`;
    };
}
document.getElementById("orange").onclick = handleColor("orange");
document.getElementById("green").onclick = handleColor("green");