# js-slider
JS Vertical slider for the shop and stores

Hello, it's a just clear JS vertical image/video slider. The slider have been inspired an ASOS.com product page.


<a href="https://codepen.io/d1ms/pen/GRyWLaY" target="_blank">DEMO CODEPEN</a> |
<a href="https://fashion-opt.com/zhenskaya-odezhda/kostyumy/kostjumi-s-brjukami/kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj.html" target="_blank">DEMO ON THE WEBSITE</a>


Installation

1. Include d1slider.js and slider.css in the your page

2. HTML CODE EXAMPLE
<code>
&lt;div class=&quot;d1-slider d1-left&quot;&gt; &lt;div class=&quot;d1-main&quot;&gt; &lt;img id=&quot;zoom_els&quot; class=&quot;image-zoom&quot; data-i32temprop_mdp=&quot;image&quot; src=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/x695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.i6rVRoYlTB.jpg&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; alt=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; data-zoom=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg&quot; /&gt; &lt;/div&gt; &lt;div class=&quot;d1-navi&quot;&gt; &lt;a href=&quot;#&quot; class=&quot;dataitem&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; data-image=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg&quot; data-zoom=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg&quot;&gt; &lt;img class=&quot;img-responsive&quot; src=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/x695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.i6rVRoYlTB.jpg&quot; data-index=&quot;0&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; alt=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; /&gt; &lt;/a&gt; &lt;a href=&quot;#&quot; class=&quot;dataitem&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; data-image=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/413389984-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg&quot; data-zoom=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/413389984-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg&quot;&gt; &lt;img class=&quot;img-responsive&quot; src=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/x413389984-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.PNMYP2pHzt.jpg&quot; data-index=&quot;1&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; alt=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; /&gt; &lt;/a&gt; &lt;a href=&quot;#&quot; class=&quot;dataitem&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; data-image=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/146865663-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg&quot; data-zoom=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/146865663-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-1400x1200.jpg&quot;&gt; &lt;img class=&quot;img-responsive&quot; src=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/x146865663-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.PDObB74kFE.jpg&quot; data-index=&quot;2&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; alt=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; /&gt; &lt;/a&gt; &lt;a href=&quot;#&quot; class=&quot;dataitem video&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; data-video-src=&quot;https://fashion-video.s3.eu-central-1.amazonaws.com/267white2.mp4&quot;&gt; &lt;img class=&quot;img-responsive&quot; src=&quot;https://fashion-opt.com/image/cache/catalog/norm19/0/x695137104-kostyum-raskleshennye-bryuki-i-pidgak-aleksa-267-molochnyj-sn-720x920.jpg.pagespeed.ic.i6rVRoYlTB.jpg&quot; title=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot; alt=&quot;Костюм расклешенные брюки и пиджак Алекса № 267 Молочный&quot;&gt; &lt;span&gt;&lt;/span&gt; &lt;/a&gt; &lt;/div&gt; &lt;/div&gt;
</code>

3. JS Initialize code (after HTML)
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
