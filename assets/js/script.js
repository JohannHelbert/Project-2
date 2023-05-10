function checker(input) {
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() *3);
    document.getElementById("comp_choice").
    innerHTML = 
    ` Computer choose <span>${choices[num].
    toUpperCase()}</span>`;
}