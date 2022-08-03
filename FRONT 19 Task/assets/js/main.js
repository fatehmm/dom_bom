var main_div = document.createElement("div");
document.body.append(main_div);
main_div.style.height = "95vh";
main_div.style.width = "80vw";
main_div.classList.add("main_div", "column-between")


var first_child_div = document.createElement("div");
first_child_div.classList.add("height");
first_child_div.classList.add("flex")


var res_main = document.createElement("p");
res_main.id = "info";
res_main.innerHTML = "960x360px";
res_main.classList.add("font")
res_main.classList.add("font");
first_child_div.appendChild(res_main);

var second_child_div = document.createElement("div");
second_child_div.classList.add("second-child", "space-between");

main_div.appendChild(first_child_div);
main_div.appendChild(second_child_div);

var child_div_1 = document.createElement("div");
child_div_1.classList.add("child-elements");
var child_div_2 = document.createElement("div");
child_div_2.classList.add("child-elements");
var child_div_3 = document.createElement("div");
child_div_3.classList.add("child-elements");

second_child_div.appendChild(child_div_1);
second_child_div.appendChild(child_div_2);
second_child_div.appendChild(child_div_3);

var img = document.createElement("div");
img.classList.add("grey", "img-style", "flex", "main_div");
var text = document.createElement("p");
text.innerHTML = "290x180px";
img.appendChild(text);

var img2 = document.createElement("div");
img2.classList.add("grey", "img-style", "flex", "main_div");
var text2 = document.createElement("p");
text2.innerHTML = "290x180px";
img2.appendChild(text2);

var img3 = document.createElement("div");
img3.classList.add("grey", "img-style", "flex", "main_div");
var text3 = document.createElement("p");
text3.innerHTML = "290x180px";
text3.classList.add("font");
text2.classList.add("font");
text.classList.add("font");
img3.appendChild(text3);

var title = document.createElement("h5");
title.innerHTML = "Lorem ipsum";
title.classList.add("em");

var title2 = document.createElement("h5");
title2.innerHTML = "Lorem ipsum";
title2.classList.add("em");

var title3 = document.createElement("h5");
title3.innerHTML = "Lorem ipsum";
title3.classList.add("em");


var para = document.createElement("p");
para.innerHTML = "Read more";
para.classList.add("yellow");

var para2 = document.createElement("p");
para2.innerHTML = "Read more";
para2.classList.add("yellow");

var para3 = document.createElement("p");
para3.innerHTML = "Read more";
para3.classList.add("yellow");

child_div_1.appendChild(para);
child_div_2.appendChild(para2);
child_div_3.appendChild(para3);


var text_paragraph = document.createElement("p");
text_paragraph.innerHTML = "Lorem ipsum dolor sit amet consecctetur amet die kuer";

var text_paragraph2 = document.createElement("p");
text_paragraph2.innerHTML = "Lorem ipsum dolor sit amet consecctetur amet die kuer";

var text_paragraph3 = document.createElement("p");
text_paragraph3.innerHTML = "Lorem ipsum dolor sit amet consecctetur amet die kuer";

child_div_1.insertBefore(text_paragraph, para);
child_div_2.insertBefore(text_paragraph2, para2);
child_div_3.insertBefore(text_paragraph3, para3);


child_div_1.insertBefore(title, text_paragraph);
child_div_2.insertBefore(title2, text_paragraph2);
child_div_3.insertBefore(title3, text_paragraph3);


child_div_1.insertBefore(img ,title);
child_div_2.insertBefore(img2, title2);
child_div_3.insertBefore(img3, title3);

