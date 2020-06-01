function renderTable(sudoku){
    let ret = ""
    for(let i=0;i<9;i++){
        let row = `<tr>
                       <td>${sudoku[i][0]}</td>
                       <td>${sudoku[i][1]}</td>
                       <td>${sudoku[i][2]}</td>
                       <td>${sudoku[i][3]}</td>
                       <td>${sudoku[i][4]}</td>
                       <td>${sudoku[i][5]}</td>
                       <td>${sudoku[i][6]}</td>
                       <td>${sudoku[i][7]}</td>
                       <td>${sudoku[i][8]}</td>
                   </tr>`;
        ret += row;
    }
    return ret;
}

function play(tdlist,numbers,colors,actual){
    let activeCell = tdlist[0];
    let row,column;
    let n;
    for(let i=0;i<tdlist.length;i++){
        tdlist[i].addEventListener('click',(event)=>{
            activeCell.style.backgroundColor = "#fbf3d4";
            activeCell = tdlist[i];
            activeCell.style.backgroundColor = "#89cff0";
            row = tdlist[i].parentElement.rowIndex;
            column = tdlist[i].cellIndex;
        });
    }
    for(let i=0;i<numbers.length;i++){
        numbers[i].addEventListener('click',(event)=>{
                n = numbers[i].innerText;
                if(colors[row][column]=="black"){
                    alert("can't change that");
                }
                else{
                    activeCell.innerText = n;
                    if(n==actual[row][column]){
                        console.log(actual[row][column]);
                        activeCell.style.color = "green";
                        colors[row][column] = "green";
                    }
                    else{
                        activeCell.style.color = "red";
                        colors[row][column] = "red";
                        console.log(actual[row][column]);
                    }
                }
        });
    }
}