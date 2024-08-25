function openMobileMenu(): void{
  const $div: HTMLElement | null = document.getElementById('idSideNav');
  if($div !== null) {
    document.body.style.position = 'fixed';
    $div.style.width = '100%'
  }
}

function closeMobileMenu(): void{

  const $subMenuBoxes: NodeListOf<HTMLDivElement> = document.querySelectorAll('._sidenav_sub_menu_box');
  if($subMenuBoxes.length > 0){
    $subMenuBoxes.forEach(element => {
      removeVisibleSubMenu(element);
      addInvisibleSubMenu(element);
    })
  }

  const $div: HTMLElement | null = document.getElementById('idSideNav');
  if($div !== null) {
    document.body.style.position = 'static';
    document.body.style.overflowY = 'auto';
    $div.style.width = '0';
  }
}

function openAndCloseSubMenuMobile(buttonId: string): void {

  const buttonIdSplit: string[] = buttonId.split('');
  const buttonIdString: string = buttonIdSplit[buttonIdSplit.length -1];
  const $subMenuBoxes: NodeListOf<HTMLDivElement> = document.querySelectorAll('._sidenav_sub_menu_box');

  if($subMenuBoxes.length > 0){

    // open sub menu
    $subMenuBoxes.forEach(element => {

      const idSplit: string[] = element.id.split('');
      const idString: string = idSplit[idSplit.length -1];

      if(idString === buttonIdString){
        removeInvisibleSubMenu(element);
        setTimeout(() => addVisibleSubMenu(element), 150);
      }
      else{
        removeVisibleSubMenu(element);
        setTimeout(() => addInvisibleSubMenu(element), 150);
      }
    });
  }
}

function removeVisibleSubMenu(subMenu: HTMLDivElement): void {
  subMenu.classList.remove('visible');
  subMenu.classList.remove('max-h-fit');
  subMenu.classList.remove('opacity-100');
}

function removeInvisibleSubMenu(subMenu: HTMLDivElement): void {
  subMenu.classList.remove('invisible');
  subMenu.classList.remove('max-h-0');
  subMenu.classList.remove('opacity-100');
}

function addVisibleSubMenu(subMenu: HTMLDivElement): void {
  subMenu.classList.add('visible');
  subMenu.classList.add('max-h-fit');
  subMenu.classList.add('opacity-100');
}

function addInvisibleSubMenu(subMenu: HTMLDivElement): void {
  subMenu.classList.add('invisible');
  subMenu.classList.add('max-h-0');
  subMenu.classList.add('opacity-100');
}

function mobileNav(): void {

  const $openMobileMenu: HTMLElement | null = document.getElementById('idOpenMenuMobile');
  const $closeMobileMenu: HTMLElement | null = document.getElementById('idCloseMenuMobile');
  const $menuItemButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('._sidenav_menu_item > button');

  if($openMobileMenu !== null){
    $openMobileMenu.addEventListener('click', () => openMobileMenu())
  }

  if($closeMobileMenu !== null){
    $closeMobileMenu.addEventListener('click', () => closeMobileMenu())
  }

  if($menuItemButtons.length > 0){
    $menuItemButtons.forEach(button => {
      button.addEventListener('click', () => openAndCloseSubMenuMobile(button.id));
    })
  }
}

document.addEventListener('DOMContentLoaded', mobileNav);