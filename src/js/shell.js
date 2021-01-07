//////////////////////////////////////////////////////////////
//	shell.js												//
//	version 0.1.0											//
//															//
//	shell.js is a small JS library with utility functions	//
//////////////////////////////////////////////////////////////

const Shell = {}

/////////////////////
// Debug & Logging //
/////////////////////

Shell.logging = false

/////////////
// Storage //
/////////////

Shell.storage = window.localStorage

Shell.storeItem = function(identifier, value) {
	if(this.logging) { console.log('stored "' + value + '" with key "' + identifier + '"') }
	this.storage.setItem(identifier, value)
}

Shell.fetchItem = function(identifier) {
	if(this.logging) { console.log('retrieved key "' + identifier + '"') }
	return this.storage.getItem(identifier)
}

//////////////////////
// DOM Manipulation //
//////////////////////

Shell.find = function(string) {
	let node = document.querySelector(string)

	return node
}

///////////
// Event //
///////////

Shell.addEvent = function(type, element, callback) {
	element.addEventListener(type, (e) => {
		callback(e)
	})
}

////////////
// Export //
////////////

export {
	Shell as Shell
}
