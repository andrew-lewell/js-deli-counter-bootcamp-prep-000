function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

var lineNumber = 0

function takeANumber(line) {
  lineNumber++;
  line.push(lineNumber);
  return `Welcome, you have ticket number ${lineNumber}.`;
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var str = "The line is currently:";
  
  if (line.length < 1) {
    return "The line is currently empty."; 
  } else {
    for (var i = 0; i < line.length; i++) {
      str = str + ` ${i+1}. ${line[i]},`;
    }
  }
  
  str = str.substring(0, str.length -1);
  return str;
}