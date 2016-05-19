$(document).ready(() => {
    init();
    addUser('George', 23);
    addUser('Adriana', 13);
    addUser('Mihai', 19);
});

function init() {
    $('form').on('submit', e => e.preventDefault());

    $('#new-user').on('submit', e => newUser());
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

    // create a user object & store it

    var content = '<strong>'+name+'</strong> ('+age+')';

    $('<li class="list-group-item"></li>')
        .html(content)
        .appendTo( $('ol') );
}

