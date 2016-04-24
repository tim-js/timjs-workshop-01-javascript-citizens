var APP = APP || {};

APP.pubsub = {

	types: {
		// 'eventName': [
		// 	(info) => { console.log(info); },
		// 	(info) => { alert(info); }
		// ]
	},

	publish(type, info) {
		if ( !APP.pubsub.types.hasOwnProperty(type) ) {
			return;
		}

		APP.pubsub.types[type].forEach((action) => {
			action(info);
		});
	},

	subscribe(type, action) {
		if ( !APP.pubsub.types.hasOwnProperty(type) ) {
			APP.pubsub.types[type] = [];
		}
		APP.pubsub.types[type].push(action);
	}
};


// APP.pubsub.subscribe('eventName', (info) => {
// 	console.log('subscribed to ', info);
// });

// APP.pubsub.publish('eventName', 123);
