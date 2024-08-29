/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/upload', controller.upload.upload);
  router.get('/aaaaaa', controller.home.index);
  router.get('/bbb', controller.home.bbb);
};
