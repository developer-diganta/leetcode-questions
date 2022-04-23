/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const temp = {};

var encode = function(longUrl) {
    let encodeString = "ABCDEFGHIJJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 6; i++) 
        id += encodeString[Math.floor(Math.random() * encodeString.length)];
    temp.id = longUrl;
    return "http://tinyurl.com/" + id;
};


/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

var decode = function(shortUrl) {
    let urlArray = shortUrl.split('/');
    let id = urlArray[urlArray.length - 1];
    return temp.id
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */


