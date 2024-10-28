
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");

const output = document.querySelector(".output");

const runCode = () => {
    const htmlCode = htmlEditor.value;
    const cssCode = cssEditor.value;

    output.contentDocument.body.innerHTML = htmlCode + "<style>" +"  .contenedor-ordenado {background-color: #2a2a2a;display: flex;height: 100px;width: 100€;font-size: 200%;}.box1 {background-color:#306af1;height: 100px;width: 25%;padding: 20px;}.box2 {background-color:#f06a30;height: 100px;width: 25%;padding: 20px;}.box3 {background-color:#d12020;height: 100px;width: 25%;padding: 20px;}.box4 {background-color:#30f060;height: 100px;width: 25%;padding: 20px;}" + cssCode + "</style>";
};

runCode()

htmlEditor.addEventListener("input", runCode);
cssEditor.addEventListener("input", runCode);