setScreen("openScreen");

// VARIABLES:___________________________________________________________________
var myth = "";
var real = "";
var userchoice = "";
var i ="";


// ON EVENTS:___________________________________________________________________
// Learn onEvents---------------------------------------------------------------
// getting to learn screen
onEvent("learnButton", "click", function( ) {
  setScreen("learnStart");
});

// learn screen 1
onEvent("startLearn", "click", function( ) {
  setScreen("learnScreen1");
});

// learn screen 2
onEvent("nextButton1", "click", function( ) {
  setScreen("learnScreen2");
});

// learn screen 3
onEvent("nextButton2", "click", function( ) {
  setScreen("learnScreen3");
});

// learn screen 4
onEvent("nextButton3", "click", function( ) {
  setScreen("learnEnd");
});

// exit learn
onEvent("exitButton1", "click", function( ) {
  setScreen("openScreen");
});

// Quiz onEvents----------------------------------------------------------------
// getting to the quiz screen
onEvent("goToQuiz", "click", function( ) {
  setScreen("quizStart");
});

onEvent("quizButton", "click", function( ) {
  setScreen("quizStart");
});

// quiz screen 1
onEvent("playButton", "click", function( ) {
  setScreen("quizScreen1");
  myth = "true";
  real = "false";
  i = 1;
});

onEvent("myth1", "click", function( ) {
  userchoice = "true";
  mythOrReal();
});

onEvent("real1", "click", function( ) {
  userchoice = "false";
  mythOrReal();
});

// quiz screen 2
onEvent("quizNext1", "click", function( ) {
  setScreen("quizScreen2");
  myth = "true";
  real = "false";
  i = 2;
});

onEvent("myth2", "click", function( ) {
  userchoice = "true";
  mythOrReal();
});

onEvent("real2", "click", function( ) {
  userchoice = "false";
  mythOrReal();
});

// quiz screen 3
onEvent("quizNext2", "click", function( ) {
  setScreen("quizScreen3");
  myth = "false";
  real = "true";
  i = 3;
});

onEvent("myth3", "click", function( ) {
  userchoice = "false";
  mythOrReal();
});

onEvent("real3", "click", function( ) {
  userchoice = "true";
  mythOrReal();
});

// quiz screen 4
onEvent("quizNext3", "click", function( ) {
  setScreen("quizScreen4");
  myth = "false";
  real = "true";
  i = 4;
});

onEvent("myth4", "click", function( ) {
  userchoice = "false";
  mythOrReal();
});

onEvent("real4", "click", function( ) {
  userchoice = "true";
  mythOrReal();
});

// exit quiz 
onEvent("quizNext4", "click", function( ) {
  setScreen("quizEnd");
});

onEvent("exitEnd", "click", function( ) {
  setScreen("openScreen");
});

onEvent("tryLearnMode", "click", function( ) {
  setScreen("learnStart");
});



// FUNCTIONS:__________________________________________________________________
// myth or real function-------------------------------------------------------
function mythOrReal() {
    if ((userchoice == "true")) {
      showElement("incorrect" + i);
      setText("incorrect" + i, "CORRECT!");
      showElement("quizNext" + i);
    } else {
      showElement("incorrect" + i);
      setText("incorrect" + i, "TRY AGAIN!");
    }
    return ;
}
