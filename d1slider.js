function d1slider(parametrs){

		this.images = document.querySelectorAll(parametrs.selector + " .d1-navi img");
		this.main = document.querySelector(parametrs.selector + " .d1-main");
		this.mainImg = document.querySelector(parametrs.selector + " .d1-main img");
		this.navi = document.querySelectorAll(parametrs.selector + " .d1-navi a");
		this.activeIndex = 0;
		this.poster = parametrs.poster;
		this.isMobile = /Mobi/i.test(window.navigator.userAgent);
		this.hasSwipe = false;
		this.video = null;
		this.xDown = null;
		this.yDown = null;
		this.spinner = null;
		
		parametrs.imageAttr = parametrs.imageAttr || 'data-image';
		parametrs.videoAttr = parametrs.videoAttr || 'data-video-src';
		parametrs.isLazyLoad = parametrs.isLazyLoad !== false; // default true
		
		if( this.isMobile )
			document.querySelector(parametrs.selector).className += " d1-mobile";
		
		this.my_next = function(){
			
			var new_index = this.activeIndex+1;
			
			if( this.navi.length <= new_index ){
				this.main.className = this.main.className.replace(/d1-swipe-./ig , '');
				return;
			}
			
			this.main.className += " d1-swipe-r";
			this.changeItem(new_index , false);
					
			
		}
		
		this.my_prev = function(){
			
			var new_index = this.activeIndex - 1;
			
			if( new_index < 0 ){
				this.main.className = this.main.className.replace(/d1-swipe-./ig , '');
				return;
			}
			
			this.main.className += " d1-swipe-l";
			this.changeItem(new_index , false);			
					
			
		}
		
		this.getActiveIndex = function(){
			
			return this.activeIndex || 0;
			
		}
		
		
		this.changeItem = function(new_index, evt){
		
			
			if(evt)
				evt.preventDefault();
			
			this.activeIndex = new_index;
			
			if( this.navi[new_index] &&  this.navi[new_index].getAttribute(parametrs.imageAttr) ){
				
				// image exist
				this.startLoad();
				this.mainImg.src = this.navi[new_index].getAttribute(parametrs.imageAttr);
				this.mainImg.style.opacity = '1';
				if(this.video) {
						this.video.style.display = 'none';
						this.video.pause();
				} 
			} else {	
				
					this.video.style.display = 'inline-block';
					this.video.autoplay = true;
					this.video.src = this.navi[new_index].getAttribute(parametrs.videoAttr);
					this.video.play();
					this.mainImg.style.opacity = '0';
					this.endLoad();
					// video
					
			}
			
			if(parametrs.afterChange)
				parametrs.afterChange(this.navi[new_index] , this.mainImg ); 
			
		}
		
		this.startLoad = function(){
			//show spinner
			if(!this.spinner){
				
				
				
				var spinner = document.createElement('div');
				spinner.className = 'spinner';
				spinner.style.left = Math.round(this.main.clientWidth/2) - 40 + 'px';
				spinner.style.top = Math.round(this.main.clientHeight/2) - 40 + 'px';
				this.spinner = spinner;
				this.main.appendChild(spinner);
				
				//create spinner
			}
			
			this.spinner.style.display = 'flex';
			
			
		}
		
		this.endLoad = function(){
			//hide spinner
			console.log('loaded is done');
			
			if(this.spinner)
				this.spinner.style.display = 'none';
			
			this.main.className = this.main.className.replace(/d1-swipe-./ig , '');
		}
		
		this.navi.forEach( (a , index ) => {
			//bind image change
			a.addEventListener('click' , this.changeItem.bind(this , index), false);
			
		} );

		//this.btPrev.addEventListener('click', this.prev.bind(this));
		//this.btNext.addEventListener('click', this.next.bind(this));

		//setInterval(this.next.bind(this), this.interval);
		
		this.mainImg.addEventListener('load' , this.endLoad.bind(this) );
		
	 
	if(this.isMobile){
		
		// add touch events
		
		 
		this.getTouches = function (evt) {
			return evt.touches || // js
			evt.originalEvent.touches; // jQuery
		}
		 
		this.handleTouchStart = function (evt) {
			const firstTouch = this.getTouches(evt)[0];
			this.xDown = firstTouch.clientX;
			this.yDown = firstTouch.clientY;
		};
		 
		this.handleTouchMove = function (evt) {
			if ( ! this.xDown || ! this.yDown || this.hasSwipe ) 
				return;
			
			this.hasSwipe = true;
			
			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;
			 
			var xDiff = this.xDown - xUp;
			var yDiff = this.yDown - yUp;
			
			
			 
			if ( Math.abs( xDiff ) && (Math.abs( xDiff ) > Math.abs( yDiff ) ) ) {// swipe condition
				if ( xDiff > 0 ) {
					
					
					this.my_next();
					
				} else {
					
					this.my_prev();
					
				}
			} else {
				if ( yDiff > 0 ) {
					//console.log('top')
				} else {
					//console.log('bottom')
				}
			}
			// swipe is done
			this.xDown = null;
			this.yDown = null;
			
		};
		
		this.handleTouchEnd = function (evt) {
			this.hasSwipe = false;
		}
		
		this.main.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
		this.main.addEventListener('touchmove', this.handleTouchMove.bind(this) , false);
		this.main.addEventListener('touchend', this.handleTouchEnd.bind(this) , false);
		
		
	}
	
	this.lazyLoad = function(){
		
		if (!parametrs.isLazyLoad)
			return ;
		
		this.navi.forEach( (a , i) => {
			
			if( i == 0)
				return;
			
			if( a.getAttribute(parametrs.imageAttr) ){
				
				var image = document.createElement('img');
				image.src = a.getAttribute(parametrs.imageAttr);
				image.id = 'd1-slider-image-' + i;
				image.style.display = 'none';
				this.main.appendChild(image);
				
			}
			
			if( a.getAttribute(parametrs.videoAttr) && (this.video == null) ){
				 
				this.video = document.createElement('video');

				this.video.src = a.getAttribute(parametrs.videoAttr);
				this.video.id = 'd1-video';
				this.video.style.display = 'none';
				//this.video.type = "video/mp4";
				if(this.poster) 
					this.video.poster = this.poster;
				this.video.loop = true;
				this.video.controls = true;
				this.main.appendChild(this.video);
				
			}
			
		});
		this.zoomInitialize();
	}
	
	this.zoomInitialize = function(){
		
		if(!parametrs.zoomInitialize)
			return;
		
		if(!this.isMobile)
			parametrs.zoomInitialize();
		
	}
	
	this.insertZoom = function(){
		
		if(!parametrs.zoomJs)
			return ;
		
		var script = document.createElement('script');
		script.src = parametrs.zoomJs;
		document.body.appendChild(script);
		
		 
		
	}
	
	if(!this.isMobile)
		this.insertZoom();
	
	document.addEventListener('DOMContentLoaded',  this.lazyLoad.bind(this) );
}
