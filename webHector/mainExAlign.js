
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");

const output = document.querySelector(".output");

const runCode = () => {
    const htmlCode = htmlEditor.value;
    const cssCode = cssEditor.value;

    output.contentDocument.body.innerHTML = htmlCode + "<h1>La propiedad align-self</h1><div id='main'><div style='background-color:coral;'>Este DIV tiene poco contenido.</div><div id='DivPrueba' style='background-color:lightblue;'>Este DIV tiene más contenido y generalmente esto puede ser un problema al alinear varios elementos DIV.</div><div style='background-color:lightgreen;'>Este<br>DIV<br>tiene<br>muchos saltos<br>de línea.</div></div>" + "<style>" +"body{background-color:#E7E9EB;}#main{background-color:#FFFFFF;width: 100%;height: 300px;display: flex;align-items: center;}#main div {flex: 1;}" + cssCode + "</style>";
};

runCode()

htmlEditor.addEventListener("input", runCode);
cssEditor.addEventListener("input", runCode);