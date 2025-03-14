let employees = [];
function addEmployee() {
    let id = Number(prompt("Nhập id nhân viên mới"));
    let name = prompt("Nhập tên nhân viên mới");
    let position = prompt("Nhập chức vụ nhân viên mới");
    let salary = Number(prompt("Nhập lương nhân viên mới"));
    employees.push({id: id, name: name, position: position, salary: salary});

    
}
function displayListEmployee() {
    console.log("Danh sách nhân viên:");
    employees.forEach(person => {
        console.log(`
        ID: ${person.id}
        Name: ${person.name}
        Chức vụ: ${person.position}
        Lương: ${person.salary}
        `);
    });
}
function removeEmployee() {
    let id = Number(prompt("Nhập id nhân viên muốn xóa"));
    let index = employees.findIndex(item => item.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
    }else {
        console.log("Không tìm thấy ID"); 
    }
    
}
function updateSalary() {
    let id = Number(prompt("Nhập id nhân viên sửa lương"));
    let index = employees.findIndex(item => item.id === id);
    let salaryUpdate = Number(prompt("Nhập lương muốn cập nhật"));
    employees[index].salary = salaryUpdate;

}

function findName() {
    let word = prompt("Nhập tên muốn tìm").toLocaleLowerCase();
    let result = employees.filter(person => person.name.toLowerCase().includes(word));
    if (result.length === 0) {
        console.log("Không tìm thấy tên nhân viên");
        
    }else {
        console.log("Nhân viên được tìm thấy:");
            result.forEach(person => {
        console.log(`
        ID: ${person.id}
        Name: ${person.name}
        Postion: ${person.postion}
        Salary: ${person.salary}
        `); 
            }
        )
    }
}
function exitMenu() {
    return;
}
let choice;
do {
    choice = Number(prompt(`
        1. Thêm nhân viên mới
        2. Xóa nhân viên theo id
        3. Cập nhật mức lương 
        4. Tìm kiếm nhân viên
        5. Hiển thị danh sách sinh viên
        6. Thoát
        Vui lòng nhập lựa chọn
        `));
    switch (Number(choice)) {
        case 1:
            addEmployee();
            break;
        case 2:
            removeEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            findName();
            break;
        case 5:
            displayListEmployee();
            break;
        case 6:
            break;
        default:
            break;
    }
} while (choice !== 6);