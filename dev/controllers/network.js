const INFO = require('debug')('INFO');
const { v4: uuidv } = require('uuid');
const Blockchain = require('../models/blockchain');

const bitcoin = new Blockchain();
const nodeAddress = uuidv().split('-').join('');

exports.getBlockchain = (req, res) => {
  res.send(bitcoin);
};

exports.getTransaction = (req, res) => {
  const { amount, sender, recipient } = req.body;
  INFO(`==== Transaction ====\namount ${amount}\nsender${sender}\nrecipient${recipient}\n=====================`);
  const blockIndex = bitcoin.createNewTransaction(amount, sender, recipient);
  res.redirect('/blockchain');
};

exports.getMine = (req, res) => {
  const { hash, index } = bitcoin.getLastBlock();
  const previousBlockHash = hash;
  const currentBlockData = {
    trasaction: bitcoin.pendingTransactions,
    index: index + 1
  };
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
  bitcoin.createNewTransaction(12.5, '00', nodeAddress);
  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

  res.json({
    note: 'New block mined successfully',
    block: newBlock
  });
};

exports.postRegisterAndBroadcastNode = (req) => {
  const { newNodeUrl } = req.body;
};
