var APP = APP || {};

APP.labels = {

    list: ['primitives', 'arrays', 'objects'],

    init() {
        $('form').on('submit', (e) => {
            e.preventDefault();
            this.add();
        });

        this.list.forEach(name => this.append(name));
    },

    add() {
        var value = $('input').val();

        // if (!value) {
        //     APP.dialog.warning('Label name must be filled in');
        //     return;
        // }

        this.append(value);
        $('input').val('').focus();

        // APP.dialog.success('Label "'+value+'" was added');
    },

    append(value) {

        this.list.push(value);

        $('<li class="list-group-item"></li>')
            .text(value)
            .appendTo( $('ol') )
    }
};

$(document).ready(() => {
    APP.labels.init();
});


// how OOP really is
// https://pbs.twimg.com/media/CY3VcpdUkAE9dum.png:large