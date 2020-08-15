# 🔓 Decryptfy.js

**Package to decrypt hashes in Node.js**

## How use:

```
const decryptfy = require('./src/decryptfy.js')

var hash = "b5c0b187fe309af0f4d35982fd961d7e" // love

decryptfy.md5(hash) // return: Object: { code, msg }

// To use your own wordlist: decryptfy.md5(hash, "./path/to/your/wordlist.txt")
```

### https://github.com/sudoGabriel
