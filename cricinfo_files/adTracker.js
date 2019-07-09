function adTracker(prof,eaid,id,vidnum,gaid){
    //PASSES IN MACROS TO CONTROL IFRAME HEIGHT
    var id = id+'-'+prof;
    var gpt = false;
	var eaid = eaid;
	var prof = prof;
	
    //DEFINE GOOGLE ANALYTICS
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', gaid, 'auto');
     
    this.tracker = {
		overlayAutoClose: function(){
            ga('send','event', id, 'overlayAutoClose');
        },
		overlayUserClose: function(){
            ga('send','event', id, 'overlayUserClose');
        },
        introExpandClose: function(){
            ga('send','event', id, 'introExpandClose');
        },
        introExpandAutoClose: function(){
            ga('send','event', id, 'introExpandAutoClose');
        },  
        clickTwitter: function(){
            ga('send','event', id, 'click-Twitter');
        }, 
        clickFacebook: function(){
            ga('send','event', id, 'click-Facebook');
        }, 
        clickInstagram: function(){
            ga('send','event', id, 'click-Instagram');
        }, 
        clickTumblr: function(){
            ga('send','event', id, 'click-Tumblr');
        }, 
        clickSnapchat: function(){
            ga('send','event', id, 'click-Snapchat');
        },
        userExpandClose: function(){
            ga('send','event', id, 'userExpandClose');
        },
        expand: function(){
            ga('send','event', id, 'expand');
        },        
		clickForSound: function(){
            ga('send','event', id, 'introClickForSound');
        },
		userExpandVideoReplay: function(){
            ga('send','event', id, 'userExpandVideoReplay');
        },		
        video: function(n){
            this.userExpandVideoStart= function(){
                ga('send','event', id, 'userExpandVideoStart-'+n);
            };
            this.userExpandVideoMid= function(){
                ga('send','event', id, 'userExpandVideoMid-'+n);
            };
            this.userExpandVideoEnd= function(){
                ga('send','event', id, 'userExpandVideoEnd-'+n);
            };
            this.userExpandVideoPlay= function(){
                ga('send','event', id, 'userExpandVideoPlay-'+n);
            };
            this.userExpandVideoPause= function(){
                ga('send','event', id, 'userExpandVideoPause-'+n);
            };
            this.userExpandVideoMute= function(){
                ga('send','event', id, 'userExpandVideoMute-'+n);
            };      
            this.userExpandVideoUnmute= function(){
                ga('send','event', id, 'userExpandVideoUnmute-'+n);
            };    
            this.userExpandVideoFullscreen= function(){
                ga('send','event', id, 'userExpandVideoFullscreen-'+n);
            }; 
        }   
    }
	var videoList = [];
	for(var i=0;i<vidnum;i++){
		videoList[i] = new addVideoListener(i+1);
	}	
}