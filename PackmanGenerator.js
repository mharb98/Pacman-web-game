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
    let ret1 = Math.floor(Math.random()*num1)+2;
    let ret2 = Math.floor(Math.random()*num2)+2;
    return [ret1,ret2];
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

function addWalls(matrix){
    let randoms,ret1,ret2;
    for(let i=0;i<5;i++){
        randoms = getRandom(10,35);
        ret1 = randoms[0];
        ret2 = randoms[1];
        for(let j=ret1;j<ret1+4;j++){
            matrix[j][ret2]=2;
        }
    }
    for(let i=0;i<5;i++){
        randoms = getRandom(10,35);
        ret1 = randoms[0];
        ret2 = randoms[1];
        for(let j=ret2;j<ret2+4;j++){
            matrix[ret1][j]=2;
        }
    }
}

function generatePackman(){
    let k = createInitial();
    editBorders(k);
    addWalls(k);
    k[7][20]=3;
    k[1][3]=4;
    k[1][15]=4;
    return k;
}