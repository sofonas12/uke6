// oppgave 1
function print(begin, end){ 
    if(begin%2 === 0){ 
        begin++; 
    } 
    for(var i=begin; i<=end; i++){ 
        console.log(i); 
    } 
} 
 
print(1,50); 

// oppgave 2

function sofi(begin, end){ 
    if(begin%2 === 1){ 
        begin++; 
    } 
    for(var i=begin; i<=end; i=i+2){ 
        console.log(i); 
    } 
} 
 
sofi(1,50); 

// oppgave 3

for (let i = 1; i < 101; i++) {
    if (i%3==0 && i%5==0) {
        console.log(i);
    }
    
}

// oppgave 4
for (var i = 1; i <= 101; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }

// oppgave 5
  for(num = 6; num > 0 ; num--)
    document.write("<h"+num+">" + "Røyken vgs er best.");
    document.write(`<h${test} +num+>${text}</h${test}>`);


