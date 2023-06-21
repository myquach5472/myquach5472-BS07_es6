  function User(id, name, address, email, math, physics, chem, daysWorked, salaryRate, company, receipt, rating) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.math = math;
    this.physics = physics;
    this.chem = chem;
    this.avg = function() {
      return (this.math + this.physics + this.chem) / 3;
    };
    this.daysWorked = daysWorked;
    this.salaryRate = salaryRate;
    this.totalSalary = function() {
      return this.daysWorked * this.salaryRate;
    };
    this.company = company;
    this.receipt = receipt;
    this.rating = rating;
  }