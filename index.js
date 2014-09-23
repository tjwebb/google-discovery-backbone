var WaterlineDiscovery = require('waterline-discovery-doc-import');
var SailsBackbone = require('sails-backbone');
var Waterline = require('waterline');
var Promise = require('bluebird');
var _ = require('lodash');

/**
 * Generate a Backbone Relational API from a Google Discovery Document
 * 
 * @param doc
 * @param [config] - optional waterline config object
 */
exports.generate = function (doc, config) {
  var waterline = new Waterline();
  _.defaults(config, {
      adapters: {
        memory: 'sails-memory'
      },
      connections: {
        sailsDiscovery: {
          adapter: 'memory'
        }
      }
    });
  var collections = WaterlineDiscovery.createCollections(doc);

  return new Promise(function (resolve, reject) {
    waterline.initialize(config, function (error, orm) {
      if (error) return reject(error);

      var sails = createSailsObject(doc, orm);
      return resolve(SailsBackbone.generate(sails));
    });
  });
};

/**
 * Manufacture a partially-hydrated sails object for sails-backbone
 */
function createSailsObject (doc, orm) {
  return {
    models: orm.collections,
    config: {
      blueprints: {
        prefix: doc.servicePath
      }
    }
  };
}
