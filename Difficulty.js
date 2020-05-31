function getDifficulty(difficulty){
    if(difficulty=="easy"){
        return 20;
    }
    else if(difficulty=="intermediate"){
        return 35;
    }
    else if(difficulty=="hard"){
        return 50;
    }
    else{
        return 60;
    }
}

function generateSudoku(list,difficulty){
    let num = getDifficulty(difficulty);
     let rand1,rand2;
     for(let i=0;i<=num;i++){
        rand1 = Math.floor(Math.random() * 9);
        rand2 = Math.floor(Math.random() * 9);
        list[rand1][rand2] = 0;
     }
}

function print(list){
    for(let i=0;i<list.length;i++){
        console.log(list[i]);
    }
}