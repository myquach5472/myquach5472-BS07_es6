
// Add User
function getInputs() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var math = document.getElementById("Math").value*1;
    var physics = document.getElementById("Physics").value*1;
    var chem = document.getElementById("Chem").value*1;
    var daysWorked = document.getElementById("DaysWorked").value*1;
    var salaryRate = document.getElementById("SalaryRate").value*1;
    var company = document.getElementById("Company").value;
    var receipt = document.getElementById("ReceiptValue").value*1;
    var rating = document.getElementById("Rating").value;
  
    var user = new User(_id, _name, _address, _email,_math,_physics,_chem,_ngay,_luong,_company,_receipt,_rating);
    tableList.push(user);

  }
  


  
  function autoEnterInputs(
    id, name, address, email, math, physics, chem, daysWorked, salaryRate, company, receipt, rating
  ) {
    // reset inputs
    document.getElementById("id").value= id;
       document.getElementById("name").value= name;
       document.getElementById("address").value= address;
       document.getElementById("email").value= email;
       document.getElementById("Math").value= math;
      document.getElementById("Physics").value= physics;
       document.getElementById("Chem").value= chem;
       document.getElementById("DaysWorked").value= daysWorked;
    document.getElementById("SalaryRate").value= salaryRate;
    document.getElementById("Company").value= company;
    document.getElementById("ReceiptValue").value= receipt;
    document.getElementById("Rating").value= rating;
  
  }
             
  //find position of the input
  function findUser(id) {
    var position = -1;
    arrUser.forEach(function (item, index) {
      if (item.id == id) {
        position = index;
      }
    });
    return position;
  }
  

