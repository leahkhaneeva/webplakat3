$(document).ready(function(){
  $(".hair").click(function(){
    if ($(".hair").hasClass("three")){
      $(".hair").addClass("one");
      $(".hairv").addClass("pur");
      setTimeout(function(){
        $(".hair").removeClass("three");
      $(".hairv").removeClass("green");
    }, 100);
    } else if ( $(".hair").hasClass("two")){
      $(".hair").addClass("three");
      $(".hairv").addClass("green");
      setTimeout(function(){
        $(".hair").removeClass("two");
        $(".hairv").removeClass("pinkk");
    }, 100);
    } else if ( $(".hair").hasClass("one")){
      $(".hair").addClass("two");
      $(".hairv").addClass("pinkk");
      setTimeout(function(){
        $(".hair").removeClass("one");
      $(".hairv").removeClass("pur");
    }, 100);
    };
  });
});


$(document).ready(function(){
  $(".face").click(function(){
    if ($(".face").hasClass("tri")){
      $(".face").addClass("odin");
      $(".faceval").addClass("kvadrat");
      setTimeout(function(){
        $(".face").removeClass("tri");
        $(".faceval").removeClass("krkvadrat");
      }, 100);
    } else if ( $(".face").hasClass("dva")){
      $(".face").addClass("tri");
      $(".faceval").addClass("krkvadrat");
      setTimeout(function(){
        $(".face").removeClass("dva");
        $(".faceval").removeClass("kruzhok");
      }, 100);
    } else if ( $(".face").hasClass("odin")){
      $(".face").addClass("dva");
      $(".faceval").addClass("kruzhok");
      setTimeout(function(){
        $(".face").removeClass("odin");
        $(".face").removeClass("kvadrat");
      }, 100);
    };
  });
});


$(document).ready(function(){
  $(".leye").click(function(){
    if ($(".leye").hasClass("tres")){
      $(".leye").addClass("uno");
      $(".valleye").addClass("perv");
      setTimeout(function(){
        $(".leye").removeClass("tres");
        $(".valleye").removeClass("tret");
      }, 100);
    } else if ( $(".leye").hasClass("dos")){
      $(".leye").addClass("tres");
      $(".valleye").addClass("tret");
      setTimeout(function(){
        $(".leye").removeClass("dos");
        $(".valleye").removeClass("vtor");
      }, 100);
    } else if ( $(".leye").hasClass("uno")){
      $(".leye").addClass("dos");
      $(".valleye").addClass("vtor");
      setTimeout(function(){
        $(".leye").removeClass("uno");
        $(".valleye").removeClass("perv");
      }, 100);
      $(".cross").css('display', 'none');
      $(".bubble1").css('display', 'none');
    };
  });
});


$(document).ready(function(){
  $(".nose").click(function(){
    if ($(".nose").hasClass("c")){
      $(".nose").addClass("a");
      $(".valnos").addClass("noz");
      setTimeout(function(){
        $(".nose").removeClass("c");
        $(".valnos").removeClass("nozzz");
      }, 100);
    } else if ( $(".nose").hasClass("b")){
      $(".nose").addClass("c");
      $(".valnos").addClass("nozzz");
      setTimeout(function(){
        $(".nose").removeClass("b");
        $(".valnos").removeClass("nozz");
      }, 100);
    } else if ( $(".nose").hasClass("a")){
      $(".nose").addClass("b");
      $(".valnos").addClass("nozz");
      setTimeout(function(){
        $(".nose").removeClass("a");
        $(".valnos").removeClass("noz");
      }, 100);
    };
  });
});

