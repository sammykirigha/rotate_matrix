//Given an image represented by an N*N matrix, 
//where each pixel in the image is 4 bytes,
//write a method to rotate the image by 90 degrees in  place?


function rotateMatrix(mat) {
    let n = mat.length;
    for (let i = 0; i < Math.floor(n / 2); i++){
        for (let j = i; j < n - i - 1; j++){
            let temp = mat[i][j];
            mat[i][j] = mat[n - 1 - j][i]
            mat[n - 1 - j][i] = mat[n - i -1][n - j - 1]
            mat[n - i - 1][n - j - 1] = mat[j][n - i - 1]
            mat[j][n - i - 1] = temp;
        }
        console.log(n)
        console.log(temp)
    }
    return mat;
}

console.log(rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]));
