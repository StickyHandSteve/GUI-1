let content = document.getElementsByTagName('ul')[0];
//ADD NEW ITEM TO END OF LIST
//https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
content.lastElementChild.insertAdjacentHTML("afterend", "<li id=\"newEnd\">milk</li>");

//ADD NEW ITEM START OF LIST
content.firstElementChild.insertAdjacentHTML("beforebegin", "<li id=\"newBegin\">teeth</li>");

//ADD A CLASS OF COOL TO ALL LIST ITEMS
for(let i = 0; i < 6; i++)
{
    content.children.item(i).classList.add('cool');
}
//ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
//https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
document.getElementsByTagName('h2')[0].insertAdjacentHTML("beforeend", `<span>${content.children.length}</span>`);