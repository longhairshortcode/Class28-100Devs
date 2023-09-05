//on 9/5

//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  
  // Clear the ul/li when you click:
  document.querySelector('ul').innerHTML = '';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data.subclasses)

       data.subclasses.forEach( obj => {console.log(obj.name)
        const li = document.createElement('li')
        li.textContent = obj.name
        document.querySelector('ul').appendChild(li)
    }) 

    //    document.querySelector('ul').appendChild(li) = data.subclasses[0]
    //    document.querySelector('ul').appendChild(li) = data.subclasses[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//new edit 9/5























//Before 9/5

//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}/`

  document.querySelector('ul').innerHTML = '';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.classes)
        // console.log(data.subclasses[0].name)
        // console.log(data.subclasses[1].name)
        data.subclasses.forEach(obj => {
            console.log(obj.name)
            // create an li
            const li = document.createElement('li')
            // add text to li
            li.textContent = obj.name
            //appened the li to the ul
            document.querySelector('ul').appendChild(li)
      });
    })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

