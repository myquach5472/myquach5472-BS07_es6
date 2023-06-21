// User list
var arrUser = [];

// render--------------------------------------
function renderUser() {
  var content = "";

  for (var i = 0; i < arrUser.length; i++) {
    var user = arrUser[i];
    var avg = user.avg();
    var tong = user.tong();
    content += `
<tr>
<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.address}</td>
<td>${user.email}</td>
<td>Math: ${user.math}<br>Physics: ${user.physics}<br>Chem: ${user.chem}<br>Avg: ${avg}</td>
<td>Days Worked: ${user.ngay}<br>Salary Rate: ${user.luong}<br>Tổng Lương: ${tong}</td>
<td>Company: ${user.company}<br>Giá Trị GT: ${user.receipt}<br>Rating: ${user.rating}</td>
<td><button onclick="delUser('${user.id}')" class="btn btn-danger mb-1">Xóa</button>
<button data-toggle="modal" data-target="#myModal" onclick="edituser('${user.id}')" class="btn btn-warning text-white">Đổi</button></td>
</tr>
`;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
// ------------------------------------------------

function addUser() {
  var user = getInputs();
  if (user) {
    arrUser.push(user);
    renderUser();
    // reset
    autoEnterInputs("", "", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNV").onclick = addUser;

// delete function------------------------------------
function delUser(taiKhoan) {
  var index = findUser(taiKhoan);
  if (index != -1) {
    arrUser.splice(index, 1);
    renderUser();
  }
}

//edit function---------------------------------------
function editUser(taiKhoan) {
  document.getElementById("btnCapNhat").style.display = "inline-block";
  document.getElementById("id").readOnly = true;

  var index = findUser(taiKhoan);
  var user = arrUser[index];

  autoEnterInputs(
    user.taiKhoan,
    user.name,
    user.email,
    user.password,
    user.ngayLam,
    user.luong,
    user.chucVu,
    user.gioLam
  );
  renderUser();
}

// update function (editing)
function updateUser() {
  var fixedUser = getInputs();
  var index = findUser(fixedUser.taiKhoan);
  arrUser[index] = fixedUser;
  renderUser();
}

document.getElementById("btnCapNhat").onclick = updateUser;
