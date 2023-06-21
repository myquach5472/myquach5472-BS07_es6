function User(_id, _name, _address, _email,_math,_physics,_chem,_ngay,_luong,_company,_receipt,_rating) {
    this.id = _id;
    this.name = _name;
    this.address = _address;
    this.email = _email;
    this.math = _math;
    this.physics = _physics;
    this.chem = _chem;
    this.avg = function() {
      return (this.math + this.physics + this.chem) / 3;
    };
    this.ngay = _ngay;
    this.luong = _luong;
    this.tong = function() {
      return this.ngay * this.luong;
    };
    this.company = _company;
    this.receipt = _receipt;
    this.rating = _rating;
  }
