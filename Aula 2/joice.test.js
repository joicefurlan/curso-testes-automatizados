const atividade1 = require('./atividade1');
const atividade1ClassConsumer = require('./atividade1ClassConsumer');

describe('String tests'), () => {
    it('If find match'), () => {
        let string = "Hello, i`m Joice";
        let result = string.match(/Joice/gi);

       console.log(result);
    }
}


