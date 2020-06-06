function createInitial(){
   let k = new Array(15);
   for (var i = 0; i < 15; i++) {
       k[i] = new Array(41);
   }
   for(let i=0;i<15;i++){
       for(let j=0;j<41;j++){
           k[i][j]=1;
       }
   }
   return k;
}

function getRandom(num1,num2){

}

function editBorders(matrix){
    let list1 = matrix[0];
    let list2 = matrix[matrix.length-1];
    for(let i=0;i<41;i++){
        list1[i]=2;
        list2[i]=2;
    }
    matrix[0]=list1;
    matrix[matrix.length-1]=list2;
    for(let i=0;i<15;i++){
        matrix[i][0]=2;
        matrix[i][40]=2;
    }
}

function generatePackman(){
    let k = createInitial();
    editBorders(k);
    k[7][20]=3;
    k[1][1]=4;
    k[1][39]=4;
    return k;
}