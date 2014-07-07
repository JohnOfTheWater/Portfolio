(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#project1 .description').hide();
    $('#project2 .description').hide();
    $('#project3 .description').hide();
    $('#project4 .description').hide();
    $('#project5 .description').hide();
    $('#project6 .description').hide();
    $('#project1').mouseenter(showPr1);
    $('#project1').mouseleave(hidePr1);
    $('#project2').mouseenter(showPr2);
    $('#project2').mouseleave(hidePr2);
    $('#project3').mouseenter(showPr3);
    $('#project3').mouseleave(hidePr3);
    $('#project4').mouseenter(showPr4);
    $('#project4').mouseleave(hidePr4);
    $('#project5').mouseenter(showPr5);
    $('#project5').mouseleave(hidePr5);
    $('#project6').mouseenter(showPr6);
    $('#project6').mouseleave(hidePr6);
    $('#project4 a').click(comingSoon);
    $('#project5 a').click(comingSoon);
    $('#project6 a').click(comingSoon);
  }

  function comingSoon(){
    alert('coming soon!');
  }

  function showPr1(){
    $('#project1').animate({height:'380px'}, 400);
    $('#project1 .description').delay(400).fadeIn('fast');
  }

  function hidePr1(){
    $('#project1 .description').fadeOut('fast');
    $('#project1').animate({height:'273px'}, 400);
  }

  function showPr2(){
    $('#project2').animate({height:'380px'}, 400);
    $('#project2 .description').delay(400).fadeIn('fast');
  }

  function hidePr2(){
    $('#project2 .description').fadeOut('fast');
    $('#project2').animate({height:'273px'}, 400);
  }

  function showPr3(){
    $('#project3').animate({height:'380px'}, 400);
    $('#project3 .description').delay(400).fadeIn('fast');
  }

  function hidePr3(){
    $('#project3 .description').fadeOut('fast');
    $('#project3').animate({height:'273px'}, 400);
  }

  function showPr4(){
    $('#project4').animate({height:'380px'}, 400);
    $('#project4 .description').delay(400).fadeIn('fast');
  }

  function hidePr4(){
    $('#project4 .description').fadeOut('fast');
    $('#project4').animate({height:'273px'}, 400);
  }

  function showPr5(){
    $('#project5').animate({height:'380px'}, 400);
    $('#project5 .description').delay(400).fadeIn('fast');
  }

  function hidePr5(){
    $('#project5 .description').fadeOut('fast');
    $('#project5').animate({height:'273px'}, 400);
  }

  function showPr6(){
    $('#project6').animate({height:'380px'}, 400);
    $('#project6 .description').delay(400).fadeIn('fast');
  }

  function hidePr6(){
    $('#project6 .description').fadeOut('fast');
    $('#project6').animate({height:'273px'}, 400);
  }

})();
