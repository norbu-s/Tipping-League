const auth = require('./controllers/auth');

const router = new Router();
router
  /* Handle Login POST */
  .post('/login', ctx => passport.authenticate('local', (err, user) => {
    if (!user) {
      ctx.throw(401, err);
    } else {
      ctx.body = user;
      return ctx.login(user);
    }
  })(ctx))
  /* GET User Profile */
  .get('/users/profile', auth.getLoggedUser)
  /* Handle Logout POST */
  .get('/logout', (ctx) => {
    ctx.logout();
    ctx.body = {};
  })

app.use(router.routes()).use(router.allowedMethods());