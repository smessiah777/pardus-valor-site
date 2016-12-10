import $ from 'jquery';

class SideMenu {
	constructor() {
	  this.siteHeader = $(".site-header");
	  this.menuIcon = $(".site-header__menu-icon");
	  this.menuIconSide = $(".site-header__menu-content--icon-side");
	  this.menuContent = $(".site-header__menu-content");
	  this.menuOverlay = $(".site-header__menu-overlay");
	  this.menuLink = $("#hero-link, #music-link, #video-link");
	  this.events();	
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		this.menuIconSide.click(this.toggleTheMenu.bind(this));
		this.menuLink.click(this.toggleTheMenu.bind(this));
	}



	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.menuOverlay.toggleClass("site-header__menu-overlay--is-visible");
	}

	keyPressHandler(e) {
		if (e.keyCode == 27)
			this.menuContent.toggleClass("site-header__menu-content--is-visible");
			this.menuOverlay.toggleClass("site-header__menu-overlay--is-visible");
		}

}

export default SideMenu;