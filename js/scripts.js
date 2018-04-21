var drawTree = 20;
var i = 1;
while (i < drawTree) {	
	var space2 = "";
	var space3 = " ";
	for (k=drawTree; k>i; k = k-2) {
		space2 += space3;
	}
	var star = "";
	var space = "*";		
	for (j=0; j<i; j++) {		
		star += space;	
	} 
console.log(space2 += star);
i = i+2; 
}



