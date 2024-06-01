var app = angular
  .module("MyApp", [])
  .controller("MyController", function ($scope) {
    $scope.selectedTab = 1;

    $scope.selectTab = function (tab) {
      $scope.selectedTab = tab;
    };
  });
var dialogBox1 = document.getElementById("firstdialogBox");
var eventLi1 = document.getElementById("first");
var closeBtn1 = document.getElementsByClassName("close")[0];
eventLi1.onclick = function () {
  dialogBox1.style.display = "block";
};
closeBtn1.onclick = function () {
  dialogBox1.style.display = "none";
};
var dialogBox2 = document.getElementById("seconddialogBox");
var eventLi2 = document.getElementById("second");
var closeBtn2 = document.getElementsByClassName("close")[1];
eventLi2.onclick = function () {
  dialogBox2.style.display = "block";
};
closeBtn2.onclick = function () {
  dialogBox2.style.display = "none";
};
var dialogBox3 = document.getElementById("thirddialogBox");
var eventLi3 = document.getElementById("third");
var closeBtn3 = document.getElementsByClassName("close")[2];
eventLi3.onclick = function () {
  dialogBox3.style.display = "block";
};
closeBtn3.onclick = function () {
  dialogBox3.style.display = "none";
};
var dialogBox4 = document.getElementById("fourthdialogBox");
var eventLi4 = document.getElementById("fourth");
var closeBtn4 = document.getElementsByClassName("close")[3];
eventLi4.onclick = function () {
  dialogBox4.style.display = "block";
};
closeBtn4.onclick = function () {
  dialogBox4.style.display = "none";
};
var dialogBox5 = document.getElementById("fifthdialogBox");
var eventLi5 = document.getElementById("fifth");
var closeBtn5 = document.getElementsByClassName("close")[4];
eventLi5.onclick = function () {
  dialogBox5.style.display = "block";
};
closeBtn5.onclick = function () {
  dialogBox5.style.display = "none";
};
var dialogBox6 = document.getElementById("sixthdialogBox");
var eventLi6 = document.getElementById("sixth");
var closeBtn6 = document.getElementsByClassName("close")[5];
eventLi6.onclick = function () {
  dialogBox6.style.display = "block";
};
closeBtn6.onclick = function () {
  dialogBox6.style.display = "none";
};
var dialogBox7 = document.getElementById("seventhdialogBox");
var eventLi7 = document.getElementById("seventh");
var closeBtn7 = document.getElementsByClassName("close")[6];
eventLi7.onclick = function () {
  dialogBox7.style.display = "block";
};
closeBtn7.onclick = function () {
  dialogBox7.style.display = "none";
};
var dialogBox8 = document.getElementById("eigthdialogBox");
var eventLi8 = document.getElementById("eigth");
var closeBtn8 = document.getElementsByClassName("close")[7];
eventLi8.onclick = function () {
  dialogBox8.style.display = "block";
};
closeBtn8.onclick = function () {
  dialogBox8.style.display = "none";
};
var dialogBox9 = document.getElementById("ninthdialogBox");
var event9 = document.getElementById("ninth");
var closeBtn9 = document.getElementsByClassName("close")[8];
event9.onclick = function () {
  dialogBox9.style.display = "block";
};
closeBtn9.onclick = function () {
  dialogBox9.style.display = "none";
};
var dialogBox10 = document.getElementById("tenthdialogBox");
var event10 = document.getElementById("tenth");
var closeBtn10 = document.getElementsByClassName("close")[9];
event10.onclick = function () {
  dialogBox10.style.display = "block";
};
closeBtn10.onclick = function () {
  dialogBox10.style.display = "none";
};
var dialogBox11 = document.getElementById("eleventhdialogBox");
var event11 = document.getElementById("eleventh");
var closeBtn11 = document.getElementsByClassName("close")[10];
event11.onclick = function () {
  dialogBox11.style.display = "block";
};
closeBtn11.onclick = function () {
  dialogBox11.style.display = "none";
};
var dialogBox12 = document.getElementById("twelfthdialogBox");
var eventL12 = document.getElementById("twelfth");
var closeBtn12 = document.getElementsByClassName("close")[11];
eventL12.onclick = function () {
  dialogBox12.style.display = "block";
};
closeBtn12.onclick = function () {
  dialogBox12.style.display = "none";
};
