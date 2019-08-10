str="";

fbook="<a target=_blank href='http://www.facebook.com/pages/Miniature-Reflections/262332885596'>Facebook</a>";

counter="<font face=arial color=black size=3>Visitors<BR>since 09-09-09:<BR>";
counter+="<img src=http://counters.freewebs.com/Members/Counters/counter.jsp?userid=46152773&name=Visitors>";

fbookmod='<table cellpadding=0><td bgcolor=white><iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FMiniature-Reflections%2F262332885596&amp;width=238&amp;colorscheme=light&amp;connections=4&amp;stream=false&amp;header=true&amp;height=220" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:238px; height:220px;" allowTransparency="false"></iframe></table>';

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

pName=new Array(); // product name
pNick=new Array(); // url and images
pDesc=new Array(); // description
pPage=new Array(); // details and images; layout for page
pCost=new Array(); // price in $$
p=0;

pName[p]="Candy Canes";
pNick[p]="candy";
pDesc[p]="White leotard with sparkly red embellishment and pull-on skirt. Striped headpiece and red ballet shoes included!";
pPage[p]="<a href=pics/candy_full.jpg target=_blank><img src=pics/candy_full.jpg height=300 border=0 title='click for larger image'></a>";
pPage[p]+="<img src=pics/candy_detail3.jpg height=300 border=0 title='Red satin ballet shoes included'></a>";
pPage[p]+="<img src=pics/candy_detail2.jpg height=300 border=0 title='Red and white striped bow-style headpiece with tiny white bobby pins'></a>";
pPage[p]+="<img src=pics/candy_detail1.jpg height=300 border=0 title='detail of embellishment'></a>";
pCost[p]=35; p++;

pName[p]="Chinese Dolls";
pNick[p]="chinese";
pDesc[p]="Trimmed with hand-made Chinese frog closures, brocade top comes in choice of six colors. Black pants and tassled \"chopsticks\" headpiece included.";
pPage[p]="<table><td><a href=pics/chinese_full.jpg target=_blank><img src=pics/chinese_full.jpg height=331 title='\"Hot Pink\" (click for larger image)'></a>";
pPage[p]+="<td><img src=pics/chinese_detail1.jpg title='Wooden \"Chopsticks\" with Tassels'><BR><img src=pics/chinese_detail2.jpg title='Handmade frog closure'></table>";
pPage[p]+="<BR>Choose from Six Colors:<BR><img src=pics/chinese_opt1.jpg title='Royal Blue'><img src=pics/chinese_opt2.jpg title='Red'><img src=pics/chinese_opt3.jpg title='Emerald Green'><img src=pics/chinese_opt4.jpg title='Powder Blue'><img src=pics/chinese_opt5.jpg title='Purple'><img src=pics/chinese_opt6.jpg title='Hot Pink (shown)' height=80>";
pCost[p]=35; p++;

pName[p]="Sugarplum Fairy";
pNick[p]="sugar";
pDesc[p]="Every dancer's dream, this luscious pink classical tutu is trimmed with delicate lace and jewels. Tulle skirt is authentically hand-tacked. Price includes pink beaded tiara.";
pPage[p]="<a href=pics/sugar_full.jpg target=_blank><img src=pics/sugar_full.jpg height=300 title='click for larger image'></a>";
pPage[p]+="<img src=pics/sugar_detail1.jpg title='beaded tiara included'>";
pCost[p]=50; p++;

pName[p]="Mother Ginger's Children";
pNick[p]="mother";
pDesc[p]="White satin top has flirty fringed collar in your choice of six colors. Black pants.";
pPage[p]="<a href=pics/mother_full.jpg target=_blank><img src=pics/mother_full.jpg width=250 title='\"Yellow\" (click for larger image)'></a>";
pPage[p]+="<a href=pics/mother_full2.jpg target=_blank><img src=pics/mother_full2.jpg width=250 title='\"Hot Pink\" (click for larger image)'></a>";
pPage[p]+="<BR><img src=pics/mother_detail1.jpg title='Satin collar trimmed with tiny pom pom fringe' width=250>";
pPage[p]+="<img src=pics/mother_detail2.jpg title='Satin collar trimmed with tiny pom pom fringe' width=250>";
pPage[p]+="<BR><BR>Choose from six colors:<BR><img src=pics/mother_opt1.jpg height=100 title='Yellow (Shown)'><img src=pics/mother_opt2.jpg height=100 title='Hot Pink (Shown)'>";
pPage[p]+="<img src=pics/mother_opt3.jpg height=100 title='Red'><img src=pics/mother_opt4.jpg height=100 title='Dark Green'>";
pPage[p]+="<img src=pics/mother_opt5.jpg height=100 title='Royal Blue'><img src=pics/mother_opt6.jpg height=100 title='Turquoise'>";
pCost[p]=25; p++;

pName[p]="Clara Special Set";
pNick[p]="clara";
pDesc[p]="Clara's Party Dress features double-layer skirt of satin, ribbon and lace trim, and white ribbon sash. Special Set includes bonus eyelet nightgown and mini Nutcracker, just her size!";
pPage[p]="<a href=pics/clara_full.jpg target=_blank><img src=pics/clara_full.jpg height=300 title='click for larger image'></a>";
pPage[p]+="<img src=pics/clara_full2.jpg height=250 title=\"Clara's nightgown and Nutcracker\">";
pCost[p]=75; p++;

