async function createContext (app) {
  return {
    app,
    appPath: process.cwd()
  }
}

exports.createContext = createContext;