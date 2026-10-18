function showMemberCard(name, age, email, Phone, Category) {
    let member = ["Fahim", "Basic "];
    console.log("member:");
    
    for (let i = 0; i < member.length; i++) {
        console.log(member[i]);
    }
    
    document.getElementById("output").innerHTML =
        "<h2>Library Membership</h2>" +
        "Name: " + name + "<br>" +
        "Age:" + age + "<br>" +
        "Email:" + email + "<br>" +
        "Phone:" + Phone + "<br>" +
        "Category:" + Category + "<br><br>" +
        "Status:" + (age <= 13 ? "Junior" : "Regular") + "<br><br>" +
        "<b>member:</b><br>" + member.join("<br>");
}

document.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
       
    let Phone = document.getElementById("Phone").value;
    let Category = document.querySelector('input[name="Category"]:checked').value;
    
    showMemberCard(name, age, email, Phone, Category);
});
