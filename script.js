//complete this code
class Person {
	 constructor(name, age) {
        this._name = name;
        this._age = age;
    }

	getName(){
		return this._name;
	}
	setAge(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
	study() {
        console.log("studying");
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
