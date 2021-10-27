
function table() {
  var horStart = (document.getElementById('horStart').value);
  var horEnd = (document.getElementById('horEnd').value);
  var vertStart = (document.getElementById('verStart').value);
  var vertEnd = (document.getElementById('verEnd').value);
  if(horStart < -50){
   horStart=-50;
   alert("Enter Between -50 and 50");
    return;
  }
  if(horEnd > 50){
    horEnd=50;
    alert("Enter Between -50 and 50");
    return;
  }
  if(vertStart < -50){
    vertStart=-50;
    alert("Enter Between -50 and 50");
    return;
  }
  if(vertEnd > 50){
    vertEnd=50;
    alert("Enter Between -50 and 50");
    return;
  }
  //https://stackoverflow.com/questions/27681838/create-table-with-javascript-array-and-object
  //I based my matric calc off this
  var matrix = {};
  var rows = Math.abs(horEnd - horStart);
  var columns = Math.abs(vertEnd - vertStart);
  var horTemp = horStart;
  var verTemp = vertStart;
  for (var x = 0; x <= columns; x++) {
    var arrTemp = [];
    for (var y = 0; y <= rows; y++) {
      var calc = horTemp * verTemp;
      arrTemp[y] = calc;
      horTemp++;
    }
    matrix["row" + x] = arrTemp;
    horTemp = horStart;        
    verTemp++;
  }
  //update each element
  //Used this to basis for my table: http://www.w3schools.com/html/html_tables.asp
  var content = "";
  content += "<table>";
  content += "<tr>";
  content += "<td></td>"
  for (var t = horStart; t <= horEnd; t++) {
    content += "<td>" + t + "</td>";
  }
  content += "</tr>";
  for (var x = 0; x <= columns; x++) {
    content += "<tr><td>" + vertStart + "</td>";
    for (var y = 0; y <= rows; y++) {
      content += "<td>" + matrix["row" + x][y] + "</td>";
    }
    vertStart++;
    content += "</tr>";
  }
  content += "</table>";
  $("#multTable").html(content);
}