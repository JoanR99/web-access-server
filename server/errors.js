class BaseError extends Error {
	constructor(message) {
		super();
		this.name = constructor.name;

		if (this instanceof UndefinedBodyRequest) {
			this.statusCode = 400;
		} else if (this instanceof InvalidType) {
			this.statusCode = 422;
		} else if (this instanceof ServerError) {
			this.statusCode = 500;
		} else if (this instanceof NotFound) {
			this.statusCode = 404;
		}

		this.message = message;
	}
}

class UndefinedBodyRequest extends BaseError {}

class InvalidType extends BaseError {}

class ServerError extends BaseError {}

class NotFound extends BaseError {}

module.exports = {
	UndefinedBodyRequest,
	InvalidType,
	ServerError,
	NotFound,
};
