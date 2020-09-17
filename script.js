// Function Constructor
/*var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}
Person.prototype.lastName = 'smith';

var john = new Person('john', 1990, 'teacher');
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retiered');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var Family = function(firstName, lastName, yearOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
}
Family.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}
var adu = new Family('adugna', 'wolde', 1991);
var bis = new Family('Bisrat', 'wolde', 1989);
var fan = new Family('fantahun', 'wolde', 1993);
adu.calculateAge();
bis.calculateAge();
fan.calculateAge();

//Object.Create
var personProto = {
    calculateAge: function(){
        console.log(2020 - this.birthOfYear);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.birthOfYear = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'jane' },
    birthOfYear: { value: 1991 },
    job: { value: 'designer'}
});


//primitives vs objects
var a = 12;
var b = 45;
a = 13;
console.log(a);
console.log(b);

var obj1 = {
    name: 'john',
    age: 26
};
var obj2 = obj1;
obj1.age = 27;
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
    name: 'adu',
    city: 'wolkite'
};

function change(a, b){
    a = 30;
    b.city = 'hometown';
}

change(age, obj);
console.log(age);
console.log(obj.city);

//passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fnc){
    arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fnc(arr[i]));
    }
    return arrRes;
}
function calculateAge(el)
{
    return 2020 - el;
}
function isFullAge(el){
    return el >= 18;
}
function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
    
}
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(heartRate);


//Functions returning functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you explain please what ur design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', can you explain please what u teach?');
        }
    }else {
        return function(name) {
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('adu');
designerQuestion('eba');
designerQuestion('mark');
designerQuestion('jane');

interviewQuestion('teacher') ('bisrat');

*/


//IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 -yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
var retirmentUS = retirement(66);
retirmentUS(1990);

retirement(66)(1991);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you explain please what ur design is?');
        } else if (job === 'teacher') {
            console.log(name + ', can you explain please what u teach?');
        }else {
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('adu');
designerQuestion('eba');
designerQuestion('mark');
designerQuestion('jane');

// bind, call and apply
var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal'){
            console.log('good '+ timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly') {
            console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. have a nice ' + timeOfDay + '.');
        }
    }
}
var emily = {
    name: 'emily',
    age: 35,
    job: 'designer'
};
john.presentation('friendly', 'morning');
john.presentation.call(emily, 'formal', 'afternoon');

var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fnc){
    arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fnc(arr[i]));
    }
    return arrRes;
}
function calculateAge(el)
{
    return 2020 - el;
}
function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var ethioIsfull = arrayCalc(ages, isFullAge.bind(this, 18));
console.log(ages);
console.log(ethioIsfull);
*/
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

/*
var Question = function () {
  var questionChoice = Math.floor(Math.random() * 2);
  console.log(questions[questionChoice]);
  var length = answers[questionChoice].length;
  for (var i = 0; i < length; i++) {
    console.log(answers[questionChoice][i]);
  }
  var input = prompt("Please select the correct answer (just type the number)");
  if(input == correctAnswers[questionChoice]) {
    console.log('correct answer');
  }else {
      console.log('not correct answer');
  }
};
Question();
*/
/*
Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}
Person.prototype.lastName = 'smith';

var john = new Person('john', 1990, 'teacher');
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('mark', 1948, 'retiered');

john.calculateAge();
*/




































