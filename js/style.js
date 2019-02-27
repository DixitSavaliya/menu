mdc.autoInit();
var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
	drawer.open = !drawer.open;
});
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText3'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText4'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText5'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText6'));
const dialog2 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog2'));
$('#signup').on('click',function(evt){
	dialog2.open();
});
function signup(){
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var pwd = document.getElementById('pwd').value;
	console.log("FirstName=====>" , fname);
	console.log("LastName=====>", lname);
	console.log("Email========>", email);
	console.log("Password =>" , pwd);
}
const m = window.mdc.menu;
const btn = document.querySelector('#menu1');

const menu = new m.MDCMenu(document.querySelector('.mdc-menu'));
menu.setAnchorCorner(m.Corner.TOP_RIGHT)
menu.setAnchorElement(document.querySelector('#menu1'));

btn.addEventListener('click', () => {
	menu.open = !menu.open;
});

mdc.textField.MDCTextField.attachTo(document.querySelector('.fname'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.lname'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.email'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));

const snackbar = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));
$('#btn-1').on('click',function(evt){
	
	snackbar.open();
})