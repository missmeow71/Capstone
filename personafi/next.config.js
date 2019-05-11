module.exports = {
  target: 'serverless'
}
 
module.exports = {
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
