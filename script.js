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
"Lass dich überraschen, was noch alles kommt! &#128562;<br><br><i>Der schlimmste Weg, den man wählen kann, ist der, keinen zu wählen.</i>",
	"Ist heute nicht der erste Advent?<br />Frag mich doch mal ob ich etwas für dich habe",
"Liebe, was du lieben willst<br><br><i>Es gibt nur einen richtigen Weg: deinen Eigenen!</i>",
"Tanze dein Leben<br><br><i>... und ich üb noch fleißig.</i>",
"Du bist wundervoll.<br><br><i>Das Sonnenlicht tanzt mit leichtfüßigen Schritten über Berg und Tal.</i>",
	"Heute gibt es eine kleine Überraschung! &#128521;<br />(Schau in deinen Kleiderschrank)",
"Ruf jemanden an, den du magst<br><br><i>Die Sprache ist die Kleidung der Gedanken.</i>",
"Liebe beginnt immer bei dir<br><br><i>Die Liebe zu uns selbst erweckt das strahlende Licht in uns und gibt uns die Kraft dieses Licht zu leben.</i>",
	"Bald ist Weihnachten. Lass dich verwöhnen.<br />Das Geschenk kannst du an deinem TV benutzen.",
"Umarme heute einen Baum oder deinen Freund<br><br><i>Eine Umarmung von dir ist nicht mit Gold aufzwägen.</i>",
"Du bist du<br><br><i>Die Welt ist voller Wunder Sie ist Liebe und Magie und sie ist im hier und jetzt.</i>",
"Gönne dir Auszeiten!<br><br><i>Muße, nicht Arbeit, ist das Ziel des Menschen.</i>",
"Du bist toll!<br><br><i>Du musst, das niemanden beweisen.</i>",
"Du bist einzigartig!<br><br><i>Eben eine ganz besondere Person für mich.</i>",
"Fühle dich geliebt<br><br><i>... von dir selbst, all deinen Mitmenschen, Verwandthen, Freunden, Tieren und dem Rest der Welt.</i>",
	"Jetzt sind wir schon seit über 4 Monaten ein Paar &#128151;<br><br><i>Meine Träume, mein Leben, das möchte ich mit dir teilen und allzeit an deiner Seite verweilen. Ich will den Alltag mit dir bestreiten und nie wieder von deiner Seite weichen.</i>",
"Vertraue dir selbst<br><br><i>Den größten Fehler, den man machen kann, ist, immer Angst zu haben, einen Fehler zu machen.</i>",
"Fahre einmal im Jahr ans Meer<br><br><i>Vielleicht fahren wir nächstes Jahr auch öfters ans Meer?</i>",
"Entspanne dich<br><br><i>Die Welt gehört dem, der sie geniest.</i>",
"Die Gegenwart ist der Baustein der Zukunft<br><br><i>Ich möchte kein perfektes Leben, sondern ein glückliches mit dir!</i>",
"Glaube an das was sich für dich richtig anfühlt<br><br><i>Wenn man sich selbst zu einem niedrigen Preis verkauft, wird niemand anderes diesen Preis erhöhen</i>",
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

	$("#spruch").html(content[day]).fadeIn(3000, complete: function() {$("#"+t).hide();} );
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
