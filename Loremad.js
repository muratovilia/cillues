function mergeEncoding(customEncoding) {
    const defaultEncoding = {
        charset: 'utf-8',
        contentType: 'text/plain',
        base64: false,
        compress: false
    };

    return { ...defaultEncoding, ...customEncoding };
}

// Usage example
const mergedEncoding = mergeEncoding({
    contentType: 'application/json',
    compress: true
});

console.log(mergedEncoding);
// Output: {charset: "utf-8", contentType: "application/json", base64: false, compress: true}
