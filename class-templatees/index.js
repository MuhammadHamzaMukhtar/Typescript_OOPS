// let arr:number[];
// let arr1: Array<number>;
// class Box<type> {
//     contents!: type;
//     constructor (value: type){
//         this.contents = value;
//     }
// }
// const a = new Box<string>("Hamza");
// console.log(a);
// const b = new Box<number>(5);
// console.log(b);
// const c = new Box<boolean>(true);
// console.log(c);
/////////////////////////////////////////////////////////////////////////////////////////////////////
// type Teacher = {
//     name: string;
//     age: number;
// }
// class Collection<type>{
//     contents: type;
//     name!:string;
//     constructor (result: type){
//         this.contents = result;
//     }
//     details(){
//     }
// }
// const coll = new Collection<string>("Hamza");
///////////////////////////////////////////////////////////////////
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher {
    name;
    subject;
    constructor(name, sub) {
        this.name = name;
        this.subject = sub;
    }
}
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Collection {
    collection = new Map();
    static idGenerator = 0;
    constructor(entries) {
        if (entries) {
            entries.map((entry) => {
                this.collection.set(++Collection.idGenerator, entry);
            });
        }
    }
    addItem(item) {
        this.collection.set(++Collection.idGenerator, item);
    }
    getItem(id) {
        return this.collection.get(id);
    }
    getAllItems() {
        return [...this.collection.values()];
    }
}
const student1 = new Student("hamza", 21);
const student2 = new Student("ali", 24);
const student3 = new Student("zia", 28);
const student4 = new Student("fahad", 15);
const studentsList = [student1, student2, student3, student4];
const studentCollection = new Collection(studentsList);
const getStudent = studentCollection.getItem(4);
const teacher1 = new Teacher("yasir", "naths");
const teacher2 = new Teacher("haris", "eng");
const teacher3 = new Teacher("haroon", "cs");
const teacher4 = new Teacher("bilal", "programming");
const teachersList = [teacher1, teacher2, teacher3, teacher4];
const teacherCollection = new Collection(teachersList);
console.log(teacherCollection);
export {};
