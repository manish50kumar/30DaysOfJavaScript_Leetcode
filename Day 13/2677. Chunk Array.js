

// https://leetcode.com/problems/chunk-array/

// 2677. Chunk Array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
     const chunks = []

    for (let i = 0; i < arr.length / size; i++) {
        chunks.push([])
        for (let j = 0; j < size; j++) {

                const cur = arr[i * size + j]
                if (!cur & cur !== 0) {
                    return chunks
                }
                chunks[i].push(cur)

                // return chunks
            // }
        }
    }
    return chunks
};
s