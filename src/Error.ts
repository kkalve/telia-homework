const errorContainer = document.getElementById('error');

export default class Error {
    static show(message: string) {
        errorContainer.innerHTML = message;
    }
}
