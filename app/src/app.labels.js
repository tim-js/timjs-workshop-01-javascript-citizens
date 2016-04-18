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

        APP.labels.list.push(value);
        APP.labels.append(value);
    },

    append(value) {
        $('<li class="list-group-item"></li>')
            .text(value)
            .appendTo( $('ol') );
    }
};