$(document).ready(function(){
  $(".reye").click(function(){
    if ($(".reye").hasClass("cc")){
      $(".reye").addClass("aa");
      $(".valreye").addClass("gl");
      setTimeout(function(){
        $(".reye").removeClass("cc");
        $(".valreye").removeClass("glaz");
      }, 100);
    } else if ( $(".reye").hasClass("bb")){
      $(".reye").addClass("cc");
      $(".valreye").addClass("glaz");
      setTimeout(function(){
        $(".reye").removeClass("bb");
        $(".valreye").removeClass("gla");
      }, 100);
    } else if ( $(".reye").hasClass("aa")){
      $(".reye").addClass("bb");
      $(".valreye").addClass("gla");
      setTimeout(function(){
        $(".reye").removeClass("aa");
        $(".valreye").removeClass("gl");
      }, 100);
    };
  });
});

$(document).ready(function(){
  $(".body").click(function(){
    if ($(".body").hasClass("f")){
      $(".body").addClass("d");
      $(".valshirt").addClass("rose");
      setTimeout(function(){
        $(".body").removeClass("f");
        $(".valshirt").removeClass("fiol");
      }, 100);
    } else if ( $(".body").hasClass("e")){
      $(".body").addClass("f");
      $(".valshirt").addClass("fiol");
      setTimeout(function(){
        $(".body").removeClass("e");
        $(".valshirt").removeClass("zel");
      }, 100);
    } else if ( $(".body").hasClass("d")){
      $(".body").addClass("e");
      $(".valshirt").addClass("zel");
      setTimeout(function(){
        $(".body").removeClass("d");
        $(".valshirt").removeClass("rose");
      }, 100);
    };
  });
});


$(document).ready(function(){
  $(".lhand").click(function(){
    if ($(".lhand").hasClass("i")){
      $(".lhand").addClass("g");
      $(".valruka").addClass("pra");
      setTimeout(function(){
        $(".lhand").removeClass("i");
        $(".valruka").removeClass("pravaya");
      }, 100);
    } else if ( $(".lhand").hasClass("h")){
      $(".lhand").addClass("i");
      $(".valruka").addClass("pravaya");
      setTimeout(function(){
        $(".lhand").removeClass("h");
        $(".valruka").removeClass("prava");
      }, 100);
    } else if ( $(".lhand").hasClass("g")){
      $(".lhand").addClass("h");
      $(".valruka").addClass("prava");
      setTimeout(function(){
        $(".lhand").removeClass("g");
        $(".valruka").removeClass("pra");
      }, 100);
    };
  });
});
$(document).ready(function(){
  $(".rhand").click(function(){
    if ($(this).hasClass("l")){
      $(this).addClass("j");
      setTimeout(function(){
        $(".rhand").removeClass("l");
      }, 100);
    } else if ( $(this).hasClass("k")){
      $(this).addClass("l");
      setTimeout(function(){
        $(".rhand").removeClass("k");
      }, 100);
    } else if ( $(this).hasClass("j")){
      $(this).addClass("k");
      setTimeout(function(){
        $(".rhand").removeClass("j");
      }, 100);
    };
  });
});


$(document).ready(function(){
  $(".pants").click(function(){
    if ($(".pants").hasClass("v")){
      $(".pants").addClass("z");
      $(".valpants").addClass("tr");
      setTimeout(function(){
        $(".pants").removeClass("v");
        $(".valpants").removeClass("trusi");
      }, 100);
    } else if ( $(".pants").hasClass("r")){
      $(".pants").addClass("v");
      $(".valpants").addClass("trusi");
      setTimeout(function(){
        $(".pants").removeClass("r");
        $(".valpants").removeClass("tru");
      }, 100);
    } else if ( $(".pants").hasClass("z")){
      $(".pants").addClass("r");
      $(".valpants").addClass("tru");
      setTimeout(function(){
        $(".pants").removeClass("z");
        $(".valpants").removeClass("tr");
      }, 100);
    };
  });
});


