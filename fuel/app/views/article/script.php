
			<!-- jQueryプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/common/jquery-1.9.1-min.js"></script>
			<!-- 自作プラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/common/common.js"></script>

			<!-- Photoプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/photo/common.js"></script>

			<!-- fullscreenプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/library/jquery.fullscreen.js"></script>
			<!-- Photo_fullscreenプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/photo/fullscreen.js"></script>

			<!-- Twitterscrapingプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/twitterscraping/common.js"></script>
			<!-- Twitter_image_viewプラグイン -->
			<script type="text/javascript" src="<?php echo HTTP; ?>assets/js/article/twitter_image_view.js"></script>

			<?php 
			if($_SERVER["HTTP_HOST"] == "localhost") {
				
			}
				else {?>
					<!-- アナリティクス -->
					<script>
					  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
					  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
					
					  ga('create', 'UA-90250380-1', 'auto');
					  ga('send', 'pageview');
					
					</script>
		<?php 
				} ?>
