function openNav(): void{
  const $div: HTMLElement | null = document.getElementById('idSideNav');
  if($div !== null) {
    const windowWidth: number = window.innerWidth;
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'scroll';
    //if(windowWidth > 1024) $div.style.width = '35%';
    //else $div.style.width = '100%';
    $div.style.width = '100%'
  }
}

function closeNav(): void{
  const $div: HTMLElement | null = document.getElementById('idSideNav');
  if($div !== null) {
    document.body.style.position = 'static';
    document.body.style.overflowY = 'auto';
    $div.style.width = '0';
  }
}

function initNav(): void {
  const $openMenu: HTMLElement | null = document.getElementById('idOpenMenuMobile');
  const $closeMenu: HTMLElement | null = document.getElementById('idCloseMenuMobile');

  if($openMenu !== null){
    $openMenu.addEventListener('click', () => openNav())
  }

  if($closeMenu !== null){
    $closeMenu.addEventListener('click', () => closeNav())
  }
}

document.addEventListener('DOMContentLoaded', initNav);