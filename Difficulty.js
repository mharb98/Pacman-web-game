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

function shuffle(array) {
    let array2 =  array.sort(() => Math.random() - 0.5);
    return array2;
}

function generateSudoku(list,difficulty){
    let num = getDifficulty(difficulty);
    let sd = [];
    for(let i=0;i<81;i++){
        sd[i]=i;
    }
    sd = shuffle(sd);
     let rand1,rand2;
     for(let i=0;i<=num;i++){
        rand1 = sd[i]%9;
        rand2 = Math.floor(sd[i]/9);
        list[rand1][rand2] = 0;
     }
}
