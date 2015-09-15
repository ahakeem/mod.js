

define('index', function(require, exports, module) {

    module.exports = {
        init: function() {
            alert(1);
            bindEvent.click();
        }
    }

});


var bindEvent = {
    click : function() {
        $('#btn-click').on('click', function() {
            alert(2);
        });
    }
}