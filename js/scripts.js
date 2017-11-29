var litersToGallons = function(liters) {
  return liters = liters / 3.79;
};

function tspToTbsp(teaspoon) {
  return teaspoon = teaspoon * 3;
};

function cuptoml(ml) {
  return ml = ml * 180;
};

function pintToCups(pint) {
  return pint = pint * 2;
};

$(document).ready(function() {
  $("form#litersToGallonsForm").submit(function(event) {
    event.preventDefault();
    var liters = $("#litersToGallons").val();
    liters = litersToGallons(liters);
    $(".outputLitersToGallons").text(liters);
  });
  $("form#tspToTbspForm").submit(function(event) {
    event.preventDefault();
    var teaspoon = $("#tspToTbsp").val();
    teaspoon = tspToTbsp(teaspoon);
    $(".outputTspToTbsp").text(teaspoon);
  });
  $("form#cuptomlForm").submit(function(event) {
    event.preventDefault();
    var ml = $("#cuptoml").val();
    ml = cuptoml(ml);
    $(".outputcuptoml").text(ml);
  });
  $("form#pintToCupsForm").submit(function(event) {
    event.preventDefault();
    var pint = $("#pintToCups").val();
    pint = pintToCups(pint);
    $(".outputPintsToCups").text(pint);
  });
});
