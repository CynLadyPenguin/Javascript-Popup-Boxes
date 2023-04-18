const getThatName = ()  => {
  prompt('who are you again?');
};
getThatName();

const changeWallpaper = () => {
  $('.button').on('click', function(){
  let confirm = confirm('Call the Power Rangers?');
  if(confirm === true) {
    $('body').css('background-image', 'url(images/Image20230418104213.png)');
  }
});
};
changeWallpaper();