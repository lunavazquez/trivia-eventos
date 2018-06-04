'use strict';

// definicion de variables de usuario, trae el elemento por el id
var userNameContainer = document.getElementById('username');
var userNameBtn = document.getElementById('btn-username');

// insertar valor dentro del html,
// funcion que agrega un escucga,
// recibe 2 parametros que evento escucha y que hace cuando ocurre el evento
userNameBtn.addEventListener('click', function (event) {
  var username = document.getElementById('input-username').value;
  if (username) {
    userNameContainer.innerHTML = username;
  } else {
    return alert('Debes ingresar un nombre.');
  }
  document.getElementById('question-user').className = 'none';
  document.getElementById('question-play').className = 'question-play block';
});

// definicion de la variable para juego
var btnPlay = document.getElementById('btn-play');
var btnNoplay = document.getElementById('btn-noplay');

btnPlay.addEventListener('click', function (event) {
  //trae las preguntas al doocumento
  document.getElementById('questions').className = 'questions block';
  document.getElementById('question-play').className = 'none';
});

btnNoplay.addEventListener('click', function (event) {
  document.getElementById('noplay').className = 'block';
  //borra botones si y no
  document.getElementById('question-play').className = 'none';
});

// contenedores para las preguntas
var successContainer = document.getElementById('success');
var failContainer = document.getElementById('fail');
successContainer.innerHTML = '<p>Correctas</p>';
failContainer.innerHTML = '<p>Incorrectas</p>';

// plantillas de codigo
// defino variables de preguntas correctas para referirme a ellas solo con el nombre de la variable
var templateQ1 = '<p>¿Quién descubrio america?<br><span>Cristóbal Colón</span></p>';
var templateQ2 = '<p>¿A qué se dedica Stephen Hawking?<br><span>Física</span></p>';
var templateQ3 = '<p>¿Cuál es la capital de Francia?<br><span>París</span></p>';

// guardar valores del formulario
var button = document.getElementById('btn-question');
button.addEventListener('click', function (event) {
  //
  event.preventDefault();
  event.stopPropagation();

  var answerOne = document.querySelector('input[name="qone"]:checked').value;
  var answerTwo = document.querySelector('input[name="qtwo"]:checked').value;
  var answerThree = document.querySelector('input[name="qthree"]:checked').value;

  if (answerOne === 'cristobal') {
    successContainer.innerHTML += templateQ1;
  } else {
    failContainer.innerHTML += templateQ1;
  }
  if (answerTwo === 'physical') {
    successContainer.innerHTML += templateQ2;
  } else {
    failContainer.innerHTML += templateQ2;
  }
  if (answerThree === 'paris') {
    successContainer.innerHTML += templateQ3;
  } else {
    failContainer.innerHTML += templateQ3;
  }

  document.getElementById('answers').className = 'block';
  document.getElementById('questions').className = 'none';

  return true;
});