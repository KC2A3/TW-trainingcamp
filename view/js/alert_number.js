var list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function() {
    alert(i + 1);
  };
}