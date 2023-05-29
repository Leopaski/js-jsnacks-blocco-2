function createList(){
    const li=document.createElement('li')
    return li;
}
const ulElement=document.querySelector('ul');
ulElement.appendChild(createList());
