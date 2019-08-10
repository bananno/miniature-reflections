
menu=["Home","Products","Contact Us"];
urls=["index","products","contact"];

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

s = '<link rel="stylesheet" type="text/css" href="../vendor/font.css">';

s += '<link rel="stylesheet" type="text/css" href="style.css">';

s+="<title>Miniature Reflections</title><center>";

s+="<table id=outline><td>";
s+="<table><tr>";
s+="<tr><td><table id=body_header><td align=center>";

s+="<table border=0><tr><td rowspan=4 width=100><td height=50><tr><td id=site_title1>Miniature Reflections<td id=site_copy valign=top>©";
s+="<tr><td id=site_title2>Handcrafted Costumes for 18\" Dolls<tr><td height=30></table>";

s+="<table id=body_menu><td>";

	s+="<table id=menu_frame>";
	for(x=0;x<menu.length;x++)
	{
		if(x>0)s+="<td class=menu_spacer>&#9830;";
		s+="<td class=menu_cell><a href=" + urls[x] + ".html>" + menu[x];
	}

s+="</table></table></table>";
s+="<tr><td><table id=body_content><td id=inner_content></table>";
s+="<tr><td><table id=body_footer><td></table>";
s+="</table></table>";

document.write(s);

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

document.write("<script language=javascript src=content.js></script>");
