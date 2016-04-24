var APP = APP || {};

APP.stats = {

    update(nr) {
        $('#nr').text(nr);
    }

};

APP.pubsub.subscribe('addLabel', (nr) => {
	APP.stats.update(nr);
});