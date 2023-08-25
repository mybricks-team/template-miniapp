const path = require('path')
const fs = require('fs')

function findRootDir(currentDir, level = 3) {
  if (level === 0) {
    return false
  }

  const nodeModulesPath = path.join(currentDir, 'node_modules')
  if (!moduleExists(nodeModulesPath)) {
    const parentDir = path.join(currentDir, '..')
    return findRootDir(parentDir) // 递归往上查找
  }

  const cliPath = path.resolve(nodeModulesPath, './@tarojs/cli/bin')
  if (!moduleExists(cliPath)) {
    const parentDir = path.join(currentDir, '..')
    return findRootDir(parentDir) // 递归往上查找
  }

  return currentDir // 当前目录中存在 node_modules，说明已经找到当前项目目录，返回当前目录路径
}

function moduleExists(dirPath) {
  try {
    const stats = fs.statSync(dirPath)
    return stats.isDirectory()
  } catch (err) {
    return false
  }
}

const rootDir = findRootDir(process.cwd())

if (!rootDir) {
  console.log('没有找到@tarojs/cli，请先安装')
  process.exit();
}

const taroBuildPath = path.join(rootDir, 'node_modules', '@tarojs/cli/bin/taro')

module.exports = taroBuildPath;