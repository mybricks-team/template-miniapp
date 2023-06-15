const { exec } = require('child_process')
const taroBin = require('./taro-bin')

exec(`${taroBin} build --type weapp --watch`, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stdout)
})
