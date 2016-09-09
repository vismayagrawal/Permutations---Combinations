var templete = '';
var textT=["a","b","c"];
for (var i = 0; i < 3; i++) {
	templete += '<div><h1>'+ textT[i] +'</h1><input maxlength="1" id="'+ textT[i] +'"placeholder="Single Digit No."></div>'
};
templete +="<div><h1>N</h1><input type='number' maxlength='9' id='n' placeholder='No.'></div>"
document.getElementById('allInput').innerHTML = templete;
function constant(){
	$a = document.getElementById('a').value;
	$b = document.getElementById('b').value;
	$c = document.getElementById('c').value;
	$n = document.getElementById('n').value;
	$me = document.getElementById('showme');
}
function impress1() {
	constant();
	if ($a == '' || $b == ''|| $c == ''|| $n == '') {
		$me.innerHTML = "Please give all input";
	}else if ($a == b || $a == c || $b==c) {
		$me.innerHTML = "Please Don't repeat no.";
	}else if ($a.length >1 || $b.length>1 || $c.length>1) {
		$me.innerHTML = "Please Single Digit";
	}else if ($n==0) {
		$me.innerHTML = "N Must be more than 0";
	}else if ($n==1) {
		$me.innerHTML = $a + "," + $b + "," + $c;
	}
	else{
		impress2($a,$b,$c,$n);
	}
}
function refresh(){
	document.getElementById('a').value = "";
	document.getElementById('b').value = "";
	document.getElementById('c').value = "";
	document.getElementById('n').value = "";
}
$p=3;
$p1=0;
function impress2(a,b,c,n){
	$finalRound = new Array();
	$number = [a,b,c];
	$k=0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j <3; j++) {
			$finalRound[$k++] = $number[i] + "" + $number[j];
			// 11,12,13,21,22,23,31,32,33
		};
	};
	$me.innerHTML ='Total:' + $finalRound.length + '</br></br>' + $finalRound.toString();
	
	if (n>2) {impress3(n-2);};
}
function impress3(n){
	if (n!=0) {
		if (n==1) {
			$finalRound2 = new Array();
			if ($p==3) {
				$p = 3*$p;
			}
			else{
				$p = $p - $p6;
			}
			$p5=0;
			for (var i = 0; i < 3; i++) {
				$p2=$p1;
				for (var j = 0; j < $p; j++) {
					$finalRound2[$p5++] = $number[i] + "" + $finalRound[$p2++];
				};
			}
			$me.innerHTML ='Total:' + $finalRound2.length + '\n' + $finalRound2.toString();
			$p=3;
			$p1=0;
		}else{
			if ($p == 3) {
				$p=$p*3;
				$p3=$p;
				$p6 = $p;
			}else{
				$p3=$p-$p6;
				$p6 = $p;
			}

			for (var i = 0; i < 3; i++) {
				$p2=$p1;
				for (var j = 0; j < $p3; j++) {
					$finalRound[$p++] = $number[i] + "" + $finalRound[$p2++];
				};
			}
			$p1 = $p6;
			
			console.log($finalRound.toString());
			console.log($finalRound.length);
			impress3(n-1);
		}
	};
}