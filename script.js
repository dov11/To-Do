// select the element containing the count
 var totalCount = document.getElementById('total-count');

 // count the number of todo's by their class name
 var totalTodos = document.getElementsByClassName("todo").length;

 // update the HTML inside the counter element
 totalCount.innerHTML = totalTodos;
