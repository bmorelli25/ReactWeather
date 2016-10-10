const moment = require('moment');

const API_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

module.exports = {

	getDate: function (dateTimeString) {
		const date = moment(dateTimeString, API_DATE_FORMAT);
		return date;
	},

	getDayDateLabel: function (dateTimeString) {
		const date = this.getDate(dateTimeString);
		return date.format('dddd, MMM D');
	},

	getDayLabel: function (dateTimeString) {
		const date = this.getDate(dateTimeString);
		return date.format('dddd');
	},

	getDateLabel: function (dateTimeString) {
		const date = this.getDate(dateTimeString);
		return date.format('MMM D');
	}

};
