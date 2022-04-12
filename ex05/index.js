class Microsoft{
constructor(name)
{this.name = name;}
get  getname(){
return this.name
}
set setname (newname){
this.name = newname;
}

  occupation(){
    var value;
    return  value = this.name + " is a philanthropist!";



}


}

class Facebook extends Microsoft{
    constructor(name, age)
    {  
        super(name);
        this.age = age;
    }
  studentAge()
{
    var value1;
    return value1 =  this.name + " is " + this.age;
}

}
let henry = new Microsoft("William Henry Gates III")
let elliot = new Facebook("Mark Elliot Zuckerberg", "23")
console.log(henry.occupation());
console.log(elliot.occupation());
console.log(elliot.studentAge());
module.exports = {
    Microsoft,
    Facebook
}