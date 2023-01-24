
// class Point {
//     x!: number;
//     y: number = 0;
// }

// const pi = new Point();
// pi.x = 8;
// pi.y = 9

// console.log(`x = ${pi.x} \n y = ${pi.y}`);


// class Point {
//     name !: string;

//     constructor (name: string){
//         this.name = name;
//         console.log(`Welcome ${name}`)
//     }
// }

// new Point("Hamza");

class Panaverse {
    sectionName!: string;
    studentCount!: number;
    city!: string;
    
    constructor (section: string, students: number, city: string){
        this.sectionName = section;
        this.studentCount = students;
        this.city = city;
    }
}

const panaverse1 = new Panaverse("Section A", 500, "Lahore");
const panaverse2 = new Panaverse("Section B", 600, "Karachi");

console.log(`${panaverse1.sectionName} ${panaverse1.studentCount} ${panaverse1.city} \n ${panaverse2.sectionName} ${panaverse2.studentCount} ${panaverse2.city}`);
