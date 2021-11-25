const router = require("./app");
const globalRouter = require("./globalRouter");

router.use('/',globalRouter);

module.exports = router;
//app: (express() & middlewares) -> router: (express.Router() )

