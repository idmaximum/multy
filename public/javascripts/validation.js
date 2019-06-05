var Valid = {
    form: (formId) => {
        var count = 0;
        var elements = document.getElementById(formId).querySelectorAll("[required]");

        Valid.clear();

        for (var i = 0, len = elements.length; i < len; ++i) {

            if (elements[i].value != '') continue;
            var span = document.createElement('span'),
                msg = elements[i].getAttribute('data-msg');
            if (msg == null) msg = 'กรุณาป้อนข้อมูลช่องนี้';
            span.className = 'help-block required-field text-danger'
            span.innerHTML = msg;
            elements[i].parentElement.appendChild(span);
            count++;
        }

        var results = (count > 0) ? false : true;

        return results;
    },

    clear: () => {
        var block = document.getElementsByClassName("help-block required-field text-danger");
        for (var i = 0, len = block.length; i < len; i++) {
            block[0].remove();
        }
    }

}
