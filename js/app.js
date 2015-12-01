/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function() {
      flt_msg = [];
      for (var i=0; i<this.messages.length; i++) {
        spam = false;
        for (var j=0; j<this.rules.length; j++) {
          if (this.messages[i].search(this.rules[j]) != -1) {
            spam = true;
          }
        }
        if (!spam) flt_msg.push(this.messages[i]);
      }
      this.messages = flt_msg;
      return this.messages;
    }

  
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.

var View = {
    init : function() {
        $(".result").html("");
        array = Controller.getMessages();
        for (var k=0; k<array.length; k++) {
            $(".result").append("<li>"+array[k]+"</li>");
        }
    }
};

var Controller = {
    init : function() {
        MailModel.init();
        View.init();
    },
    
    getMessages : function() {
        return MailModel.messages;
    }
};

$(document).ready(function(){
    Controller.init();
    
    $(".btn-filter").on("click",function() {
       MailModel.filter();
       View.init();
    });
});