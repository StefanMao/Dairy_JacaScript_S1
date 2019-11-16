// Factory Design Pattern


function Developer (name,salary)
{
	this.name = name
	this.department ="研發部"
	this.salary= salary
}

function sales(name,salary)
{
	this.name = name
	this.department = "業務部"
	this.salary = salary
}

function Design (name,salary)
{
	this.name = name
	this.department ="設計部"
	this.salary =salary
}

function EmployeeFactory()
{
	this.create=(name, department, salary) =>{
		switch(department)
		{
			case 'Developer':
				return new Developer(name,salary)
				break
			case 'Sale':
				return new sales(name,salary)
				break
			case 'Design':
				return new Design(name,salary)
				break

		}
	}
}

function show_information()
{
	console.log("員工 : " +this.name +" 部門 :" +this.department + "薪水 :" +this.salary)
}

const employeeFactory = new EmployeeFactory()
const employees=[]

employees.push(employeeFactory.create("Jimmy", 'Developer' , 35000))
employees.push(employeeFactory.create("Shery", 'Sale' , 30000))
employees.push(employeeFactory.create("Mary",'Design' , 28000))
employees.push(employeeFactory.create("Hook",'Sale' , 31000))

employees.forEach( emp_info =>
	{
		show_information.call(emp_info)
	}
)

