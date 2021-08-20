// body {
//     font: 200 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
//     margin: 0;
//     background-image: url("/images/bgtile.png");
//     background-repeat: repeat-x;
//     margin-top: 100px;
//     margin-bottom: 100px;
//     margin-right: 50px;
//     margin-left: 50px;
//   }

setInterval(function() {
    Ti.API.info('Scrolling To Index: ' + viewIndex);
        scrollView.scrollToView(viewIndex);
        if(viewIndex == 4) {
            viewIndex = 0;
            scrollView.scrollToView(viewIndex);
        } else {
            scrollView.scrollToView(viewIndex);
            viewIndex++;
        }
}, 6000);