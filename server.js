const login = require('facebook-chat-api');
const prompt = require('prompt');

var email;
var password;

const Rule = require('./rule');
var rules;

var promptSchema = {
    properties: {
        email: {
            required: true
        },
        password: {
            hidden: true,
            required: true
        },
    }
}

var getThreads = (process.argv[2] && process.argv[2] == 'threads');

prompt.start();
prompt.get(promptSchema, function(err,result) {
    email = result.email;
    password = result.password;

    runBot();
});

function prepareRules(api) {
    var getRules = require('./botRules');
    rules = getRules(api);
}

function runBot() {
    login({
        email: email,
        password: password
        }, (err, api) => {

            if (err) return console.error(err);

            prepareRules(api);
            
            if (getThreads) {
                api.getThreadList(0, 10, 'inbox', function(err, arr) {
                    arr.forEach(function(thread) {
                        console.dir(thread);
                    });
                });
            } else {
                api.listen((err, message) => {
                    rules.some(function(rule) {
                        if (rule.check(message)) {
                            rule.act(message);
                            return true;
                        }
                    });
                });
            }
    });
}
