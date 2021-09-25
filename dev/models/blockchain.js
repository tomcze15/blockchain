const sha256 = require('sha256');
const DEBUG = require('debug')('proofOfWork');

const currentNodeUrl = process.argv[3];

class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    this.createNewBlock(0, null, '0'.repeat(64));
  }

  createNewBlock(nonce, previousBlockHash, hash) {
    const newBlock = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transaction: this.pendingTransactions,
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewTransaction(amount, sender, recipient) {
    const newTransaction = {
      amount,
      sender,
      recipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
  }

  hashBlock(previousBlockHash, currentBlockData, nonce) {
    return sha256(previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData));
  }

  proofOfWork(previousBlockHash, currentBlockData) {
    let nonce = -1;
    let hash = '';

    do {
      nonce += 1;
      hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    } while (hash.substring(0, 4) !== '0000');

    DEBUG(`hash: ${hash}\nnonce: ${nonce}`);
    return nonce;
  }

  getChain() {
    return this.chain;
  }
}

module.exports = Blockchain;
