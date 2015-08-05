var Contact = {};

Contact.parseName = function(str) {
	var parts = str.split(','); 
	return parts[0]; 
}

Contact.parseNumber = function(str) {
	var parts = str.split(',');
	return parts[1];
}

Contact.createContact = function(str) {
	var contact = {
		name : this.parseName(str),
		number : this.parseNumber(str)
	}
	return contact;
}

Contact.loadContacts = function(done) {
	var jsonfile = require("jsonfile");
	jsonfile.readFile('data.json', function(err,data) {
		done(err, data)
	});
}


Contact.saveContacts = function(contactArray, done) {
	var jsonfile = require('jsonfile');
	jsonfile.writeFile('data.json',contactArray,done) ;
}

module.exports = Contact;
