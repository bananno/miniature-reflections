str="";

fbook="<a target=_blank href='http://www.facebook.com/pages/Miniature-Reflections/262332885596'>Facebook</a>";

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

pName=new Array(); // product name
pNick=new Array();
pDesc=new Array(); // description
pCost=new Array();
p=0;

pName[p]="Candy Canes";
pNick[p]="candy";
pDesc[p]="White leotard with sparkly red embellishment and pull-on skirt. Striped headpiece and red ballet shoes included!";
pCost[p]=35; p++;

pName[p]="Chinese Dolls";
pNick[p]="chinese6";
pDesc[p]="Trimmed with hand-made Chinese frog closures, brocade top comes in choice of six colors. Black pants and tassled \"chopsticks\" headpiece included.";
pCost[p]=35; p++;

pName[p]="Sugarplum Fairy";
pNick[p]="sugar";
pDesc[p]="Every dancer's dream, this luscious pink classical tutu is trimmed with delicate lace and jewels. Tulle skirt is authentically hand-tacked. Price includes pink beaded tiara.";
pCost[p]=50; p++;

pName[p]="Mother Ginger's Children";
pNick[p]="mother2";
pDesc[p]="White satin top has flirty fringed collar in your choice of six colors. Black pants.";
pCost[p]=25; p++;

pName[p]="Clara Special Set";
pNick[p]="clara1";
pDesc[p]="Clara's Party Dress features double-layer skirt of satin, ribbon and lace trim, and white ribbon sash. Special Set includes bonus eyelet nightgown and mini Nutcracker, just her size!";
pCost[p]=75; p++;

pName[p]="Littlest Angels";
pNick[p]="angel";
pDesc[p]="Sweet Angel dress has attached marabou-trimmed wings, golden trimmings, and rope sash. Garland headpiece with white roses, gold beads and shimmering ribbon included.";
pCost[p]=25; p++;

pName[p]="Waltz of the Flowers";
pNick[p]="waltz";
pDesc[p]="Romantic tutu with four shades of layered tulle. Attached bengaline bodice is embellished with flowers. Traditional floral headpiece is included.";
pCost[p]=45; p++;

pName[p]="The Snow Queen";
pNick[p]="snow";
pDesc[p]="Pristine white classical tutu with attached bengaline bodice trimmed in lace and pearls. Tutu skirt is hand-tacked. Beaded snowflake tiara included.";
pCost[p]=50; p++;

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

if(page=="index")
{
  str="<h2> Miniature Reflections </h2>";

  str+="<p> Welcome! This website is still under construction. Feel free to browse around, but if you have questions, comments, or need more information, Contact Us.";

  str+="<p> Become a fan on " + fbook + " for updates and events.";

  str+="<h2> About Us </h2>";

  str+="<p> With 40 years of combined sewing experience, Dori and Jill love creating with fabric! Currently working as costumers for a regional non-profit ballet company, they have designed a line of costumes for 18\" dolls which are replicas of the actual Nutcracker ballet costumes worn by the dancers on the stage. Using many of the same materials and authentic techniques, these tiny tutus, dresses and tiaras are miniature reflections of a classic art form. A portion of these sales is donated to the Gainesville Ballet Company as fundraiser.";

  str+="<h2> How to Order </h2>";

  str+="<p> Online ordering is currently unavailble. To order, review our <a href=products.html>Products</a> online and <a href=contact.html>Contact Us</a> to arrange your purchase.";

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

  str+="<table border=0><tr><td width=50% colspan=2><td width=50% colspan=2>";

  row=1;

  for(x=0;x<p;x++)
  {
    if(row>0)str+="<tr>";
    row*=-1;

    str+="<td><img src='../models/" + pNick[x] + "_full_th.jpg' width=100><td valign=top><span class=fakea>";
    str+=pName[x] + "</span><BR>" + pDesc[x] + "<BR>$" + pCost[x];
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

if(page=="contact")
{
  str="<h2> Contact Us </h2>";

  str+="<p> Email us at <span class=fakea>MiniatureReflections@yahoo.com</span> and we will try to get back to you within 24 hours.";

  str+="<p> To receive regular updates, follow us on " + fbook + ".";
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("inner_content").innerHTML=str;
