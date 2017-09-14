/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
  };


  if (environment === 'production') {
    ENV['scp'] = {
        username: 'carthagexq',
        host: 'ftp.cluster020.hosting.ovh.net',
        path: '/wwww'
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
