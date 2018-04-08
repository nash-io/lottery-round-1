const jsonfile = require('jsonfile')

const entrantsFilePath = 'entrant_document_hashes.json'
const winnersFilePath = 'winning_hashes_round2.json'

const sortHashes = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

jsonfile.readFile(entrantsFilePath, (err, obj) => {
  const winners = obj.sort(sortHashes).slice(25000,31500)

  jsonfile.writeFile(winnersFilePath, {'winners':winners}, err => {
    if (err) {
      console.log('error', err)
    } else {
      console.log(`Wrote winners json to ${winnersFilePath}`)
    }
  })
})
