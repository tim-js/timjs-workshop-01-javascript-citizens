var APP = APP || {};

APP.dialog = {

    warning(msg) {
        BootstrapDialog.show({
            message: msg,
            type   : BootstrapDialog.TYPE_WARNING
        });
    },

    success(msg) {
        BootstrapDialog.show({
            message: msg,
            type   : BootstrapDialog.TYPE_SUCCESS
        });
    }

};
