(function(){
    function Question(questn, answer, correctans) {
        this.questn = questn;
        this.answer = answer;
        this.correctans = correctans;
    }
    Question.prototype.displayQuestion =  function() {
        console.log(this.questn);
        for(var i = 0; i < this.answer.length; i++){
            console.log(i + ': ' + this.answer[i]);
        }
        var input = prompt("Please select the correct answer (just type the number)");
        if (input !== 'exit'){
            if(input === this.correctans){
                console.log('Correct answer');
                score++;
            }else {
                console.log('Not correct answer');
            }
            this.nextQuestion();
        }
        else {
            displayS();
        }
        function displayS() {
            console.log('Your score is '+ score);
        }
    }
    
    Question.prototype.nextQuestion = function() {
        var questionChoice = Math.floor(Math.random() * questions.length);
        questions[questionChoice].displayQuestion();
    }
    var q1 = new Question("Is Javascript the coolest Language in tht world?", ['Yes', 'No'], '0');
    var q2 = new Question("What is the name of this courses's teacher?", ["john", "michael", "jonas"], '2');
    var q3 = new Question('What does best discribe coding', ['borring', 'hard', 'fun', 'tidious'], '2');
    var score = 0;
    var questions = [q1, q2, q3];
    var questionChoice = Math.floor(Math.random() * questions.length);
    questions[questionChoice].displayQuestion();
})();
