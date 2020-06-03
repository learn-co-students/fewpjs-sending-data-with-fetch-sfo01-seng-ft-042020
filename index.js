// // Add your code here
function submitData(userName, email) {
  const destURL = 'http://localhost:3000/users'
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, 
    body: JSON.stringify({
      name: userName,
      email: email
    })
  }
  return fetch(destURL, configObj)
    .then(resp => resp.json())
    .then( obj => document.body.innerHTML = obj.id)
    .catch(function(err) {
      document.body.innerHTML = err.message;
      
    })
}
