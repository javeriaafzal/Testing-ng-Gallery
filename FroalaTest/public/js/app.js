(function () {
    "use strict";
   
   
    var modules = [
        
      
        "FroalaTestconst",
        "thatisuday.ng-image-gallery"

        
    ];
    var app = angular.module("FroalaTest", modules);
}());
(function () {
    var app = angular.module("FroalaTest");
    app.config([appConfig]);
    app.run([
        "$rootScope", "$rootScope", appRun
    ]);

    function appConfig() {
       
    }

    function appRun($rootScope
        ) {
 
        $rootScope.counter = 5;
       

        // Local images
        $rootScope.images = [
            {
                id: 546,
                title: 'My first image',
                alt: 'photo1',
                url: 'demo-images/1.jpg',
                thumbUrl: 'demo-images/thumbs/1.jpg',
                bubbleUrl: 'demo-images/bubbles/1.jpg',
                extUrl: 'http://google.com/image/1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat enim dui, vitae pretium turpis faucibus ac. Donec nisi ex, tempus non leo vel, laoreet convallis libero.',
                deletable: true
            },
            {
                id: 892,
                url: 'demo/demo-images/2.jpg',
                thumbUrl: 'demo/demo-images/thumbs/2.jpg',
                bubbleUrl: 'demo/demo-images/bubbles/2.jpg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            }
            
        ];

        $rootScope.moreImages = [
            {
                id: 658,
                url: '../demo/demo-images/10.jpg',
                thumbUrl: '../demo/demo-images/thumbs/10.jpg',
                bubbleUrl: '../demo/demo-images/bubbles/10.jpg',
            },
            {
                id: 952,
                url: '../demo/demo-images/11.jpg',
                thumbUrl: '../demo/demo-images/thumbs/11.jpg',
                bubbleUrl: '../demo/demo-images/bubbles/11.jpg',
                extUrl: 'http://google.com/image/11',
                deletable: true
            },
            {
                id: 8575,
                title: 'My twelth image',
                alt: 'photo12',
                url: '../demo/demo-images/12.jpg',
                thumbUrl: '../demo/demo-images/thumbs/12.jpg',
                bubbleUrl: '../demo/demo-images/bubbles/12.jpg',
            },
            {
                id: 3652,
                url: '../demo/demo-images/13.jpg',
                thumbUrl: '../demo/demo-images/thumbs/13.jpg',
                bubbleUrl: '../demo/demo-images/bubbles/13.jpg'
            }
        ];

        $rootScope.conf = {
            imgAnim: 'fadeup'
        };

        /*****************************************************/

      

        $rootScope.addPhoto = function () {
            var n = Math.floor(Math.random() * 13) + 1;
            var id = Math.floor(Math.random() * 9999999999) + 1;
            $rootScope.images.push(
                {
                    id: id,
                    url: '../demo/demo-images/' + n + '.jpg',
                    thumbUrl: '../demo/demo-images/thumbs/' + n + '.jpg',
                    bubbleUrl: '../demo/demo-images/bubbles/' + n + '.jpg'
                }
            );
        };

        $rootScope.removePhoto = function () {
            if ($rootScope.images.length > 1) $rootScope.images.pop();
        };

        // Thumbnails
        $rootScope.thumbnails = true;
        $rootScope.toggleThumbnails = function () {
            $rootScope.thumbnails = !$rootScope.thumbnails;
        };

        // Inline
        $rootScope.inline = false;
        $rootScope.toggleInline = function () {
            $rootScope.inline = !$rootScope.inline;
        };

        // Bubbles
        $rootScope.bubbles = true;
        $rootScope.toggleBubbles = function () {
            $rootScope.bubbles = !$rootScope.bubbles;
        };

        // Image bubbles
        $rootScope.imgBubbles = false;
        $rootScope.toggleImgBubbles = function () {
            $rootScope.imgBubbles = !$rootScope.imgBubbles;
        };

        // Background close
        $rootScope.bgClose = false;
        $rootScope.closeOnBackground = function () {
            $rootScope.bgClose = !$rootScope.bgClose;
        };

        // Gallery methods gateway
        $rootScope.methods = {};
        $rootScope.openGallery = function () {
            $rootScope.methods.open();
        };

        // Gallery callbacks
        $rootScope.opened = function () {
            console.info('Gallery opened!');
        };
            
        $rootScope.closed = function () {
            console.warn('Gallery closed!');
        };

        $rootScope.delete = function (img, cb) {
            cb();
        };


    }
})();
angular.module('FroalaTestconst', [])

.constant('CONST_WATGXRESTAPIURL', 'http://testdev00.teknita.com/watgApi/api')

.constant('CONST_RESOURCEURL', 'http://testdev00.teknita.com/resources.watg.com/')

.constant('CONST_LOGSENABLED', true)

.constant('CONST_W1_STAFF_PROFILE_URL', 'http://itstage.watg.com/watg1/#teamMemberDetails/')

;