export default class LocalStorage {

	setValue(key, value) {
		window.localStorage.setItem(key, value.toString());
	}

	getValue(key) {
		return window.localStorage.getItem(key) || "";
	}
	
}
