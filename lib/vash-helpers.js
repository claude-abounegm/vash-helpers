'use strict';

const path = require('path');
const fs = require('fs');

const _ = require('lodash');
const vash = require('vash');

const _loadFile = vash.loadFile;
/**
 * Support for multiple folder as views src
 */
vash.loadFile = function(filePath, opts, cb) {
    const settings = _.clone(opts.settings);

    if (_.isArray(settings.views)) {
        const ext = settings['view engine'] || 'vash';

        filePath = path.normalize(filePath);
        if (!path.extname(filePath)) {
            filePath = `${filePath}.${ext}`;
        }

        for (let view of settings.views) {
            view = path.normalize(view);

            if (!path.isAbsolute(filePath)) {
                try {
                    const _filePath = path.join(view, filePath);
                    if (fs.statSync(_filePath).isFile()) {
                        filePath = _filePath;
                        break;
                    }
                } catch (e) {}
            }
        }

        // we found the file, so let vash load it
        // and don't confuse vash with the views field
        delete settings.views;
    }

    _loadFile(filePath, { ...opts, settings }, cb);
};

const { helpers } = vash;

helpers.script = function(opts) {
    let src;

    if (_.isString(opts)) {
        src = opts;
    } else if (_.isPlainObject(opts)) {
        const { dev, prod } = opts;

        if (dev && process.env.NODE_ENV === 'development') {
            src = dev;
        } else if (prod) {
            src = prod;
        } else {
            throw new Error('invalid src');
        }
    }

    return helpers.raw(`<script src="${src}"></script>`);
};
