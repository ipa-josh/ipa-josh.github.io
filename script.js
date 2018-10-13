var n = 24;
var today = checkTime();
var lookup=[];
for(var i=1; i<=n; ++i)
	lookup.push(i);

var content=[];

/*
2: 1. Advent
6: Nikolaus
9: 2. Advent
16: 3. Advent
23: 4. Advent
24: Heilig Abend
*/
content[1] = "Lass dich überraschen, was noch alles kommt! &#128562;";
content[2] = "Ist heute nicht der erste Advent?<br />Frag mich doch mal ob ich etwas für dich habe";

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.abs(Math.sin(i)) * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

lookup = shuffle(lookup);

function openDoor(t){
	// Clicked door's day
	var day = parseInt(t.split("_")[1])

	// If it's not the day yet - don't open
	if(today>=day) $("#"+t).toggleClass("opendoor")
	else alert("meep");

	$("#spruch").html(content[day]).fadeIn(3000);
}

function checkTime(t){
	return (new Date()).getUTCDate();
}

function createCalendar(){
	for(var ii=0; ii<n; ii++){
		var i = lookup[ii];
		
		var door = "<div class='day'>";
		var add = "";

		// Load content only if day is there yet
				
		if(i>today) 
		{
			door += "<div id='content_" + i + "' class='content' style='background-image:url(http://officialhuskylovers.com/wp-content/uploads/2015/03/Are-you-Serious.jpg)'></div>"
		}
		else
		{
			add += "onclick='openDoor(this.id)'";
			door += "<div id='content_" + i + "' class='content' style='background-image:url(http://ak-hdl.buzzfed.com/static/2013-11/enhanced/webdr01/11/11/enhanced-buzz-628-1384188929-1.jpg)'></div>"
		}
				
		// Door
		door += "<div id='tuer_" + i + "' class='tuerchen' "+add+">"+
				"<p>" + i + "</p>"+
				"</div>" +
			"</div>";

		$("body").append(door)
	}
}

$(document).ready(function() {
	$("#spruch").hide();
	
	console.log(today)
	createCalendar()
	

})