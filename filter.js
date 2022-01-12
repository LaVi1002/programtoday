FILTER: 

const Lavi = [2,4,6,8,10];
const v = Lavi.filter(function(data,index){
    if(index==3){
        return(data,index);
    }
});
console.log(v)


OUTPUT:
[8]