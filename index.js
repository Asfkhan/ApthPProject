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

document.addEventListener("DOMContentLoaded", function () {
  let itemCount1 = 0;

  const itemCountSpan1 = document.getElementById("itemCount1");
  const minusBtn1 = document.getElementById("minusBtn1");
  const plusBtn1 = document.getElementById("plusBtn1");
  const bombayGrill = document.getElementById("bombayGrill");
  minusBtn1.addEventListener("click", function () {
    if (itemCount1 > 0) {
      itemCount1--;
      itemCountSpan1.textContent = itemCount1;
    }
  });

  plusBtn1.addEventListener("click", function () {
    itemCount1++;
    itemCountSpan1.textContent = itemCount1;
  });

  bombayGrill.addEventListener("click", function () {
    alert(`Added ${itemCount1} items to cart`);
  });
});
//#red
document.addEventListener("DOMContentLoaded", function () {
  let itemCount2 = 0;
  const itemCountSpan2 = document.getElementById("itemCount2");
  const minusBtn2 = document.getElementById("minusBtn2");
  const plusBtn2 = document.getElementById("plusBtn2");
  const delhiTikkiDP = document.getElementById("delhiTikkiDP");
  minusBtn2.addEventListener("click", function () {
    if (itemCount2 > 0) {
      itemCount2--;
      itemCountSpan2.textContent = itemCount2;
    }
  });

  plusBtn2.addEventListener("click", function () {
    itemCount2++;
    itemCountSpan2.textContent = itemCount2;
  });
  delhiTikkiDP.addEventListener("click", function () {
    alert(`Added ${itemCount2} items to cart`);
  }); //#
});
//#green
document.addEventListener("DOMContentLoaded", function () {
  let itemCount3 = 0;
  const itemCountSpan3 = document.getElementById("itemCount3");
  const minusBtn3 = document.getElementById("minusBtn3");
  const plusBtn3 = document.getElementById("plusBtn3");
  const threeCheeseMeltDP = document.getElementById("threeCheeseMeltDP");
  minusBtn3.addEventListener("click", function () {
    if (itemCount3 > 0) {
      itemCount3--;
      itemCountSpan3.textContent = itemCount3;
    }
  });

  plusBtn3.addEventListener("click", function () {
    itemCount3++;
    itemCountSpan3.textContent = itemCount3;
  });
  threeCheeseMeltDP.addEventListener("click", function () {
    alert(`Added ${itemCount3} items to cart`);
  }); //#
});
//#blue
document.addEventListener("DOMContentLoaded", function () {
  let itemCount4 = 0;
  const itemCountSpan4 = document.getElementById("itemCount4");
  const minusBtn4 = document.getElementById("minusBtn4");
  const plusBtn4 = document.getElementById("plusBtn4");
  const chickenKeemsDP = document.getElementById("chickenKeemsDP");
  minusBtn4.addEventListener("click", function () {
    if (itemCount4 > 0) {
      itemCount4--;
      itemCountSpan4.textContent = itemCount4;
    }
  });

  plusBtn4.addEventListener("click", function () {
    itemCount4++;
    itemCountSpan4.textContent = itemCount4;
  });

  chickenKeemsDP.addEventListener("click", function () {
    alert(`Added ${itemCount4} items to cart`);
  });
  //#
});
//#magenta
document.addEventListener("DOMContentLoaded", function () {
  let itemCount5 = 0
  const roastChickenMeltDP = document.getElementById("roastChickenMeltDP");
  const itemCountSpan5 = document.getElementById("itemCount5");
  const minusBtn5 = document.getElementById("minusBtn5");
  const plusBtn5 = document.getElementById("plusBtn5");
  minusBtn5.addEventListener("click", function () {
    if (itemCount5 > 0) {
      itemCount5--;
      itemCountSpan5.textContent = itemCount5;
    }
  });

  plusBtn5.addEventListener("click", function () {
    itemCount5++;
    itemCountSpan5.textContent = itemCount5;
  });

  roastChickenMeltDP.addEventListener("click", function () {
    alert(`Added ${itemCount5} items to cart`);
  });
  //#
});
//#yellow
document.addEventListener("DOMContentLoaded", function () {
  let itemCount6 = 0;
  const eggnCheeseDP = document.getElementById("eggnCheeseDP");
  const itemCountSpan6 = document.getElementById("itemCount6");
  const minusBtn6 = document.getElementById("minusBtn6");
  const plusBtn6 = document.getElementById("plusBtn6");
  minusBtn6.addEventListener("click", function () {
    if (itemCount6 > 0) {
      itemCount6--;
      itemCountSpan6.textContent = itemCount6;
    }
  });

  plusBtn6.addEventListener("click", function () {
    itemCount6++;
    itemCountSpan6.textContent = itemCount6;
  });

  eggnCheeseDP.addEventListener("click", function () {
    alert(`Added ${itemCount6} items to cart`);
  });
  //#
});
//#brown
document.addEventListener("DOMContentLoaded", function () {
  let itemCount7 = 0;
  const chilliCheeseDP = document.getElementById("chilliCheeseDP");
  const itemCountSpan7 = document.getElementById("itemCount7");
  const minusBtn7 = document.getElementById("minusBtn7");
  const plusBtn7 = document.getElementById("plusBtn7");
  minusBtn7.addEventListener("click", function () {
    if (itemCount7 > 0) {
      itemCount7--;
      itemCountSpan7.textContent = itemCount7;
    }
  });

  plusBtn7.addEventListener("click", function () {
    itemCount7++;
    itemCountSpan7.textContent = itemCount7;
  });

  chilliCheeseDP.addEventListener("click", function () {
    alert(`Added ${itemCount7} items to cart`);
  });
  //#
});
//#cyan
document.addEventListener("DOMContentLoaded", function () {
  let itemCount8 = 0;
  const paneerAchariDP = document.getElementById("paneerAchariDP");
  const itemCountSpan8 = document.getElementById("itemCount8");
  const minusBtn8 = document.getElementById("minusBtn8");
  const plusBtn8 = document.getElementById("plusBtn8");
  minusBtn8.addEventListener("click", function () {
    if (itemCount8 > 0) {
      itemCount8--;
      itemCountSpan8.textContent = itemCount8;
    }
  });

  plusBtn8.addEventListener("click", function () {
    itemCount8++;
    itemCountSpan8.textContent = itemCount8;
  });

  paneerAchariDP.addEventListener("click", function () {
    alert(`Added ${itemCount8} items to cart`);
  });
  //#
});
//#red
document.addEventListener("DOMContentLoaded", function () {
  let itemCount9 = 0;
  const crunchyMexicanDP = document.getElementById("crunchyMexicanDP");
  const itemCountSpan9 = document.getElementById("itemCount9");
  const minusBtn9 = document.getElementById("minusBtn9");
  const plusBtn9 = document.getElementById("plusBtn9");
  minusBtn9.addEventListener("click", function () {
    if (itemCount9 > 0) {
      itemCount9--;
      itemCountSpan9.textContent = itemCount9;
    }
  });

  plusBtn9.addEventListener("click", function () {
    itemCount9++;
    itemCountSpan9.textContent = itemCount9;
  });

  crunchyMexicanDP.addEventListener("click", function () {
    alert(`Added ${itemCount9} items to cart`);
  });
  //#
});
//#black
document.addEventListener("DOMContentLoaded", function () {
  let itemCount10 = 0;
  const chickenTikkaAchariDP = document.getElementById("chickenTikkaAchariDP");
  const itemCountSpan10 = document.getElementById("itemCount10");
  const minusBtn10 = document.getElementById("minusBtn10");
  const plusBtn10 = document.getElementById("plusBtn10");
  minusBtn10.addEventListener("click", function () {
    if (itemCount10 > 0) {
      itemCount10--;
      itemCountSpan10.textContent = itemCount10;
    }
  });

  plusBtn10.addEventListener("click", function () {
    itemCount10++;
    itemCountSpan10.textContent = itemCount10;
  });

  chickenTikkaAchariDP.addEventListener("click", function () {
    alert(`Added ${itemCount10} items to cart`);
  });
  //#
});
//#purple
document.addEventListener("DOMContentLoaded", function () {
  let itemCount11 = 0;
  const pepperChickenDP = document.getElementById("pepperChickenDP");
  const itemCountSpan11 = document.getElementById("itemCount11");
  const minusBtn11 = document.getElementById("minusBtn11");
  const plusBtn11 = document.getElementById("plusBtn11");
  minusBtn3.addEventListener("click", function () {
    if (itemCount11 > 0) {
      itemCount11--;
      itemCountSpan11.textContent = itemCount11;
    }
  });

  plusBtn11.addEventListener("click", function () {
    itemCount11++;
    itemCountSpan11.textContent = itemCount11;
  });

  pepperChickenDP.addEventListener("click", function () {
    alert(`Added ${itemCount11} items to cart`);
  });
  //#
});
//#green
document.addEventListener("DOMContentLoaded", function () {
  let itemCount12 = 0;
  const americanBBQDP = document.getElementById("americanBBQDP");
  const itemCountSpan12 = document.getElementById("itemCount12");
  const minusBtn12 = document.getElementById("minusBtn12");
  const plusBtn12 = document.getElementById("plusBtn12");
  minusBtn12.addEventListener("click", function () {
    if (itemCount12 > 0) {
      itemCount12--;
      itemCountSpan12.textContent = itemCount12;
    }
  });

  plusBtn12.addEventListener("click", function () {
    itemCount12++;
    itemCountSpan12.textContent = itemCount12;
  });

  americanBBQDP.addEventListener("click", function () {
    alert(`Added ${itemCount12} items to cart`);
  });
}); //#
