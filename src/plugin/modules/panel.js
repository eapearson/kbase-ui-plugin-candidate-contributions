define([

], function (

) {
    'use strict';
    class Panel {
        constructor(params) {
            this.runtime = params.runtime;
            this.hostNode = null;
            this.container = null;
        }

        attach(node) {
            this.hostNode = node;
            this.container = node.appendChild(document.createElement('div'));
        }

        start(params) {
            this.container.innerHTML = 'Hi';
        }

        stop() {

        }

        detach() {

        }
    }

    return Panel;
});