/**
 * Created by john.nana on 9/22/2016.
 */

var fs = require("fs");
var path = require("path");
var _ = require("lodash");

var readDir = function (routerPath, modelPath, app) {
    /*
     *
     * Based on filenames, get existing route-level middlewares and dynamically load it
     *
     * */
    if (fs.existsSync(routerPath)) {
        fs.readdirSync(routerPath).forEach(function (file) {
            var filePath = path.join(routerPath, file);
            if (filePath.match(/\.js$/)) {
                var route = require("../" + filePath);
                app.use(route);
            }
            if (fs.lstatSync(filePath).isDirectory()) {
                return readDir(filePath, modelPath, app)
            }
        })
    }


}

module.exports = readDir.bind(null, "routes", "models");
