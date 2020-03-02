// EXPORTS
module.exports = {
    "unit_tests_mode": false,
    "custom_commands_path": "commands/",
    "globals_path": "globals.js",
    "src_folders": ["tests/"],
    "output_folder": "reports/",
    "detailed_output": false,

    "test_settings": {
        "default": {
           "webdriver": {
               "start_process": true,
            },
            "launch_url": "http://localhost:8080",
            "silent": true,
            "screenshots": {
              "enabled": true,
              "path": "screenshots",
              "on_failure": true
            },
        },
        "chrome": {
          "webdriver": {
              "server_path": "node_modules/.bin/chromedriver",
              "port": 9515
          },
          "desiredCapabilities": {
             "browserName" : 'chrome'
          }
        },
        "firefox": {
          "webdriver": {
              "server_path": "./node_modules/.bin/geckodriver",
              "cli_args": [
                  "--log", "debug"
              ],
              "port": 4444
          },
          "desiredCapabilities": {
              "browserName": "firefox",
              "javascriptEnabled": true,
              "marionette": true,
              "acceptSslCerts": true
          }
        }
    }
}
