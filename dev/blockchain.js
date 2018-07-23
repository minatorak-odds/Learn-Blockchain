function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1, //block number
        timestamp: this.now(),
        transactions: this.newTransactions,
        nonce: nonce, //proof of work
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}