document.querySelectorAll('.cardapio').forEach(el => el.addEventListener('click', handleClick))


function handleClick(e) {
  e.preventDefault();
  const target_classes = e.currentTarget.classList
  
  const isOpen = target_classes.contains('dropdown_open');
  
  if(isOpen){
    target_classes.remove('dropdown_open')
  }else{
    target_classes.add('dropdown_open')
  }
  
}