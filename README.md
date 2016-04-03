# aws-hmac

A small Node.js utility to generate an HMAC signature to authorize AWS API
requests.

For more details about signing AWS requests, see the
[AWS docs](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/query-interface-authentication.html).

Special thanks to Robert Kehoe for providing
[a clear example](https://www.robertkehoe.com/2013/10/generating-aws-hmac-in-nodejs/)
from which this utility is derived.

## Installation

```
npm install aws-hmac --save
```

## Usage

```javascript
aws_access_id = "ramhiser"
aws_secret_key = "FLUFFY BUNNIES"

var aws_hmac = require("aws-hmac");
aws_signature = aws_hmac.generate_signature(aws_access_id, aws_secret_key);
console.log(aws_signature);

/*
{ Date: 'Sat, 02 Apr 2016 03:33:17 GMT',
  'X-Amzn-Authorization': 'AWS3-HTTPS
  AWSAccessKeyId=ramhiser,Algorithm=HMACSHA256,Signature=OIPTkauadMhOOTWJsoKcFMv7jAldNOz45pCDwYegmKI=' }
*/
```

## Tests

```
npm test
```

## License

The `aws-hmac` module is licensed under the
[MIT License](http://opensource.org/licenses/MIT) and is freely available for
commercial and non-commerical usage. Please consult the licensing terms in the
`LICENSE` file for more details.
