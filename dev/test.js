const DEBUG = require('debug')('TIME_TEST');
const { performance } = require('perf_hooks');
const Blockchain = require('./models/blockchain');

const bitcoin = new Blockchain();
const previousBlockHash = 'bd632afbe9ac87d82bfe39e13dd625fd0a65a4f807e8b6ba5cf73a947eb363d3';
const currentBlockData = [
  {
    amout: 101,
    sender: 'bd632afbe9ac87d82bfe39e13dd625fd0a65a4f807e8b6ba5cf73a947eb363d3',
    recipient: 'f4a18fc43bc888d204e059c3fa03a58c9556671d28a4c2b94f6a6eff0fd78ae6'
  },
  {
    amout: 30,
    sender: '585f3abea949377d8fa9f3e5c8e6325e6ea3d3d5d555f3c0530a439d7f5686c9',
    recipient: 'bd632afbe9ac87d82bfe39e13dd625fd0a65a4f807e8b6ba5cf73a947eb363d3'
  },
  {
    amout: 200,
    sender: '1026f20d73191765a63a025dc2c7342e53a65c4fbfa1641ddcf173847e00415a',
    recipient: 'f4a18fc43bc888d204e059c3fa03a58c9556671d28a4c2b94f6a6eff0fd78ae6'
  }
];

const t0 = performance.now();
bitcoin.proofOfWork(previousBlockHash, currentBlockData);
const t1 = performance.now();

DEBUG(`Call to proofOfWork took ${t1 - t0} milliseconds.`);
