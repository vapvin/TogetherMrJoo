class Human {
    constructor(name, age, email, birthday, gender) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
    }

    show(){
        console.log(this.name);
        console.log(this.email);
        console.log(this.age);
        console.log(this.birthday);
        console.log(this.gender);
    }
}

const vins = new Human('vins', 22, 'vins@vins.dev', '0712', 'male');

vins.show();