// https://www.youtube.com/watch?v=xNSQ3i-BWMo
//we are using jquery here
//From HW3 but updated to work better
function validate() {
  $("#data_form").validate({
    rules: {
      startX: {
          required: true,
          integer: true,
          range: [-50, 50]
      },
      endX: {
          required: true,
          integer: true,
          range: [-50, 50]
      },
      startY: {
          required: true,
          integer: true,
          range: [-50, 50]
      },
      endY: {
          required: true,
          integer: true,
          range: [-50, 50]
      }
  },
    messages: {
      startX: {
          required: 'Please enter a value',
          range: 'Please enter a number from [-50,50]'
      },
      startY: {
          required: 'Please enter a value',
          range: 'Please enter a number from [-50,50]'
      },
      endX: {
          required: 'Please enter a value',
          range: 'Please enter a number from [-50,50]'
      },
      endY: {
          required: 'Please enter a value',
          range: 'Please enter a number from [-50,50]'
      },
  },
    submitHandler: function() {
      buildTable();
      return false;
    },
   
  });
}
//Found Useful
//https://www.tutorialspoint.com/jqueryui/jqueryui_slider.htm
function slider() {
  $("#sliderstartX").slider({
    min: -50, //set slider min
    max: 50, //set slider max
    slide: function(event, ui) { 
      $("#startX").val(ui.value);
      if( $("form#data_form").valid() == true ) {//see if valid and then submit
        $("form#data_form").submit();
      }
    }
  });
  $("#sliderendX").slider({
    min: -50,
    max: 50,
    slide: function(event, ui) {
      $("#endX").val(ui.value);
      if( $("form#data_form").valid() == true ) {
        $("form#data_form").submit();
      }  
    }
  });
  $("#sliderstartY").slider({
    min: -50,
    max: 50,
    slide: function(event, ui) {
      $("#startY").val(ui.value);
      if( $("form#data_form").valid() == true ) {
        $("form#data_form").submit();
      } 
    }
  });
  $("#sliderendY").slider({
    min: -50,
    max: 50,
    slide: function(event, ui) {
      $("#endY").val(ui.value);
      if( $("form#data_form").valid() == true ) {
        $("form#data_form").submit();
      };  
    }
  });
}
//Modifed HW3
function buildTable() {
  var matrix = {};
  var tempArray;
  var xStart = parseFloat(document.getElementById('startX').value);
  var xEnd = parseFloat(document.getElementById('endX').value);
  var yStart = parseFloat(document.getElementById('startY').value);
  var yEnd = parseFloat(document.getElementById('endY').value);
  if (xStart > xEnd) {//stop table from breaking
    var swap = xStart;
    xStart = xEnd;
    xEnd = swap;
  }
  var tempxStart = xStart;
  var tempyStart = yStart;
    // builds the table, once done replace the orginal code
    //from HW3
    //calculate the temp array with data
  for (var x = 0; x <= Math.abs(yEnd - yStart); x++) {
     tempArray = [];
    for (var y = 0; y <= Math.abs(xEnd - xStart); y++) {
      var calc = tempxStart * tempyStart;
      tempArray[y] = calc;
      tempxStart++;
    }
    //fill matrix with temparray data
    matrix["row" + x] = tempArray;
    tempxStart = xStart;        
    tempyStart++;
  }
  //get formatting setup
  //https://stackoverflow.com/questions/51342022/how-to-display-a-multiplication-table-from-inputted-row-and-column-in-jquery
  //Used this with HW3 code to generate table
  var tempData = "<table>";
  tempData += "<tr><td></td>";
  for (var formatIndex = xStart; formatIndex <= xEnd; formatIndex++) {
    tempData += "<td>" + formatIndex + "</td>";
  }
  tempData += "</tr>";
  var tempyStart = yStart;
  //finish formatting setup
  for (var arrayx = 0; arrayx <= Math.abs(yEnd - yStart); arrayx++) {
    tempData += "<tr><td>" + tempyStart + "</td>";
    for (var arrayy = 0; arrayy <= Math.abs(xEnd - xStart); arrayy++) {
      tempData += "<td>" + matrix["row" + arrayx][arrayy] + "</td>";
    }
    tempyStart++;
    tempData += "</tr>";
  }
  //set the temp data
  tempData += "</table>";
  //update inner HTML
  document.getElementById("table").innerHTML = tempData;
  return false;
}