class Random {

    int(start, end) {
        const n = this._random(start, end);

        return Math.round(n);
    }

    _random(start, end) {
        const d = end - start;

        return start + Math.random() * d;
    }
}

module.exports = { Random }