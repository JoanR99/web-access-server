class UndefinedBodyRequest extends Error {
	constructor(message) {
		super();
		this.name = constructor.name;

		this.message = message;
		this.status = 400;
	}
}

class InvalidType extends Error {
	constructor(message) {
		super();
		this.name = constructor.name;

		this.message = message;
		this.status = 422;
	}
}

module.exports = {
	UndefinedBodyRequest,
	InvalidType,
};
