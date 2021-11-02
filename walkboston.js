function renderboston(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  var topSalaryPeople=[];
  let html = '';
  
  for (let i = 0; i < len; i++) {
    //html +=
     // '<li class="boston">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  
  
  
       // TODO: add code to display the html variable inside a ul element with id="data"
      
       // Hint: you can use the container parameter's innerHTML property to insert Html tags
           if(boston.data[i][11]>200000)
           {
               html +=
               '<li class="boston">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
           }
           topSalaryPeople.push([boston.data[i][11],boston.data[i][8]]);
    }
    var topsalary=topSalaryPeople.sort(function(a,b) {
      return b[0] - a[0];
  });
  console.log(topsalary);
  
   var topfive= topsalary.slice(0,5);
   for(let j=0;j<topfive.length;j++)
   {
   html+=
   '<li class="boston">' + '<h2>' + topfive [j]+ '</h2>';
   }
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
  
}
renderboston(boston, document.getElementById('container'));