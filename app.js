'use strict';//strict（厳格）モード
function fib(n){ //fib関数の宣言
  if(n === 0){　//nが0の時
    return 0; //返り値　0を返す
  }else if(n === 1){//nが1の時
    return 1;//返り値　1を返す
  }
  //return null;  旧：返り値//0以外の値の場合はnullを返し終了
  return fib (n - 1) + fib(n - 2);
  //0と1以外の時、前と前の前のフィボナッチ数を足し合わせた数を返す
}

const length =40;　//40回繰り返しを宣言
for( let i =0; i<= length; i ++){
  //初期化式:0はじまり 条件式：繰り返しの数はlength(今回は40回) 加算式:1増やす
  console.log(fib(i));//for文のループの実行結果を表示
}
