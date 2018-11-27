let text = "";
let op1 = "";
let op2 = "";

function zero()
{
	text = text + "0";
	document.getElementById("res").innerHTML = text;
}

function one()
{
	text = text + "1";
	document.getElementById("res").innerHTML = text;
}

function add()
{
	text = text + "+";
	document.getElementById("res").innerHTML = text;
}

function sub()
{
	text = text + "-";
	document.getElementById("res").innerHTML = text;
}

function mul()
{
	text = text + "*";
	document.getElementById("res").innerHTML = text;
}

function div()
{
	text = text + "/";
	document.getElementById("res").innerHTML = text;
}

function clearText()
{
	document.getElementById("res").innerHTML = "";
	text = "";
	op1 = "";
	op2 = "";
}

function result()
{
	let arr = text.split("");
	let op1 = "";
	let op2 = "";
	let operand = "";
	let i, j;
	for(i=0; i<arr.length; i++)
	{
		if(arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/')
		{
			operand = arr[i];
			i++;
			break;
		}
		op1 = op1 + arr[i];
	}
	for(j=i; j<arr.length; j++)
	{
		op2 = op2 + arr[j];
	}
	let num1 = parseInt(op1, 2);
	let num2 = parseInt(op2, 2);
	let res = 0;
	if(operand==='+')
		res = num1 + num2;
	if(operand==='-')
		res = num1 - num2;
	if(operand==='*')
		res = num1 * num2;
	if(operand==='/')
		res = num1 / num2;	
	function dec2bin(dec){
		return (dec >>> 0).toString(2);
	}
	document.getElementById("res").innerHTML = dec2bin(res);
}
