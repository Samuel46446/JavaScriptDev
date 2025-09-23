function add(a,b){
 return a+b;
}
function sub(a,b){
 return a-b;
}
module.exports.add=add;
module.exports.sub=sub;
module.exports.mult=function(a,b){ //observer cette variante d’export
 return a*b;
}
