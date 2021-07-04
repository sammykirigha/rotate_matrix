//Given an image represented by an N*N matrix, 
//where each pixel in the image is 4 bytes,
//write a method to rotate the image by 90 degrees in  place?


let rotateMatrix = (matrix) => {
    let n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); i++){
        for (let j = 0; j < n - (2 * i) - 1; j++){

            let temp = matrix[i + j][n - 1 - i];
            matrix[i + j][n - 1 - i] = matrix[i][i + j];
            matrix[i][i + j] = temp;

            temp = matrix[n - 1 - i][n - 1 - i - j];
            matrix[n - 1 - i][n - 1 - i - j] = matrix[i][i + j];
            matrix[i][i + j] = temp;

            temp = matrix[n - 1 - i - j][i];
            matrix[n - 1 - i - j] = matrix[i][i + j];
            matrix[i][i + j] = temp;

            console.log(n)
            console.log(temp)
        }
    }
    return matrix
}

console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
