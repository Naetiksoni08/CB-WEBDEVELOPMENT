var arrayofrectangle=[
    {l:4,b:20},
    {l:10,b:10},
    {l:2,b:10},
    {l:4,b:10}
] 
function areas(l,b) {
    return l*b;
}
function perimeters(l,b) {
   return 2*(l+b); 
   
}

// var area = [];
// var perimeter=[];
// for(var i =0;i<arrayofrectangle.length; i++) {
//     area[i] = areas(arrayofrectangle[i].l,arrayofrectangle[i].b);
//     perimeter[i] = perimeters(arrayofrectangle[i].l,arrayofrectangle[i].b);
// }
// console.log(area)
// console.log(perimeter)




function getoutput(data,logic) {
    var output = [];
    for(var area of data) {
        output.push(logic(area.l,area.b));


    }
    return output;
}

var ansarea = getoutput(arrayofrectangle,areas);
var ansperimeter = getoutput(arrayofrectangle,perimeters);
console.log("area :" , ansarea);
console.log("perimeter :" , ansperimeter);














