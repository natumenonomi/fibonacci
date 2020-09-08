'use strict';//strict（厳格）モード
const memo = new Map(); //連想配列でmemoにnewMapとして設定
memo.set(0,0); //nが0の時0を返す（決まった値だから）
memo.set(1,1); //nが1の時1を返す（決まった値なので）

function fib(n){ //fib関数の宣言

  //★メモにデータがあればそれを使う★
  if(memo.has(n)){　//memoがnの時
    return memo.get(n);//nを以前計算したことがあったらその値をgetして値を返す。無かったら計算する
  }//returnで終わっているのでelseはいらない
　
  
  //★★メモにデータがないので計算する
let value =fib(n-1)+fib(n-2);//なかった時の計算
  memo.set(n,value); //setメソッドで『nのキーにvalue』の値を出力して保存。次回以降使える
  return value; // 返り値:value=fib(n-1)+fib(n-2）
}

const length =40;　//40回繰り返しを宣言
for( let i =0; i<= length; i ++){//初期化式:0はじまり 条件式：繰り返しの数はlength(今回は40回) 加算式:1増やす
  console.log(fib(i));//for文のループの実行結果を表示
}