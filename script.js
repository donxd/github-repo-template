
function createShortcutNewRepo () {
	document.onkeydown = (event) => {
		if (event.keyCode === 90 && event.ctrlKey) redirectNewRepo();
	};
}

function start () {
	createShortcutNewRepo();
	detectNewRepoPage();
}

function detectNewRepoPage () {
	if (isNewRepoPage()) {
		fillDataRepo();
	}
}

function isNewRepoPage () {
	return window.location.href === 'https://github.com/new';
}

function fillDataRepo () {
	setTimeout(() => {
		const nameRepo = document.querySelector('#repository_name');
		nameRepo.focus();
		document.execCommand('paste');
		console.log('name : ', nameRepo.value);
		setTimeout(() => {
			document.querySelector('#repository_description').focus();
			const type = document.querySelector('[id="repository_license_template_gpl-3.0"]');
			type.click();
			const sendButton = document.querySelector('.js-with-permission-fields button[type=submit]')
			sendButton.disabled=false;
			sendButton.focus();
		}, 500);
	}, 1500);
}

function redirectNewRepo () {
	// chrome.tabs.create({url: 'https://github.com/new'});
	// window.open('https://github.com/new');
	window.location = 'https://github.com/new';
}

start();