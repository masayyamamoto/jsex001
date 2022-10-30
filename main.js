'use strict';
{
  // const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  
  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '吉', '凶', '大凶'];
    const n  = Math.floor(Math.random(results) * results.length);
    result.textContent = results[n]
  });
}