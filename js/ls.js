function save(name, item) {
    localStorage.setItem(name, item);
}

function get(name) {
    return localStorage.getItem(name);
}