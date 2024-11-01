const QnA = [
    {
        question1 : "Which is the capital of India?", 
        a : "Delhi" ,
        b : "Mumbai" ,
        c : "Agra"
    }
,
    {
        question2 : "Which is the currency of India?", 
        a : "Rubles" ,
        b : "Dollar" ,
        c : "Rupee"
    }

]

function displayQA() {
const box = document.getElementById('qa-box');

const qst1 = document.createElement('h2');
    qst1.textContent = `q${index + 1}: ${QnA.question1}`

    const ans1 = document.createElement('p');
    ans1.textContent = `Answer:${QnA.a}`


    box.appendChild(qst1);
    box.appendChild(ans1);

}

displayQA()