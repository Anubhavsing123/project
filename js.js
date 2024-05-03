const btn=document.getElementById('btn')
let result=document.getElementById('result')
btn.addEventListener('click',()=>{
  const word1 =document.getElementById('word1').value.toLocaleLowerCase();
  const word2=document.getElementById('word2').value.toLocaleLowerCase();
  console.log(word1,word2)
  //remove space and puctions
  const clearword1=word1.replace(/[^\w]/g,"");
  const clearword2=word2.replace(/[^\w]/g,"");
  if(clearword1.length!==clearword2.length) {
    result.textContent='NOT A ANAGRAM ';
    result.classList.remove("success");
    result.classList.add('error');
    return;
  }
  //count letter of occurrence in the first word
  const lettercout={}
  for (const char of clearword1){
    lettercout[char]=(lettercout[char]||0)+1;

  }
//count letter of occurrence in the second word
const lettercout1={}
for(const char of clearword2){
  lettercout1[char]=(lettercout1[char]||0)+1
}
//compare letter word
for (const char in lettercout){
 if(lettercout[char]!==lettercout1[char]){
  result.textContent="not a anagram word";
  result.classList.remove("success");
  result.classList.add('error');
  return;
 }
  }
  // if all letters word cout is same it's is anagram word
  document.getElementById('result').textContent="it is a anagram word";
  result.classList.remove("error");
  result.classList.add('success');


})