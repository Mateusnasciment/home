// referência: https://www.tutorialspoint.com/typing-and-deleting-effect-with-javascript-and-css


const words = ["Sonhador","um acadêmico","Desenvolvedor Júnior"];
let i = 0;
let counter;

// exibir o conteúdo
function typeNow() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('shuffle').innerHTML += word.shift();
        } else {
            deleteNow();
            return false;
        };
        counter = setTimeout(loopTyping, 150);
    };
    loopTyping();
};

// delete com \
function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('shuffle').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            }
            else {
                i = 0;
            };
            typeNow();
            return false;
        };
        counter = setTimeout(loopDeleting, 75);
    };
//   Renderização de tempo a saída para a tela como FPS
    setTimeout(function(){
        loopDeleting();
    }, 400);
    // andando ();
};

// execute a função
typeNow();