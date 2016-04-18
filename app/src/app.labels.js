var APP = APP || {};

APP.labels = {

    list: [],

    init() {
        $('form').on('submit', (e) => {
            e.preventDefault();
            APP.labels.add();
        });
    },

    add() {
        var value = $('input').val();

        if (!value) {
            return alert('Label name must be filled in');
        }

        $('input').val('').focus();

        APP.labels.append(value);
        APP.labels.list.push(value);
    },

    append(value) {
        $('<li class="list-group-item"></li>')
            .text(value)
            .appendTo( $('ol') );
    }
};



// how OOP really is
// https://pbs.twimg.com/media/CY3VcpdUkAE9dum.png:large
