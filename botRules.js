const Rule = require('./rule');

function getRules(api) {
    var rules = [
        
        // Write your own rules here.

        // Example rule 1
        new Rule(
            // Rule name
            'say',
            
            // Facebook chat API object
            api,
            
            // Check function
            // Checks if the message starts with command '/say '
            function(message) {
                if (message.type != 'message') return false;
                
                var msg = message.body.toLowerCase();
                return (msg.startsWith('/say '));
            },

            // Act function
            // (Says the text after the command)
            function(message) {
                var that = this;
                setTimeout(function() {
                    console.log(`[${that.name}] ${message.threadID}`);
                    var responsemsg = message.body.split('/say ')[1];
                    that.api.sendMessage(responsemsg, message.threadID);
                }, 1000);
            }
        ),
        
        // Example rule 2
        new Rule(
            // Rule name
            'tl;dr',
            
            // Facebook chat API object
            api,

            // Check function
            // (Checks if the length of the message is larger than 60)
            function(message) {
                if (message.type != 'message') return false;
                
                var msg = message.body;
                return (msg.length > 60);
            },

            // Act function
            // (Says 'tl;dr')
            function(message) {
                var that = this;
                setTimeout(function() {
                    console.log(`[${that.name}] ${message.threadID}`);
                    that.api.sendMessage('tl;dr', message.threadID);
                }, 1000);
            }
        ),
    
    ];
    
    return rules;
}

module.exports = getRules;
