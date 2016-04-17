var APP = APP || {};

APP.labels = {

    list: ['xx', 'yy'],

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
        //     alert('Label name must be filled in');
        //     return;
        // }

        this.list.push(value);
        this.append(value);
        $('input').val('').focus();
    },

    append(value) {
        $('<li class="list-group-item"></li>')
            .text(value)
            .appendTo( $('ol') );
    }
};



// how OOP really is
// https://pbs.twimg.com/media/CY3VcpdUkAE9dum.png:large
