let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}



// search section=====================================================

function searchCandidates() {
    var location = document.getElementById("location").value;
    var jobRole = document.getElementById("job-role").value;

    // Here you can implement your logic to fetch candidates based on location and job role
    // You can use AJAX, fetch API, or any other method to make an API call to retrieve candidate data

    // For demonstration purposes, let's assume we have an array of candidate objects
    var candidates = [
      { name: "John Doe", location: "New York", role: "Software Engineer" },
      { name: "Jane Smith",location: "San Francisco",role: "Web Developer",},
      { name: "Sam verma",location: "Mumbai",role: "software Developer",},
      { name: "jai sharma",location: "Mumbai",role: "UI/UX developer",},
    ];

    var candidatesList = document.getElementById("candidates-list");
    candidatesList.innerHTML = "";

    if (candidates.length > 0) {
      for (var i = 0; i < candidates.length; i++) {
        var candidate = candidates[i];
        var listItem = document.createElement("div");
        listItem.classList.add("candidate-item");
        listItem.innerHTML =
          "<h3>" +
          candidate.name +
          "</h3><p>Location: " +
          candidate.location +
          "</p><p>Role: " +
          candidate.role +
          "</p>";

        candidatesList.appendChild(listItem);
      }
    } else {
      candidatesList.innerHTML = "<p>No candidates found.</p>";
    }
  }
