var MyParrot = require('./parrot');

var Contact = require('./contact');

var name = Contact.parseName("John Smith, 999-999-9999");

var number = Contact.parseNumber("John Smith, 999-999-9999");

var contact = Contact.createContact("Dileep Singh,829-7485-333");

Contact.loadContacts(function(err,data) {
	console.log(data);
})


var contacts = [{ name: "John Smith", number:"827-78485333"}];

Contact.saveContacts(contacts, function(err){
	console.log('success');
})

console.log(name);

console.log(number);

console.log(MyParrot.speakEnglish() );

console.log(MyParrot.speakSpanish() );
