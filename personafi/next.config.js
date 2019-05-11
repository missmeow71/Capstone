module.exports = {
  target: 'serverless'
}
 
build: {
     extend (config, { isDev, isClient}) 
     {
       config.node = { fs: 'empty'};
      }
     }
