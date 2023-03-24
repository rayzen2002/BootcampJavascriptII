function show() {
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const listElement = document.getElementsByTagName('li')
  console.log(listElement)

  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)

  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
}
