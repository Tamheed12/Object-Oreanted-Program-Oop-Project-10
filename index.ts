import inquirer from "inquirer";



class Student
{
    name:string;
    constructor(n:string)
    {
        this.name=n;
    }
};

class person
{
    students:Student[]=[];
    addstudent(object:Student)
    {
        this.students.push(object)
    }
}

let persons= new person();

const start=async(persons:person)=>
{
    console.log(`Welcome`);
    
    let ans=await inquirer.prompt
    (
        {
            name:'select',
            type:'list',
            message:'Whom would you like tointerract with?',
            choices:['Staff','Student','Exit']
        }
    );
    if(ans.select==='Staff')
        {
            console.log(`You approach Staff room. Please feel free to ask any questan`)
        } 
    else if(ans.select==='Student')
    {
        let ans=await inquirer.prompt
        (
            {
                name:'student',
                type:'input',
                message:'Enter student name you wish to engage with:    '
            }
        );
        let student=persons.students.find(val=>val.name===ans.student)
    
        if(!student)
            {
                let name=new Student(ans.student)
                persons.addstudent(name)
                console.log(`Hello i am ${name.name} nice to meet you.`)
                console.log(`new student added`);
                console.log(`current student list`);
                console.log(persons.students)
            }
            else
            {
                console.log(`Hello i am ${student.name} nice to meet you again`)
                console.log(`existing student list`);
                console.log(persons.students)
            }
    }
    else if(ans.select==='Exit')
    {
        console.log(`Exiting......`)
    }
}


start(persons)