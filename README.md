# HTML-Space-Parallax
Stars parallaxing in space HTML, website.
## USAGE
#### In your terminal use this code
```
git pull https://github.com/Computer-CGuy/HTML-Space-Parallax.git
```

#### Go to White-stars/Colourful-stars folder
#### And open it in your browser
## Code Used
The Main line in the code are 
```
for(i=0;i<1000;i++){
        x = Math.floor(Math.random() * innerHeight*3) + 1;
        y=Math.floor(Math.random() * innerWidth) + 1;
        z=Math.floor(Math.random() * 6) + 1;
        s=(Math.floor(Math.random() * 30) + 10)/10;
        r =Math.floor(Math.random() * 200) + 30;
        g =Math.floor(Math.random() * 200) + 30;
        b =Math.floor(Math.random() * 200) + 30;
        $('.layer'+z).append('<div class="dot" style="background-color:rgb('+r+','+g+','+b+ ');padding:'+s+';top: '+x+';left: '+y+';"></div>');
}
```
Where the 1000 in for stands for number of stars, I have added stars in the form of layers. 
The location of the stars are random.
X,Y stands for coordinates
z stands for layer no.(In the HTML file, I have 6 layers)
s stands for size. (Here size is padding-size instead of height and width)
r,g,b stands for red,green and blue colors.
#### The most important code in parallaxing of any website is
```
$(window).scroll(function(){
  wScroll = $(this).scrollTop();
  $(element).css('transform','translateY('+(((wScroll-($(element).offset().top))/1))+'px)')
}); 
```
Here the /1 in the code is sensitivity, more than 1.3 is recommended.
This must not be used for the element which is at the top of the page, because it jitters due to ```$(element).offset().top```
For it use this
```
$(top-element).css('transform','translateY('+((wScroll/1.1))+'px)')
```
