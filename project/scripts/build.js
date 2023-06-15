const { exec } = require('child_process')
const taroBin = require('./taro-bin')

exec(`${taroBin} build --type weapp`, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stdout)
})
