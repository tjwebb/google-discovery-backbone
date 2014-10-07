var _ = require('lodash');
var assert = require('assert');

describe('google-discovery-backbone', function () {
  var DiscoveryBackbone = require('./');
  var fixtures = require('google-discovery-document/test/fixtures/valid');

  describe('#generate', function () {
    var modelCount = 0;
    it('should generate backbone models', function (done) {
      this.timeout(60 * 1000);
      DiscoveryBackbone.generate(fixtures.xtuple460)
        .then(function (orm) {
          assert(_.isArray(orm.models));
          assert(orm.models.length > 0, 'orm.models is empty');
          modelCount = orm.models.length;

          done();
        })
        .catch(done);
    });
    // https://github.com/tjwebb/google-discovery-backbone/issues/2
    it('should run a second time without "Connection already registered" error', function (done) {
      this.timeout(60 * 1000);
      DiscoveryBackbone.generate(fixtures.xtuple460)
        .then(function (orm) {
          assert(_.isArray(orm.models));
          assert(orm.models.length > 0, 'orm.models is empty');
          assert(orm.models.length === modelCount);

          done();
        })
        .catch(done);
    });
    it.skip('result should be parseable', function () {

    });
  });
});
