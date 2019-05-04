export function webpack(config) {
  config.node = {
    fs: 'empty'
  };
  return config;
}