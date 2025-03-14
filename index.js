const Loading = require('mofron-comp-sploading');
const Fade    = require('mofron-effect-fadepack');
const Rotate  = require('mofron-effect-rotate');
const ConfArg = mofron.class.ConfArg;
let loading   = new Loading({ effect: new Fade(500) });

const thisobj = {
    visible: (prm) => {
        try {
            if (true === prm) {
                thisobj.show();
	    } else if (false === prm) {
                thisobj.hide();
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    },
    show: (msg) => {
        try {
	    let r_chd = mofron.root[0].child();
	    let is_exist = false
	    for (let ridx in r_chd) {
                if (r_chd[ridx].id() === loading.id()) {
                    is_exist = true;
                    break;
		}
	    }
	    if (false === is_exist) {
                mofron.root[0].child(loading);
	    }
	    loading.text(msg);
	    loading.visible(true);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    },
    hide: () => {
        try {
            loading.visible(false);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    },
    config: (prm) => {
        try {
            loading.config(prm);
	} catch (e) {
            console.error(e.stack);
	                throw e;

	}
    }
};
module.exports = thisobj;
