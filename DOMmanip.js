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