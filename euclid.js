//solution to challenge explained here: http://suchisthepowerofjs.com/2014/11/02/ready-for-hackreactor/
//see app in action here: edulisgardens.com/projects/euclid.html

var merge = function(array1, array2, callback){ 

    var mergedArr = [];
  
  	for(var i = 0; i<array1.length; i++){
  		mergedArr.push(callback(array1[i], array2[i]));
  	
  }

  return mergedArr;

};

var euclid = function(coords1, coords2){
	var squaredDeltas = merge(coords1, coords2, function(a,b){
		return Math.abs((a-b)*(a-b));
	});

	var answer = Math.sqrt(squaredDeltas[0] + squaredDeltas[1]);

	return answer;
};
