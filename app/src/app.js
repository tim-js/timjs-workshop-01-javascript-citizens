var users = [];

function init() {
    $('form').on('submit', e => e.preventDefault());

    $('#new-user').on('submit', e => newUser());
    $('#count-users').on('click', e => countUsers());
    $('#sort-by-age').on('click', e => sortByAge());
}

function countUsers() {
    var minAge   = $('#min-age').val(),
        filtered = users.filter(user => user.age > minAge);

    console.log(filtered.length);
}

function sortByAge() {
    var sorted = users.sort((a, b) => a.age - b.age);
    var ages   = sorted.map(user => user.age);
    console.log(ages);
}

function newUser() {
    var name = $('#name').val(),
        age  = $('#age').val();

    if (!name || !age) {
        return alert('Both Name & Age are required');
    }

    $('#age').val('');
    $('#name').val('').focus();

    addUser(name, age);
}

function addUser(name, age) {
    var user = new User(name, age);

    users.push(user);

    var content = '<strong>'+name+'</strong> ('+age+')';

    $('<li class="list-group-item"></li>')
        .html(content)
        .appendTo( $('ol') );
}

function User(name, age) {
    this.name = name;
    this.age  = age;
}

$(document).ready(() => {
    init();
    addUser('George', 23);
    addUser('Adriana', 13);
    addUser('Mihai', 19);
});
