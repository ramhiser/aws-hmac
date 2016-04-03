var expect = require('chai').expect,
    aws_hmac = require('../index'),
    generate_signature = aws_hmac.generate_signature;

describe('Generate AWS Signature', function() {
    aws_access_id = "ramhiser"
    aws_secret_key = "FLUFFY BUNNIES"
    aws_signature = generate_signature(aws_access_id, aws_secret_key);

    it('Has the correct keys', function() {
        expect(aws_signature).to.have.all.keys('Date', 'X-Amzn-Authorization');
    });

    it('Has a valid Date', function() {
        signature_date = aws_signature['Date'];
        parsed_date = Date.parse(signature_date);
        expect(signature_date).to.be.a('string');
        expect(parsed_date).to.be.a('number');
    });

    it('Has a valid Authorization signature', function() {
        auth_signature = aws_signature['X-Amzn-Authorization'];
        expect(auth_signature).to.be.a('string');
        expect(auth_signature).to.have.string(aws_access_id);
        expect(auth_signature).to.have.string('AWS3-HTTPS');
        expect(auth_signature).to.have.string('AWSAccessKeyId');
        expect(auth_signature).to.have.string('Algorithm=HMACSHA256');
    });
});
