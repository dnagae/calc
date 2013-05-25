test("コンストラクタのテスト",function(){
        
        var c = new Calculator();
        
        ok(c instanceof Calculator, 'new演算子をつけてコンストラクタを呼び出す検査');
        
        
});

test('getExpression', function(){

        var c = new Calculator();
        
        var result = c.getExpression();
        
        equal(result, '');
});

test('append', function(){
       
        var c = new Calculator();
       
        c.expression = '123';
        
        c.append('4');
        
        var result = c.getExpression();
        
        equal(result,'1234');
});


test('clearEntry', function(){
       
        var c = new Calculator();
       
        c.expression = '123';
        
        c.clearEntry();
        
        var result = c.getExpression();
        
        equal(result,'12');
});

test('clear', function(){

        var c = new Calculator();
        
        c.expression = '123';
        
        c.clear();
        
        var result = c.getExpression();
        
        equal(result, '');
});

test('calculate', function(){

        var c = new Calculator();
        
        c.expression = '12+3*4-5/5';
        
        c.calculate();
        
        var result = c.getExpression();
        
        equal(result, '23');
});
