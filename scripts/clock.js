$(document).ready(function () {
  let timeFormat = prompt("Please, choose time format(write 12 or 24):", "12");

  if (timeFormat === "24") {
    $(function currentTime24() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let weekday = date.getDay();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let monNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      hour = hour < 10 ? "" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;

      $("#day").text(day);
      $("#month").text(monNames[month]);
      $("#year").text(year);
      $("#weekday").text(dayNames[weekday]);
      $("#hour").text(hour);
      $("#minute").text(minute);
      $("#second").text(second);

      setTimeout(currentTime24, 1000);
    });
  } else if (timeFormat === "12") {
    $(function currentTime12() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let weekday = date.getDay();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let monNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let period = hour >= 12 ? "pm" : "am";

      hour = hour % 12;
      hour = hour ? hour : "12";
      hour = hour < 10 ? "" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;

      $("#day").text(day);
      $("#month").text(monNames[month]);
      $("#year").text(year);
      $("#weekday").text(dayNames[weekday]);
      $("#hour").text(hour);
      $("#minute").text(minute);
      $("#second").text(second);
      $("#period").text(period);

      setTimeout(currentTime12, 1000);
    });
  } else {
    alert("Wrong value. Please, restart the page.");
  }

  $(function colourChange() {
    $("#colourChange").on("click", function () {
      let colourArray = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "F",
      ];
      let firstHexCode = "";
      let secondHexCode = "";
      let randomNumber = 0;

      for (let i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * colourArray.length);
        firstHexCode += colourArray[randomNumber];
        randomNumber = Math.floor(Math.random() * colourArray.length);
        secondHexCode += colourArray[randomNumber];
      }

      $("body").css(
        "background-image",
        `linear-gradient(to right, #${firstHexCode}, #${secondHexCode}`
      );
    });
  });
});
