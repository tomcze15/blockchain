const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'bd632afbe9ac87d82bfe39e13dd625fd0a65a4f807e8b6ba5cf73a947eb363d3';
const currentBlockData = [
  {
    amout: 101,
    sender: 'nacia903n120b48189b123972vb78dv2781v2',
    recipient: 'tomcze15ma0nd0932n302nd092n3dzckdcnpp'
  },
  {
    amout: 30,
    sender: 'nacia903n120b48189b123972vb78dv2781v2',
    recipient: 'przemko777mewqeqe123123fdv2n3dzckdcnp'
  },
  {
    amout: 200,
    sender: 'tomcze15ma0nd0932n302nd092n3dzckdcnpp',
    recipient: 'nacia903n120b48189b123972vb78dv2781v2'
  }
];

bitcoin.proofOfWork(previousBlockHash, currentBlockData);
