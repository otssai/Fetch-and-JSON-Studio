// TODO: add code here

window.addEventListener('load', function(){
  fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
    response.json().then(function(json) {
        const destination = document.getElementById('container');
        
        for(let item in json) {
          destination.innerHTML +=`
            <div class="astronaut">
              <div class="bio">
                <h3>${json[item].firstName} ${json[item].lastName}</h3>
                <ul>
                  <li>Hours in space: ${json[item].hoursInSpace}</li>
                  <li>Active: ${json[item].active}</li>
                  <li>Skills: ${json[item].skills.join(", ")}</li>
                </ul>
              </div>
              <img class="avatar" src=${json[item].picture}>
            </div>
          `;
        }
        destination.innerHTML += `astronaut count: ${json.length}`;
    });
  });  
});