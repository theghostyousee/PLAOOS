var x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E',
 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
    '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function generateMixed(n) {
    let res = "";
    for (let i = 0; i < n; i++) {
        let id = Math.ceil(Math.random() * 80);
        res += x[id];
    }
    return res;
}

function clickonbody() {
    var text = "I want to play a game with @TrebolDAO.%0a%0a"
    var seperate = "▃▃▃▃▃▃▃▃▃▃▃%0a%0a"
    var hash = "0x" + generateMixed(15);
    window.location.href = "https://twitter.com/intent/tweet?&text=\n" + text + seperate + hash
}


window.onload = function() {
        document.getElementsByName("input")[0].addEventListener('change', doThing);
        function doThing() {
            if (this.value == "Join") {
                clickonbody();
            }
      }
}
