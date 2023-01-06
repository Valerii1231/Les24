
class User {
    #name;
    constructor(name, login, age) {
        this.name = name;
        this.login = login;
        this.age = age;
    }
    getName(isAdmin) {
        if (isAdmin == true && this.name == ' ') {
            return this.login;
        } else {
            if (isAdmin == true && this.name) {
                return this.name;
            } else {
                if (isAdmin == false) {
                    return 'Permission denied';
                }
            }
        }
    }
    changeName(pass) {
        if (pass === '123') {
            this.name = 'Bill';
            return `Changed from Mike to ${this.name}`;
        } else {
            return 'Permission denied';
        }
    }
}

let user1 = new User('Nike', 'MK_18', '18');
let user2 = new User(' ', 'NRG', '22');
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));

console.log(user1.changeName('123'));
console.log(user1.changeName('1235678'));

class Admin extends User {
    #isAdmin;
    constructor(name, login, age, isAdmin) {
        super(name, login, age);
        this.isAdmin = isAdmin;
    }
    getUserName(user) {
        return console.log(user.name);
    }
}
let admin = new Admin(true);
admin.getUserName(user1);


class Userr {
    #phone;
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    getPhone(isAdmin) {
        let arrPhone = this.phone.split('-');
        if (isAdmin === true) {
            return console.log(this.phone);
        }

        if (isAdmin === false) {
            for (let i = 0; i <= 3; i++) {
                if (i === 1) {
                    arrPhone[i] = '***';
                }
                if ( i === 2) {
                    arrPhone[i] = '**';
                }
            }
            this.phone = arrPhone.join('-');
            return console.log(this.phone);
        }
    }
}
user1 = new Userr('Mike', '067-888-88-99');
user2 = new Userr('Tom', '099-888-88-99');
user1.getPhone(true);
user2.getPhone(true);
user1.getPhone(false);
user2.getPhone(false);