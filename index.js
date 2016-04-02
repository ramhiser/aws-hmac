var crypto = require("crypto");
/**
 * Get the signature/digest of a supplied input string
 * @param data [Required] the string to encode
 * @param aws_secret_key [Required] Secret key used to access AWS services
 * @param algorithm [Optional] Encryption algorithm, defaults to sha256
 * @param encoding [Optional] The output encoding. Default to base64
 * @returns String with encoded digest of the input string
 */
function generate_hmac(data, aws_secret_key, algorithm, encoding) {
    encoding = encoding || "base64";
    algorithm = algorithm || "sha256";
    return crypto.createHmac(algorithm, aws_secret_key).update(data).digest(encoding);
}

/**
 * Generate AWS signature headers to sign request
 * @param aws_access_id [Required] Unique AWS access ID to authorize account
 * @param aws_secret_key [Required] Secret key used to access AWS services
 * @returns JSON object with AWS signature headers
 */
function generate_signature(aws_access_id, aws_secret_key) {
    var d = new Date().toUTCString();
    var hmac = generate_hmac(d, aws_secret_key);
    var auth_str = "AWS3-HTTPS AWSAccessKeyId=" + aws_access_id
    auth_str = auth_str + ",Algorithm=HMACSHA256,Signature=" + hmac
    headers = {
        "Date" : d,
        "X-Amzn-Authorization" : auth_str
    };
    return headers;
}
