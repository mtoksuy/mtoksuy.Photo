<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $view_data["title"]; ?></title>
		<!-- meta -->
		<?php echo $view_data["meta"]; ?>
		<!-- icon -->
		<link rel="shortcut icon" href="<?php echo Uri::base(); ?>assets/img/icon/favicon_3.ico" type="image/vnd.microsoft.icon">
		<!-- css -->
		<link rel="stylesheet" href="<?php echo Uri::base(); ?>assets/css/common/common.css" type="text/css">
		<link rel="stylesheet" href="<?php echo Uri::base(); ?>assets/css/matome/common.css" type="text/css">


		<link rel="stylesheet" href="<?php echo HTTP; ?>assets/css/library/typicons.2.0.7/font/typicons.css" type="text/css">
		<link rel="stylesheet" href="<?php echo Uri::base(); ?>assets/css/library/flickity.1.1.1/flickity.css" type="text/css" media="screen">
		<link rel="stylesheet" href="<?php echo Uri::base(); ?>assets/js/library/flexslider.2/flexslider.css" type="text/css" media="screen">
		<link rel="apple-touch-icon" href="<?php echo Uri::base(); ?>assets/img/icon/apple_touch_icon_3.png" />
		<link rel="apple-touch-icon-precomposed" href="<?php echo Uri::base(); ?>assets/img/icon/apple_touch_icon_1.png" />

		<?php echo $view_data["external_css"]; ?>
	</head>
	<body>
		<!-- wrapper -->
		<div id="wrapper">
			<!-- header -->
			<?php echo $view_data["header"]; ?>
			<!-- mobile_ad -->
			<?php  echo $view_data["mobile_ad"]; ?>
			<!-- drawer -->
			<?php echo $view_data["drawer"]; ?>
			<!-- photo -->
			<div class="photo clearfix">
				<!-- photoコンテンツ -->
				<?php echo $view_data["photo"]; ?>
			</div>
			<!-- main -->
			<div class="main clearfix">
				<!-- sp_thumbnail -->
				<?php echo $view_data["sp_thumbnail"]; ?>
				<!-- navigation -->
				<?php echo $view_data["navigation"]; ?>
				<!-- main_contents -->
				<div class="main_contents clearfix">
					<?php echo $view_data["content"]; ?>
				</div>
				<!-- sidebar -->
				<div class="sidebar">
					<?php echo $view_data["sidebar"]; ?>
				</div>
			</div>
			<!-- footer -->
			<?php echo $view_data["plus_add"]; ?>
			<?php echo $view_data["footer"]; ?>
			<?php echo $view_data["script"]; ?>
		</div>
	</body>
</html>
