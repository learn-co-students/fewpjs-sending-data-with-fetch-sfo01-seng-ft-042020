const submitData = (name, email) => {
  let formData = {
    name: name,
    email: email
  }
  
  let configObj = {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  }
  return fetch('http://localhost:3000/users', configObj)
  .then(res => res.json())
  .then(data => document.body.innerHTML = data[ "id" ])
  .catch(err => document.body.innerHTML = err.message);
}
