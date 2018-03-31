const hashLib = require('js-sha256').sha256

const HASH_SALT = 'DssZksS81f'

const doHash = value => {
  const hash = hashLib.hmac.create(HASH_SALT)
  hash.update(value)
  return hash.hex()
}

let documentId = '487783067' // this is a default

process.argv.slice(2).forEach((val, index) => {
  if (index === 0) {
    documentId = val
  }
})

const output = doHash(documentId)

console.log(`[Output]${documentId} -> ${output}`)
// output should be b772fcc5777be78b3a9dd6aedc299790de8d3bf81c9bdcaa686504ad3b1aa464 for the default document id
