const { PORT } = require('./config');
const { createServer, app } = require('./server');
const { createContext } = require('./context');
const { resolvePlugins } = require('./plugins');
const plugins = require('../packages/plugins');

;(async () => {
   
  const server = await createServer();
  const context = await createContext(app);
  
  resolvePlugins(context, plugins);

  server.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`);
    console.log(`http://localhost:${ PORT }`);
  });
})();