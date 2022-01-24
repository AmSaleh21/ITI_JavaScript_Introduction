function Contact(name, phone) {
    this.name = name;
    this.phone = phone;
    this.showDetails = function () {
        alert("name : " + this.name + "phone : " + this.phone);
    }
}

var phoneBook = {
    contacts: [],
    addEntry: function () {
        var newEntry = new Contact("", "");
        newEntry.name = prompt("enter the name");
        newEntry.phone = prompt("enter the phone");
        phoneBook.contacts.push(newEntry);
    },
    searchEntry: function () {
        var searchItem = prompt("looking for?")
        for (var i = 0; i < this.contacts.length; i++) {
            if (searchItem == this.contacts[i].name ||
                searchItem == this.contacts[i].phone) {
                this.contacts[i].showDetails();
                break;
            }
        }
    },
    run: function () {
        var stop = true;
        do {
            var op = prompt("what do you want (add,search,exit)");
            switch (op) {
                case "add":
                    phoneBook.addEntry();
                    break;
                case "search":
                    phoneBook.searchEntry();
                    break;
                case "exit":
                    stop = false;
                    break;
            }
        } while (stop)
    }
}

phoneBook.run();