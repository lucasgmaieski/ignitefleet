const { withDangerousMod, AndroidConfig } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function withRealmProguard(config) {
  return withDangerousMod(config, [
    'android',
    async config => {
      const proguardFilePath = path.join(config.modRequest.projectRoot, 'android', 'app', 'proguard-rules.pro');

      fs.appendFileSync(proguardFilePath, '\n-keep class io.realm.react.** { *; }');

      return config;
    }
  ]);
};