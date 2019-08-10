
menu=["Home","Products","Contact Us"];
urls=["index","products","contact"];

document.write('<link rel="stylesheet" type="text/css" href="../vendor/font.css">');

document.write("<link rel=stylesheet type=text/css href=1style.css>");

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

document.write("<title>Miniature Reflections</title><center>");

document.write("<table id=outline><td>");

document.write("<table id=body_header><td align=right>");

	document.write('<table border=0><tr><td height=80><tr><td id=site_title1>Miniature Reflections');
	document.write('<td id=site_c>©<tr><td id=site_title2>Handcrafted Costumes for 18" Dolls<tr><td height=50></table>');

	document.write("<table align=center height=40>");

	for(x=0;x<menu.length;x++)
	{
		if(x>0)document.write('<td class=menu_spacer>&#9830;');
		document.write("<td class=menu_cell><a href=" + urls[x] + ".html>" + menu[x]);
	}

	document.write('</table></table>');

document.write("<table id=body_content><td id=inner_content></table>");

document.write('<table id=body_footer><td height=20></table></table>');

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

document.write("<script language=javascript src=1content.js></script>");