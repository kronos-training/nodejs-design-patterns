class Employee {
  constructor(name, salary, message) {
    this.name = name;
    this.salary = salary;
    this.message = message;
  }

  payDay(value) {
    this.salary += value;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Employee;