$(document).ready(function(){
  $(".lleg").click(function(){
    if ($(".lleg").hasClass("circ")){
      $(".lleg").addClass("sq");
      $(".vallleg").addClass("ugl");
      setTimeout(function(){
        $(".lleg").removeClass("circ");
        $(".valleg").removeClass("skru");
      }, 100);
    } else if ( $(".lleg").hasClass("sq")){
      $(".lleg").addClass("circ");
      $(".valleg").addClass("skru");
      setTimeout(function(){
        $(".lleg").removeClass("sq");
        $(".valleg").removeClass("ugl");
      }, 100);
    };
  });
});

$(document).ready(function(){
  $(".rleg").click(function(){
    if ($(".rleg").hasClass("kr")){
      $(".rleg").addClass("kv");
      $(".vallegg").addClass("uglo");
      setTimeout(function(){
        $(".rleg").removeClass("kr");
        $(".vallegg").removeClass("skrug");
      }, 100);
    } else if ( $(".rleg").hasClass("kv")){
      $(".rleg").addClass("kr");
      $(".vallegg").addClass("skrug");
      setTimeout(function(){
        $(".rleg").removeClass("kv");
        $(".vallegg").removeClass("uglo");
      }, 100);
    };
  });
});



$(document).ready(function(){
  $(".nail").click(function(){
    if ($(".nail").hasClass("trii")){
      $(".nail").addClass("razz");
      $(".valnail").addClass("ta");
      setTimeout(function(){
        $(".nail").removeClass("trii");
        $(".valnail").removeClass("koi");
      }, 100);
    } else if ( $(".nail").hasClass("dvaa")){
      $(".nail").addClass("trii");
      $(".valnail").addClass("koi");
      setTimeout(function(){
        $(".nail").removeClass("dvaa");
        $(".valnail").removeClass("ko");
      }, 100);
    } else if ( $(".nail").hasClass("razz")){
      $(".nail").addClass("dvaa");
      $(".valnail").addClass("ko");
      setTimeout(function(){
        $(".nail").removeClass("razz");
        $(".valnail").removeClass("ta");
      }, 100);
    };
  });
});

$(document).ready(function(){
  $(".naill").click(function(){
    if ($(".naill").hasClass("trois")){
      $(".naill").addClass("un");
      $(".valnaill").addClass("la");
      setTimeout(function(){
        $(".naill").removeClass("trois");
        $(".valnaill").removeClass("lu");
      }, 100);
    } else if ( $(".naill").hasClass("deux")){
      $(".naill").addClass("trois");
      $(".valnaill").addClass("lu");
      setTimeout(function(){
        $(".naill").removeClass("deux");
        $(".valnaill").removeClass("lo");
      }, 100);
    } else if ( $(".naill").hasClass("un")){
      $(".naill").addClass("deux");
      $(".valnaill").addClass("lo");
      setTimeout(function(){
        $(".naill").removeClass("un");
        $(".valnaill").removeClass("la");
      }, 100);
    };
  });
});


$(document).ready(function(){
  $(".nailll").click(function(){
    if ($(".nailll").hasClass("tr")){
      $(".nailll").addClass("ra");
      (".valnailll").addClass("li");
      setTimeout(function(){
        $(".nailll").removeClass("tr");
        $(".valnailll").removeClass("loo");
      }, 100);
    } else if ( $(".nailll").hasClass("dv")){
      $(".nailll").addClass("tr");
      $(".nvalailll").addClass("loo");
      setTimeout(function(){
        $(".nailll").removeClass("dv");
        $(".valnailll").removeClass("le");
      }, 100);
    } else if ( $(".nailll").hasClass("ra")){
      $(".nailll").addClass("dv");
      $(".valnailll").addClass("le");
      setTimeout(function(){
        $(".nailll").removeClass("ra");
        $(".valnailll").removeClass("li");
      }, 100);
    };
  });
});


