const Loading = require('mofron-comp-sploading');
const Fade    = require('mofron-effect-fadepack');
const ConfArg = mofron.class.ConfArg;
let loading   = new Loading({ effect: new Fade(500) });

let exists = () => {
    try {
        let r_chd    = mofron.root[0].child();
        let is_exist = false
        for (let ridx in r_chd) {
            if (r_chd[ridx].id() === loading.id()) {
                is_exist = true;
                break;
            }
        }
        return is_exist;
    } catch (e) {
        console.error(e.stack);
        throw e;
    }
}


module.exports = {
    show: (msg) => {
        try {
	    if (false === exists()) {
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
	    if (false === exists()) {
                return;
            }
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
