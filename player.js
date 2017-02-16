$(document).ready(function() {
    // Instantiate jwplayer
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

    // hop;
    hours;
    minutes;
    seconds;











    $("#play").on("click", function(){
        jwplayer("SDMPlayer").play();
    });

    $("#pause").on("click", function(){
        jwplayer("SDMPlayer").pause();
    });
});


// var hop = $("#add-chapter").on("click", function(){
//         jwplayer("SDMPlayer").seek(20);
//     });


// hours
var hours = $(function() {
  var $timeHours = $("#chapter-timing-hours");
  for (var i = 00; i <= 3; i++) {
    $timeHours.append($('<option></option>').val(i).html(i));
  }
});
//minutes
var minutes = $(function() {
  var $timeMinutes = $("#chapter-timing-minutes");
  for (var i = 0; i <= 59; i++) {
    $timeMinutes.append($('<option></option>').val(i).html(i))
  }
});
// seconds
var seconds = $(function() {
  var $timeSeconds = $("#chapter-timing-seconds");
  for (var i = 0; i <= 59; i++) {
    $timeSeconds.append($('<option></option>').val(i).html(i))
  }
});


// add new chapter
var video = jwplayer("SDMPlayer");
var addChapter = document.getElementById('add-chapter');

addChapter.addEventListener("click", function() {
  var name = document.getElementById('chapter-name').value;
  console.log(name);
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
  // } else if (time > video.getDuration()) {
  //   alert("This video is not long enough!");
    // time validation
  } else if ((parseInt($Seconds)) == 0) {
    alert("Seconds can't be equal to 0!");
  } else {
    var nameid = name.replace(/\s+/g, "-");
    $('#new-chapter').append('<button id=' + nameid + '>' + name + '</button>' + time + 'sec');
    $('#' + nameid).click(function() {
      video.seek(time);
      event.preventDefault();
    });
  };
});











