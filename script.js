let likes = 0;
function incrementLikes(){
  likes++;
  document.getElementById('likes').innerText = likes;
}
document.getElementById('schedule').innerHTML = '<li>8월 12일 - 두산 vs LG</li><li>8월 15일 - 두산 vs KIA</li>';