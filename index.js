/**
 *  splitToChunks
 *
 *  Splits an array or a string to an array of chunks of the given size
 *
 *  @author Tim Beard
 *  @since  2019-05-20
 *
 *  @param  Mixed   src     a String or an Array to split into chunks
 *  @param  Number  size    the number of pieces in each chunk
 *
 *  @returns    Array   an Array of chunks
 */

export default (src, size) => {

    // If src is a String, make it an Array
    if (typeof src === 'string') {

        src = src.split('')
    }

    // Process pieces to chunks
    if (Array.isArray(src)) {

        let output = []

        while (src.length) {

            output.push(src.splice(0, size))
        }

        return output
    }

    // If src isn't a String nor an Array, throw a TypeError
    throw new TypeError('src should be a String or an Array')
}
