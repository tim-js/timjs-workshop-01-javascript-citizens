var APP = APP || {};

APP.events = {

    types: {},

    subscribe(type, action) {
        var self = this;

        if ( !this.types.hasOwnProperty(type) ) {
            this.types[type] = [];
        }

        var index = this.types[type].push(action) - 1;

        return {
            remove() {
                self.types[type].splice(index, 1);
            }
        };
    },

    publish(type, data) {
        if (!this.types.hasOwnProperty(type)) {
            return;
        }
        this.types[type].forEach(action => {
            action(data);
        });
    }

};
