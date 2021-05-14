const crypto = require('crypto');

class OrderNumberGenerator {
	static generateUniqueNumber(len = 12) {
		return crypto.randomBytes(Math.ceil(len / 2))
			.toString('hex').slice(0, len);
	}
}

module.exports = OrderNumberGenerator;