pName[p]="Littlest Angels";
pNick[p]="angel";
pDesc[p]="Sweet Angel dress has attached marabou-trimmed wings, golden trimmings, and rope sash. Garland headpiece with white roses, gold beads and shimmering ribbon included.";
pPage[p]="<table><td><a href='../models/angel_full.jpg' target=_blank><img src='../models/angel_full.jpg' height=305 title='click for larger image'></a>";
pPage[p]+="<td><img src='../models/angel_detail_head2.jpg' width=200 title='Floral Headpiece Included'><BR><img src='../models/angel_detail_wings.jpg' width=195></table>";
pCost[p]=25; p++;

pName[p]="Waltz of the Flowers";
pNick[p]="waltz";
pDesc[p]="Romantic tutu with four shades of layered tulle. Attached bengaline bodice is embellished with flowers. Traditional floral headpiece is included.";
pPage[p]="<a href=pics/waltz_full.jpg target=_blank><img src=pics/waltz_full.jpg height=300 title='click for larger image'></a>";
pPage[p]+="<img src=pics/waltz_detail1.jpg title='jewelled floral headpiece includes tiny bobby pins' height=200>";
pCost[p]=45; p++;

pName[p]="The Snow Queen";
pNick[p]="snow";
pDesc[p]="Pristine white classical tutu with attached bengaline bodice trimmed in lace and pearls. Tutu skirt is hand-tacked. Beaded snowflake tiara included.";
pPage[p]="<a href=pics/snow_full.jpg target=_blank><img src=pics/snow_full.jpg height=300 title='click for larger image'></a>";
pPage[p]+="<img src=pics/snow_detail1.jpg title='beaded tiara included' height=300>";
pCost[p]=50; p++;

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

if(page=="index")
{
	str="<h2> Miniature Reflections </h2>";

	str+="<p> Welcome! This website is still under construction. Feel free to browse around, but if you have questions, comments, or need more information, <a href=contact.html>Contact Us</a>.</p>";

	str+="<p> Become a fan on " + fbook + " for updates and events.</p>";

	str+="<h2> About Us </h2>";

	str+="<p> With 40 years of combined sewing experience, Dori and Jill love creating with fabric! Currently working as costumers for a regional non-profit ballet company, they have designed a line of costumes for 18\" dolls which are replicas of the actual Nutcracker ballet costumes worn by the dancers on the stage. Using many of the same materials and authentic techniques, these tiny tutus, dresses and tiaras are miniature reflections of a classic art form. A portion of these sales is donated to the Gainesville Ballet Company as fundraiser.</p>";

	str+="<table><td class=cont valign=top><h2> How to Order </h2>";

	str+="<p> Online ordering is currently unavailble. To order, review our <a href=products.html>Products</a> online and <a href=contact.html>Contact Us</a> to arrange your purchase.";

	str+="</p><BR>" + counter + "<td valign=top>" + fbookmod + "</table>";

}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

if(page=="products")
{
	str="<h2> Products </h2>";

	str+="<p>Click on the photos below for detailed information about each costume.";
	str+="<p>Depending on availability of materials, actual costume details may vary slightly.";
	str+="<p>Tights and shoes not included, unless noted.";

	str+="<h3> Gainesville Ballet Company <BR> Nutcracker Performance Series </h3>";

	str+="<table border=0><tr><td width=50% colspan=2><td width=50% colspan=2><tr>";

	for(x=0;x<p;x++)
	{
		if(x%2==0 && x>0)str+="<tr><td height=30><tr>";

		link="<a href=products." + pNick[x] + ".html>";

		str+="<td valign=top>" + link + "<img src=pics/" + pNick[x] + "_th.jpg width=120>";
		str+="<td class=product valign=top>" + link +"<span class=title>" + pName[x];
		str+="</span><BR>" + pDesc[x] + "<BR>$" + pCost[x];
		if(pPage[x].length==0)str+="*****";
	}
}

else if(page.match("products.")=="products.")
{
	for(x=0;x<p;x++)if(page==("products." + pNick[x]))break;

	str="<h2>“" + pName[x] + "” Doll Costume</h2><a href=products.html>Return to Products</a><p>" + pDesc[x];
	str+="<BR>$" + pCost[x] + "<center><BR>" + pPage[x];

	str+="</center><BR><p> If you have questions, please don't hesitate to <a href=contact.html>Contact Us</a>. </p><center>";

	str+="<font size=6>*****</font><BR><h3> Browse More Products <span class=h3_light>(<a href=products.html>See All</a>)</span></h3><table>";

	if(x<2)y=0;
	else if(x>p-3)y=p-5;
	else y=x-2;

	for(z=y;z<y+5;z++)
	{
		if(z==x)cl="current";
		   else cl="other";

		str+="<td valign=top><table><td align=center valign=top class=browse_" + cl + ">";

		if(z!=x)str+="<a href=products." + pNick[z] + ".html class=no_a>";

		str+="<img src=../models/" + pNick[z] + "_full_th.jpg height=120><BR>" + pName[z] + "</table>";
	}

	str+="</table>";
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

if(page=="contact")
{
	str="<h2> Contact Us </h2>";

	str+="<p> Email us at <span class=fakea>MiniatureReflections@yahoo.com</span> and we will try to get back to you within 24 hours.";

	str+="<p> To receive regular updates, follow us on " + fbook + ".</p> <table height=300><td></table>";
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("inner_content").innerHTML=str;