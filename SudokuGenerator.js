let list = [1,2,3,4,5,6,7,8,9];

  function shuffle(array) {
   let array2 =  array.sort(() => Math.random() - 0.5);
   return array2;
  }
  

 function rotate_one(array){
    let a = array[0];
    let array2 = [];
    for(let i=0;i<array.length-1;i++){
        array2[i]=array[i+1];
    }
    array2[array.length-1]=a;

    return array2;
 } 

 function rotate_three(array){
    let a = array[0];
    let b = array[1];
    let c = array[2];
    let array2 = [];
    for(let i=0;i<array.length-3;i++){
        array2[i]=array[i+3];
    }
    array2[array.length-3]=a;
    array2[array.length-2]=b;
    array2[array.length-1]=c;

    return array2;
 }

function swap_first(list){
    let list2 = list.slice(0,3);
    let list3 = list.slice(3,6);
    let list4 = list.slice(6,9);
    let array2 = [];
    for(let i=0;i<3;i++){
        array2[i]=list4[i];
        array2[i+3]=list2[i];
        array2[i+6]=list3[i];
    }
    return array2;
}

function swap_second(list){
    let list2 = list.slice(0,3);
    let list3 = list.slice(3,6);
    let list4 = list.slice(6,9);
    let array2 = [];
    for(let i=0;i<3;i++){
        array2[i]=list3[i];
        array2[i+3]=list4[i];
        array2[i+6]=list2[i];
    }
    return array2;
}

function create_sudoku(list){
    let ret_list = [];
    ret_list[0] = shuffle(list);
    ret_list[1] = rotate_three(ret_list[0]);
    ret_list[2] = rotate_three(ret_list[1]);
    ret_list[3] = rotate_one(ret_list[2]);
    ret_list[4] = swap_first(ret_list[3]);
    ret_list[5] = swap_second(ret_list[3]);
    ret_list[6] = rotate_one(ret_list[5]);
    ret_list[7] = swap_first(ret_list[6]);
    ret_list[8] = swap_second(ret_list[6]);
    return ret_list;
}

function transposeArray(array, arrayLength){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < arrayLength; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}

function shuffle_rows(list){
    let list2 = list.slice(0,3);
    let list3 = list.slice(3,6);
    let list4 = list.slice(6,9);

    let list2_shuffle = shuffle(list2);
    let list3_shuffle = shuffle(list3);
    let list4_shuffle = shuffle(list4);

    for(let i=0;i<3;i++){
        list[i] = list2_shuffle[i];
        list[i+3] = list3_shuffle[i];
        list[i+6] = list4_shuffle[i];
    }
}

function shuffle_blocks(list){
    let list2 = list.slice(0,3);
    let list3 = list.slice(3,6);
    let list4 = list.slice(6,9);

    let blocks = [list2,list3,list4];
    let blocks_shuffle = shuffle(blocks);

    list2 = blocks_shuffle[0];
    list3 = blocks_shuffle[1];
    list4 = blocks_shuffle[2];

    for(let i=0;i<3;i++){
        list[i] = list2[i];
        list[i+3] = list3[i];
        list[i+6] = list4[i];
    }
    
}

function convert(list){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(list[i][j]==0){
                list[i][j]="";
            }
            else{
                list[i][j]=list[i][j].toString(10);
            }
        }
    }
}

function sudoku_board(list){
    let list2 = create_sudoku(list);
    shuffle_rows(list2);
    shuffle_blocks(list2);
    let list_trans = transposeArray(list2,9);
    shuffle_rows(list_trans);
    return list_trans;
}

function createColors(list){
    let ret = [];
    for(let i=0;i<9;i++){
        ret.push([]);
    }
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(list[i][j]!=""){
                ret[i].push("black");
            }
            else{
                ret[i].push("");
            }
        }
    }
    return ret;
}

function getCopy(list){
    let list2 = [];
    for(let i=0;i<9;i++){
        list2.push([]);
    }
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            list2[i].push(list[i][j]);
        }
    }
    return list2;
}