$(document).ready(function(){
  $(".rnail").click(function(){
    if ($(".rnail").hasClass("triii")){
      $(".rnail").addClass("razzz");
      $(".valnail").addClass("ba");
      setTimeout(function(){
        $(".rnail").removeClass("triii");
        $(".lvalnail").removeClass("bi");
      }, 100);
    } else if ( $(".rnail").hasClass("dvaaa")){
      $(".rnail").addClass("triii");
      $(".lvalnail").addClass("bi");
      setTimeout(function(){
        $(".rnail").removeClass("dvaaa");
        $(".lvalnail").removeClass("bo");
      }, 100);
    } else if ( $(".rnail").hasClass("razzz")){
      $(".rnail").addClass("dvaaa");
      $(".lvalnail").addClass("bo");
      setTimeout(function(){
        $(".rnail").removeClass("razzz");
        $(".lvalnail").removeClass("ba");
      }, 100);
    };
  });
});


$(document).ready(function(){
  $(".rnaill").click(function(){
    if ($(".rnaill").hasClass("troiss")){
      $(".rnaill").addClass("unn");
      $(".llvalnail").addClass("ha");
      setTimeout(function(){
        $(".rnaill").removeClass("troiss");
        $(".llvalnail").removeClass("hi");
      }, 100);
    } else if ( $(".rnaill").hasClass("deuxx")){
      $(".rnaill").addClass("troiss");
      $(".llvalnail").addClass("hi");
      setTimeout(function(){
        $(".rnaill").removeClass("deuxx");
        $(".llvalnail").removeClass("ho");
      }, 100);
    } else if ( $(".rnaill").hasClass("unn")){
      $(".rnaill").addClass("deuxx");
      $(".llvalnail").addClass("ho");
      setTimeout(function(){
        $(".rnaill").removeClass("unn");
        $(".llnail").removeClass("ha");
      }, 100);
    };
  });
});

$(document).ready(function(){
  $(".rnailll").click(function(){
    if ($(".rnailll").hasClass("trr")){
      $(".rnailll").addClass("raa");
      $(".lllvalnail").addClass("ka");
      setTimeout(function(){
        $(".rnailll").removeClass("trr");
        $(".lllvalnail").removeClass("ki");
      }, 100);
    } else if ( $(".rnailll").hasClass("dvv")){
      $(".rnailll").addClass("trr");
      $(".lllvalnail").addClass("ki");
      setTimeout(function(){
        $(".rnailll").removeClass("dvv");
        $(".lllvalnail").removeClass("ko");
      }, 100);
    } else if ( $(".rnailll").hasClass("raa")){
      $(".rnailll").addClass("dvv");
      $(".lllvalnail").addClass("ko");
      setTimeout(function(){
        $(".rnailll").removeClass("raa");
        $(".lllvalnail").removeClass("ka");
      }, 100);
    };
  });
});




$(document).ready(function(){
$(".mouth4").click(function(){
  $(this).toggleClass("mouth42");
});
});

$(document).ready(function(){
$(".cross").click(function(){
$(this).css('display', 'none');
$(".bubble1").css('display', 'none');
});
});

$( function() {
$( ".dot1, .dot2, .dot3, .dot4, .dot5, .dot6" ).draggable({ containment: ".body", scroll: false });
} );


$(".dot1, .dot2, .dot3, .dot4, .dot5, .dot6").draggable({
containment: ".body",
stop: function () {
    var l = ( 100 * parseFloat($(this).position().left / parseFloat($(this).body().width())) ) + "%" ;
    var t = ( 100 * parseFloat($(this).position().top / parseFloat($(this).body().height())) ) + "%" ;
    $(this).css("left", l);
    $(this).css("top", t);
}
});


$(window).scroll(function() {
let krug = $(window).scrollTop() / 1.6;

$('.button1').css({ transform: 'rotate(' + krug + 'deg)' });
$('.button2').css({ transform: 'rotate(' + krug + 'deg)' });
});

$(document).ready(function(){
$(".fin, .pfin").click(function(){
$(".screen1").css('display', 'none');
$(".screen2").css('display', 'block');
$("body").css({
height: '100vh',
overflow: 'hidden'
});


});
});
