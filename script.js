var n = 24;
var today = checkTime();
var lookup=[];
for(var i=1; i<=n; ++i)
	lookup.push(i);

var content=[];

/*
2: 1. Advent (Fitness Kekse: https://www.chefkoch.de/rezepte/2952191447509073/Fitness-Eiweiss-Schoko-Cookies.html)
6: Nikolaus (Herz mit Aurorafilme/USB Stick
https://www.zdf.de/dokumentation/dokumentation-sonstige/jagd-nach-dem-himmelsfeuer-dem-104.html
https://www.youtube.com/watch?v=Upe3SVaB270
https://www.youtube.com/watch?v=VQ0drnZpkoc
https://www.arte.tv/de/videos/052707-003-F/expedition-sternenhimmel/
https://www.arte.tv/de/videos/052707-004-F/expedition-sternenhimmel/
)
9: 2. Advent  (Entspannungsbad)
16: 3. Advent (Schlüsselanhänger)
23: 4. Advent (Schlüssel)
24: Heilig Abend (Geschenke)
*/
content[1] = "Lass dich überraschen, was noch alles kommt! &#128562;";
content[2] = "Ist heute nicht der erste Advent?<br />Frag mich doch mal ob ich etwas für dich habe";

content=[
"",
"Lass dich überraschen, was noch alles kommt! &#128562;",
	"Ist heute nicht der erste Advent?<br />Frag mich doch mal ob ich etwas für dich habe",
"Liebe, was du lieben willst",
"Tanze dein Leben",
"Du bist wundervoll.",
	"Heute gibt es eine kleine Überraschung! &#128521;<br />(Schau in deinen Kleiderschrank)",
"Ruf jemanden an, den du magst",
"Liebe beginnt immer bei dir",
	"Bald ist Weihnachten. Lass dich verwöhnen.<br />Das Geschenk kannst du an deinem TV benutzen.",
"Umarme heute einen Baum oder deinen Freund",
"Du bist du",
"Gönne dir Auszeiten!",
"Du bist toll!",
"Du bist einzigartig!",
"Fühle dich geliebt",
	"Jetzt sind wir schon seit über 4 Monaten ein Paar &#128151;",
"Vertraue dir selbst",
"Fahr einmal im Jahr ans Meer",
"Entspanne dich",
"Die Gegenwart ist der Baustein der Zukunft",
"Glaube an das was sich für dich richtig anfühlt",
"Genieße den Augenblick (und heute auch gerne die Aussicht)", //"Erstrebe womit du glücklich wirst",
"Vielleicht brauchst du das noch? &#128521;",
	"Geschenke gibt es erst heute abend &#128513;"
]

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
