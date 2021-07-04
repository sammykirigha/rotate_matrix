//Given an image represented by an N*N matrix, 
//where each pixel in the image is 4 bytes,
//write a method to rotate the image by 90 degrees in  place?


function rotateMatrix(mat) {
    let n = mat.length;
    for (let i = 0; i < Math.floor(n / 2); i++){
        for (let j = i; j < n - i - 1; j++){
            let tem = mat[i][j];
            mat[i][j] = mat[n - 1 - j][i]
            mat[n - 1 - j][i] = mat[n - i -1][n - j - 1]
            mat[n - i - 1][n - j - 1] = mat[j][n - i - 1]
            mat[j][n - i - 1] = tem;
        }
    }
    return mat;
}

console.log(rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]));

//METHOD 2 TRANSPOSE AND THEN REVERSE EACH ROW

let rotateTranspose = (matrix) => {
    let n = matrix.length;
    for(let i = 0; i < n; i++){
        for (let j = i; j < n; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for(let i = 0; i < n; i++){
        let start = 0;
        let end = n - 1;
        while (start < end) {
            let temp = matrix[i][start];
            matrix[i][start] = matrix[i][end];
            matrix[i][end] = temp;
            start++;
            end--;
        }   
    }
}

console.log(rotateTranspose([[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16]]))


