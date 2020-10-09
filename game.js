var colors=generateRandomcolor(6);
a="correct";
b="try again";
var squares=document.querySelectorAll(".square");
pickedcolor=pickcolor();
var colorDisplay=document.querySelector("#square");
var resetbutton=document.querySelector("#but");
var easy=document.querySelector("#but1");
var hard=document.querySelector("#but2");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
colorDisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
squares[i].style.backgroundColor=colors[i];
squares[i].addEventListener("click",function(){
var clickedcolor=this.style.backgroundColor;
console.log(pickedcolor);
console.log(clickedcolor);
if(clickedcolor===pickedcolor)
{
messageDisplay.textContent=a;
changeColor(clickedcolor);
h1.style.backgroundColor=clickedcolor;
resetbutton.textContent="play again?";
}
else
{
messageDisplay.textContent=b;
this.style.backgroundColor="#232323"
	
}
	}

	);
}

easy.addEventListener("click",function()
{
	easy.classList.add("selected")
	hard.classList.remove("selected")
	
	colors=generateRandomcolor(3);
	pickedcolor=pickcolor()
	colorDisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.backgroundColor="none";
		}
	}
	document.querySelectorAll(".square")[3].style.display="none";
	document.querySelectorAll(".square")[4].style.display="none";
	document.querySelectorAll(".square")[5].style.display="none";
		resetbutton.addEventListener("click",function()
	{
		colors=generateRandomcolor(3);
		pickedcolor=pickcolor()
		colorDisplay.textContent=pickedcolor;
		h1.style.backgroundColor="steelblue"
		resetbutton.textContent="NEW colors"

		for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}	
	});

	
});
hard.addEventListener("click",function()
{
	easy.classList.remove("selected")
	hard.classList.add("selected")
	
	colors=generateRandomcolor(6);
	pickedcolor=pickcolor()
	colorDisplay.textContent=pickedcolor;
	h1.style.backgroundColor="steelblue";
	document.querySelectorAll(".square")[3].style.display="block";
	document.querySelectorAll(".square")[4].style.display="block";
	document.querySelectorAll(".square")[5].style.display="block";
	

	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}	
	resetbutton.addEventListener("click",function()
	{
		colors=generateRandomcolor(6);
		pickedcolor=pickcolor()
		colorDisplay.textContent=pickedcolor;
		h1.style.backgroundColor="steelblue"
		resetbutton.textContent="NEW colors"
		for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}	
	});

});

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function generateRandomcolor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(Randomcolor())
	}
	return arr;
}
function Randomcolor()
{
	var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    return "rgb("+r+", "+g+", "+b+")"
}
function pickcolor()
{
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}