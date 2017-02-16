$(document).ready(function() {

    jwplayer("SDMPlayer").setup({
        mediaid: "sherpa-video",
        file: "http://sdmcdn-media-lb01-1526081469.us-west-2.elb.amazonaws.com:1935/mediacache/_definst_/smil:allusstandard/sdm-marketing/2016/testimonials/Mark-Seward-testimonial_short_v2.smil/playlist.m3u8",
        image: "http://cascade.sherpadm.com/cascade/img/video-stills/Mark-Seward-testimonial_still.jpg",
        primary: "html5",
        hlshtml: true,
        aspectratio: "16:9",
        stretching: "uniform",
        wmode: "transparent",
        width: "50%",
        autostart: "false",
        abouttext: 'STREAM by Sherpa Digital Media /// LEARN MORE',
        aboutlink: 'http://www.sherpadigitalmedia.com',
        ga: {
            label: "title",
            idstring: "mediaid",
            trackingobject: "_gaq"
        }
    });

    jwplayer("SDMPlayer").onComplete(function () {
      jwplayer("SDMPlayer").play();
    });

    // I can see the value of var duartion appended to div, but I cannot figure out howe to save it a variable;
    // $("#play").on("click", function(){
    //   jwplayer("SDMPlayer").play();
    //   jwplayer("SDMPlayer").onTime(function(){
    //     var duration = jwplayer("SDMPlayer").getDuration();
    //     $("#durationText").append(duration);
    //   });
    // });
  

    // autoplay while loading tha page th=en pause it.

    // jwplayer("SDMPlayer").play();
    //   $("#durationText").append(jwplayer("SDMPlayer").getState(), jwplayer("SDMPlayer").getDuration())
      
      
    // jwplayer('SDMPlayer').pause();
    //   $("#durationText").append(jwplayer('SDMPlayer').getState(), jwplayer('SDMPlayer').getDuration())

    var duration;
    $("#play").on("click", function(){
      jwplayer("SDMPlayer").play();
      duration = jwplayer("SDMPlayer").getDuration();
      $("#durationText").append(duration);
    });

    $("#pause").on("click", function(){
        jwplayer("SDMPlayer").pause();
    });

});




// hours
var hours = $(function() {
  var $timeHours = $("#chapter-timing-hours");
  for (var i = 1; i <= 3; i++) {
    $timeHours.append($('<option value='+ i +'> 0'+i+'</option>'));
  }
});
//minutes
var minutes = $(function() {
  var $timeMinutes = $("#chapter-timing-minutes");
  for (var i = 1; i <= 9; i++) {
    $timeMinutes.append($('<option value='+ i +'> 0'+i+'</option>'));
  }
  for (var i = 10; i <= 59; i++) {
    $timeMinutes.append($('<option value='+ i +'>'+i+'</option>'));
  }
});
// seconds
var seconds = $(function() {
  var $timeSeconds = $("#chapter-timing-seconds");
  for (var i = 1; i <= 9; i++) {
    $timeSeconds.append($('<option value='+ i +'> 0'+i+'</option>'));
  }
  for (var i = 10; i <= 59; i++) {
    $timeSeconds.append($('<option value='+ i +'>'+i+'</option>'));
  }
});


var addChapter = document.getElementById('add-chapter');
var video = jwplayer('SDMPlayer');

addChapter.addEventListener("click", function() {

  var duration;
    video.load();
    duration = video.getDuration();
    video.play();
    video.pause();
    duration = video.getDuration();
    video.pause();
    $("#durationText").append(duration);

  var name = document.getElementById('chapter-name').value;
    // console.log(name);
  var $Hours = (document.getElementById("hours").value = document.getElementById("chapter-timing-hours").value);
  var $Minutes = (document.getElementById("minutes").value = document.getElementById("chapter-timing-minutes").value);
  var $Seconds = (document.getElementById("seconds").value = document.getElementById("chapter-timing-seconds").value);
  var time = ((parseInt($Hours) * 360) + (parseInt($Minutes) * 60) + (parseInt($Seconds)));

  // name validation
  if ((name == "") || (name.length > 20)) {
    alert("Name can't be blank or longer than 20 characters.");
  } else if (name.match(/^[0-9]/)) {
    alert("Name format is invalid! Name can't start with a digit!");
    // !!!!!!!!!!!
  } else if (time > duration) {
    alert("This video is not long enough!");
    video.stop();
  //   // time validation
  } else if (time == 0) {
    alert("Timing can't be equal to 0!");
  } else {
    var nameid = name.replace(/\s+/g, "-");
    $('#new-chapter').append('<button id=' + nameid + '>' + name + '</button>' + time + 'sec' + '<br>');
    $('#' + nameid).click(function() {
      video.seek(time);
      event.preventDefault();
    });
  };
});











