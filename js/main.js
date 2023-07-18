const navbarToggle = document.querySelector('.navbar-toggler');
const navbarOverlay = document.querySelector('#navbarOverlay');

navbarToggle.addEventListener('click', function () {
    navbarOverlay.classList.toggle('show');
});

function showAllProducts() {
    document.getElementById('categoryTitle').textContent = 'Tất cả điện thoại';
    document.getElementById('iphoneProducts').classList.add('d-none');
    document.getElementById('samsungProducts').classList.add('d-none');
    document.getElementById('allProduct').classList.remove('d-none');
}

function showIphoneProducts() {
    document.getElementById('categoryTitle').textContent = 'Điện thoại iPhone';
    document.getElementById('iphoneProducts').classList.remove('d-none');
    document.getElementById('samsungProducts').classList.add('d-none');
    document.getElementById('allProduct').classList.add('d-none');
}

function showSamsungProducts() {
    document.getElementById('categoryTitle').textContent = 'Điện thoại Samsung';
    document.getElementById('iphoneProducts').classList.add('d-none');
    document.getElementById('samsungProducts').classList.remove('d-none');
    document.getElementById('allProduct').classList.add('d-none');
}

function validateForm() {
    var firstName = document.getElementById("name").value;
    if (firstName === "") {
        alert("Name cannot be empty");
        return false;
    }
    

    // var lastName = document.getElementById("lname").value;
    // if (lastName === "") {
    //     alert("Last Name cannot be left blank");
    //     return false;
    // }

    var email = document.getElementById("emailAddress").value;
    var emailRegex = /\S+@\S+\.\S+/;
    if (email === "" || !emailRegex.test(email)) {
        alert("Invalid email.");
        return false;
    }

    // var mobileNo = document.getElementById("mobile").value;
    // var mobileRegex = /^\d{3}-\d{3}-\d{4}$/;
    // if (mobileNo === "" || !mobileRegex.test(mobileNo)) {
    //     alert("Invalid Mobile No (format: 123-456-7890).");
    //     return false;
    // }
    // var interests = document.querySelectorAll("input[name='java'], input[name='csharp'], input[name='html'], input[name='css']");
    // var checkedInterests = Array.prototype.slice.call(interests).some(function (interest) {
    //     return interest.checked;
    // });
    // if (!checkedInterests) {
    //     alert("You must select at least one option in Choose preferences.");
    //     return false;
    // }
    var firstName = document.getElementById("message").value;
    if (firstName === "") {
        alert("Message cannot be empty");
        return false;
    }

    alert("Thank you!");
    return true;
}