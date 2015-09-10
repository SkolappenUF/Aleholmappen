var _x = 0;
var _y = 0;


if (!document.all) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMousePosition;

//document.getElementById("") = getMousePosition;

 var doCloseCheck = true;

 function DisableCloseCheck()
 {
    doCloseCheck = false;	
 }

 function EnableCloseCheck()
 {
   noCloseCheck = false;
 }

 function OnClose()
 {	   
   if (doCloseCheck) 
   {
		// event.returnValue = "Logga ut";
		var sID = document.getElementById("__EVENTTARGET").value;

		if (sID!="")
		{
		
		}
		else 
		{
			//event.returnValue = "Dina lösenord ligger lagrade i nuvarande session. Du bör alltid stänga webbläsar-fönstret efter du tittat på scheman med lösenord.";
			window.open("ClearSession.aspx",null,"width=1,height=1");
		}

		EnableCloseCheck();
	}
 }



function ImmediatePrinting()
		{

			return 0;

			/*if (document.all)
				return 1;
			
			return 0;*/
		}


 function Position(x, y)
 {
  this.X = x;
  this.Y = y;
  return;
 }
   
 
 function PositionCalculator()
 {
  this.GetPosition = GetPosition;
  return;
    
  function GetPosition(obj)
  {
   var x = 0;
   var y = 0;
 
   while (obj)
   {   
    x += obj.offsetLeft;
    y += obj.offsetTop;    
         
    if (obj.tagName!="BODY")
    {    
     x -= obj.scrollLeft;
     y -= obj.scrollTop;
    }
                     
    obj = obj.offsetParent;
 
   }
     
   return new Position(x, y);    
  }
 }
 
 
 
// Anrop !!!!!!!!!!


function resetMousePosition()
{ 
   _x = -1000;
   _y = -1000;
}


function getMousePosition(e) 
{  
  if (document.all)
  {
	_x = event.clientX + document.body.scrollLeft;
    _y = event.clientY + document.body.scrollTop;
  }
  else {
    _x = e.pageX;
    _y = e.pageY;
  } 

  //window.status = _x.toString() + ", " + _y.toString(); 

  return true;
}

var front

function WebViewerSize(n,instant)
{
	var wW,wH;
	var s,s2;
	
	var ctl;
	
	if (document.getElementById)
	{
		ctl = document.getElementById(n+"ImageURL");
	}
	else if (document.layers)
	{
	   ctl = document.forms[0].elements[n+"ImageURL"];
	}
		
	if (!ctl) return;

	s = ctl.value;
	
	if (document.getElementById)
	{		
		if (document.getElementById(n+"ImageElement").offsetWidth)
		{
			wW = document.getElementById(n+"ImageElement").offsetWidth;
			wH = document.getElementById(n+"ImageElement").offsetHeight;
		}
		else
		{
			wW = document.getElementById(n+"ImageElement").Width;
			wH = document.getElementById(n+"ImageElement").Height;
		}	
	}
	else if (document.layers)
	{		
		wW = document.images[n+"ImageElement"].width;
		wH = document.images[n+"ImageElement"].height;
	}
	
	if (wW && wH)
	{
		s2 = "&width="+wW.toString()+"&height="+wH.toString()+"&maxwidth="+wW.toString()+"&maxheight="+wH.toString();
		//alert(s2);		

		if (instant>0)
		{
				if (document.getElementById)
				{
					setTimeout("document.getElementById(\""+n+"ImageElement\").src = \""+s+s2+"\"",instant); 
				}
				else if (document.layers)
				{			
					setTimeout("document.images[\""+n+"ImageElement\"].src = \""+s+s2+"\"",instant); 
				}
		}
		else
		{
			if (document.getElementById)
			{
				document.getElementById(n+"ImageElement").src = s+s2;
			}
			else if (document.layers)
			{			
				document.images[n+"ImageElement"].src = "green.png"; // IMG bug workaround
				document.images[n+"ImageElement"].src = s+s2;
			}
		}	
	}
}