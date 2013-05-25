function Calculator(){

  this.expression= '';
  
  
  this.getExpression = function(){
  return this.expression;
  };
  
  
  this.append = function(ch){
  this.expression = this.expression + ch;
  };
  
  
  this.clearEntry = function(){
  s = this.expression;
  this.expression = s.substring(0, s.length-1);
  };


  this.clear = function(){
  this.expression = '';
  };
  



  this.calculate = function(){
  s = this.expression;
  s = s.replaceAll("Å~", "*");
  s = s.replaceAll("ÅÄ", "/");
  
  this.expression = eval(s);
  
  };
};
