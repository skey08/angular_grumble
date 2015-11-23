var app = angular.module("grumblr");
app.controller("grumblesController", function(){
  //ajax request
  this.grumbles = [
    {title: "My favorite Beer", author_name: "Sam", content: "Anchor Steam", photo_url: "http://independentbeers.com/wp-content/uploads/2012/01/IMG_6760.jpg"},
    {title: "Favorite Raleigh Brewery", author_name: "Sam", content: "Lonerider", photo_url: "http://beerpulse.com/wp-content/uploads/2009/01/lonerider.png"},
    {title: "Favorite IPA", author_name: "Sam", content: "Founders Centennial", photo_url: "http://www.theperfectlyhappyman.com/uploads/founders-centennial-ipa.jpg"},
    {title: "Favorite Colorado Brewery", author_name: "Sam", content: "Snake River", photo_url: "http://knoxbeercrew.com/sites/default/files/images/photo_65.preview.jpg"},
    {title: "Worst Beer", author_name: "Sam", content: "BEAST Ice", photo_url: "http://www.refinedguy.com/wp-content/uploads/2013/01/23-milwaukees-best-ice-worst-beers-in-the-world.jpg"}
  ];

  this.formIsVisible = false;
  this.toggleForm = function(){
    if(this.formIsVisible){
      this.formIsVisible = false;
    }
    else{
      this.formIsVisible = true;
    }
  };

  this.createGrumble = function(){
    var grumble = {};
    grumble.title = this.title;
    grumble.author_name = this.author_name;
    grumble.content = this.content;
    grumble.photo_url = this.photo_url;
    this.grumbles.unshift(this.grumble);
  };

  this.edit = function(index){
    var grumble = this.grumble[index];
    this.title = grumble;
    this.author_name = grumble;
    this.content = grumble;
    this.photo_url = grumble;
  };

  this.update = function(index){
    this.grumbles[index] = this.title;
    this.grumbles[index] = this.author_name;
    this.grumbles[index] = this.content;
    this.grumbles[index] = this.photo_url;
  };

});
