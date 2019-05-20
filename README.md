# split-to-chunks
Splits an array or a string to an array of chunks of the given size

# usage

```
// Import split-to-chunk module into the project
import splitToChunks from 'split-to-chunks'

// Basic hex data for a 3*1px 24bit image going red, then green and blue
const img = [0xFF, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x00, 0x00, 0xFF]

// Reverse the image so it goes blue then green and red
const reversed = splitToChunks(img, 3).reverse()

const output = reversed.reduce((a, c) => {
    c.forEach(piece => a.push(piece))
    return a
}, [])

console.log(output)
// >> [0, 0, 255, 0, 255, 0, 255, 0, 0]
```
