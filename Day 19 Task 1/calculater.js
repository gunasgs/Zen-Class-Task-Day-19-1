const calci = document.createElement("section");

calci.innerHTML = `
<div class="container">
     <div class="buttons">
     <input type="text" placeholder="0" id="output" >
     <button onclick="cl()">C</button>
     <button onclick="del()">←</button>
     <button onclick="display('.')">.</button>
     <button  onclick="display('*')">*</button>
     <button onclick="display('7')">7</button>
     <button onclick="display('8')">8</button>
     <button  onclick="display('9')">9</button>
     <button onclick="display('/')">/</button>
     <button onclick="display('4')">4</button>
     <button onclick="display('5')">5</button>
     <button onclick="display('6')">6</button>
     <button onclick="display('-')">–</button>
     <button onclick="display('1')">1</button>
     <button onclick="display('2')">2</button>
     <button onclick="display('3')">3</button>
     <button onclick="display('+')">+</button>
     <button onclick="display('0')">0</button>
     <button onclick="display('00')">00</button>
     <button onclick="calculate()" id="equal">=</button>
 </div>
</div>
</div>`;
document.body.appendChild(calci);

let outputscreen = document.getElementById("output");

function display(num) {
  outputscreen.value += num;
}
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (error) {
    alert("error");
  }
}

function cl() {
  outputscreen.value = "";
}
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
