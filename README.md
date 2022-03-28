# js-slider
JS Vertical slider for the shop and stores

Hello, it's a just clear JS vertical image/video slider. The slider have been inspired an ASOS.com product page.


<a href="https://codepen.io/d1ms/pen/GRyWLaY" target="_blank">DEMO CODEPEN</a> |
<a href="https://fashion-opt.com/zhenskaya-odezhda/kostyumy/kostjumi-s-brjukami/kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj.html" target="_blank">DEMO ON THE WEBSITE</a>


Installation

1. Include d1slider.js and slider.css With CDN in the your page

```
<script src="https://cdn.jsdelivr.net/gh/d1ms/js-slider@main/d1slider.js"></script>
<link href="https://cdn.jsdelivr.net/gh/d1ms/js-slider@main/slider.css" rel="stylesheet">

```
2. HTML CODE EXAMPLE
```
<div class="d1-slider d1-left">
   <div class="d1-main"> <img id="zoom_els" class="image-zoom" data-i32temprop_mdp="image" src="https://fashion-opt.com/image/cache/catalog/norm19/0/x695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.i6rVRoYlTB.jpg" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" alt="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" data-zoom="https://fashion-opt.com/image/cache/catalog/norm19/0/695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg" /> </div>
   <div class="d1-navi"> <a href="#" class="dataitem" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" data-image="https://fashion-opt.com/image/cache/catalog/norm19/0/695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg" data-zoom="https://fashion-opt.com/image/cache/catalog/norm19/0/695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg"> <img class="img-responsive" src="https://fashion-opt.com/image/cache/catalog/norm19/0/x695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.i6rVRoYlTB.jpg" data-index="0" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" alt="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" /> </a> <a href="#" class="dataitem" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" data-image="https://fashion-opt.com/image/cache/catalog/norm19/0/413389984-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg" data-zoom="https://fashion-opt.com/image/cache/catalog/norm19/0/413389984-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg"> <img class="img-responsive" src="https://fashion-opt.com/image/cache/catalog/norm19/0/x413389984-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.PNMYP2pHzt.jpg" data-index="1" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" alt="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" /> </a> <a href="#" class="dataitem" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" data-image="https://fashion-opt.com/image/cache/catalog/norm19/0/146865663-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg" data-zoom="https://fashion-opt.com/image/cache/catalog/norm19/0/146865663-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg"> <img class="img-responsive" src="https://fashion-opt.com/image/cache/catalog/norm19/0/x146865663-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.PDObB74kFE.jpg" data-index="2" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" alt="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" /> </a> <a href="#" class="dataitem video" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" data-video-src="https://fashion-video.s3.eu-central-1.amazonaws.com/267white2.mp4"> <img class="img-responsive" src="https://fashion-opt.com/image/cache/catalog/norm19/0/x695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.i6rVRoYlTB.jpg" title="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный" alt="Костюм расклешенные брюки и пиджак Алекса № 267 Молочный"> <span></span> </a> </div>
</div>
```
3. JS Initialize code (after HTML)


SLIDER WITHOUT ZOOM

```
new d1slider({
  selector: ".d1-slider",
  poster:
    "https://fashion-opt.com/catalog/view/theme/default/image/fashion.jpg",
});
```

OR SLIDER WITH ZOOM PLUGIN

```
new d1slider({
  selector: ".d1-slider",
  poster:
    "https://fashion-opt.com/catalog/view/theme/default/image/fashion.jpg",
  afterChange: function (i, img) {
    if (!i.getAttribute("data-zoom")) return;
    $("#zoom_els").attr("data-zoom", i.getAttribute("data-zoom"));
    $("#zoom_els").trigger("zoom.destroy");
    $("#zoom_els")
      .parent()
      .zoom({
        url: $(this).find("img").attr("data-zoom"),
        on: "click",
        magnify: this.magnify
      });
  },
  zoomJs:
    "https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.21/jquery.zoom.min.js",
  zoomInitialize: function () {
    $("#zoom_els")
      .wrap('<span style="display:inline-block"></span>')
      .css("display", "block")
      .parent()
      .zoom({
        url: $(this).find("img").attr("data-zoom"),
        on: "click",
        magnify: this.magnify
      });
  },
  magnify: 1.5
});
```
DONE!

ABOUT SLIDER PARAMETRS
<b>selector</b> - only required parametr that define the slider block
<b>poster</b> - the url to video preview that will be showed when video begin loading or video file is not exist (the unrequired parametr)
<b>zoomJs</b> - the url to Zoom library, that will be downloded in the background process
<b>zoomInitialize</b> - the zoom initializing function
<b>afterChange</b> - the function is executing after click, change image url for zoom plugin
