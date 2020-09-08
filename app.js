'use strict';//strict（厳格）モード
const memo = new Map(); //memoにnewMapとして設定
memo.set(0,0); //nが0の時0を返す
memo.set(1,1); //nが1の時1を返す
function fib(n){ //fib関数の宣言
  if(memo.has(n)){　
    return memo.get(n);
  }
  const value=fib(n-1)+fib(n-2);
  memo.set(n,value);
  return value;
}

const length =40;　//40回繰り返しを宣言
for( let i =0; i<= length; i ++){
  //初期化式:0はじまり 条件式：繰り返しの数はlength(今回は40回) 加算式:1増やす
  console.log(fib(i));//for文のループの実行結果を表示
}
