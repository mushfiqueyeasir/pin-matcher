document.getElementById('generateButton').addEventListener('click', function () {
    const randomvalue = Math.round(Math.random() * 10000)
    if (randomvalue > 999) {
        document.getElementById('generateText').value = randomvalue;
    }
    document.getElementById('try').innerText = 3;
    document.getElementById('notMatched').style.display = 'none'
    document.getElementById('matched').style.display = 'none'
    document.getElementById("generateButton").style.border = "8px solid #39458C";



})

document.getElementById('keyPad').addEventListener('click', function (event) {
    let userInput = document.getElementById('userInput');

    if (!isNaN(event.target.innerText)) {
        userInput.value = userInput.value + event.target.innerText;
    } else if (event.target.innerText == '<') {
        userInput.value = parseInt(userInput.value / 10);
        if (userInput.value == 0)
            userInput.value = ''
    } else if (event.target.innerText == 'C') {
        userInput.value = '';
    }
    else if (event.target.innerText == 'Submit') {
        if (userInput.value == document.getElementById('generateText').value) {
            if (document.getElementById('try').innerText > 0) {

                document.getElementById('matched').style.display = 'block'
                document.getElementById('notMatched').style.display = 'none'
                document.getElementById("generateButton").style.border = "8px solid #00FF00";
            }

        } else {
            if (document.getElementById('try').innerText > 0) {
                document.getElementById('notMatched').style.display = 'block'
                document.getElementById('matched').style.display = 'none'
                document.getElementById("generateButton").style.border = "8px solid #FF0000";
                document.getElementById('try').innerText--;
            }

        }
    }
})