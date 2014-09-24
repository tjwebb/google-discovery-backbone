var _ = require('lodash');
var assert = require('assert');

describe('google-discovery-backbone', function () {
  var DiscoveryBackbone = require('./');
  var fixtures = require('google-discovery-document/test/fixtures/valid');

  describe('#generate', function () {
    it('should generate backbone models', function (done) {
      this.timeout(60 * 1000);
      DiscoveryBackbone.generate(fixtures.xtuple460)
        .then(function (orm) {
          assert(_.isArray(orm.models));
          assert(orm.models.length > 0, 'orm.models is empty');

          done();
        })
        .catch(done);
    });
    it('result should be parseable', function () {

    });
  });
});
