function runProgram(input) {
 input = input.trim();
 input=input.split("\n");
 var tc=+input[0];
 var line=1;
 for(var i=0;i<tc;i++){
     var n = +input[line];
     line++;
     var arr=[];
     for(var r=0;r<n;r++){
         arr.push(input[line].trim());
         line++;
     }
     
     var x=0;
     var y=0;
     var step=0; 
     for(j=0;j<n*n;j++){
         if(x<0||y<0){
             break;
         }
         if(arr[x][y]=="R"){
             y++;
             step++;
         }else if(arr[x][y]=="L"){
             y--;
             step++;
         }else if(arr[x][y]=="D"){
            x++;
            step++;
        }else if(arr[x][y]=="U"){
            x--;
            step++;
        }
        if(step==n*n){
            step=0;
            break;
        }
     }
     n==1?console.log(1):console.log(step);
 }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

