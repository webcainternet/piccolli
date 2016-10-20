
<ul class="social-list list-unstyled">    
    <?php if ($facebook) {?>
        <li>
			 <a href="<?php echo $facebook;?>" title="<?php echo $text_facebook;?>" data-toggle="tooltip">
                <i class="fa fa-facebook"></i>
            </a>
        </li>
    <?php }?>
	<?php if ($twitter) {?>
        <li>
			<a href="<?php echo $twitter;?>" title="<?php echo $text_twitter;?>" data-toggle="tooltip">
                <i class="fa fa-twitter"></i>
            </a>
        </li>
    <?php }?>
    <?php if ($google_plus) {?>
        <li>
			<a href="<?php echo $google_plus;?>" title="<?php echo $text_google_plus;?>" data-toggle="tooltip">
                <i class="fa fa-google-plus"></i>
            </a>
        </li>
    <?php }?>    
	<?php if ($youtube) {?>
        <li>
            <a href="<?php echo $youtube;?>" title="<?php echo $text_youtube;?>" data-toggle="tooltip">
                <i class="fa fa-youtube"></i>
            </a>
        </li>
    <?php }?>
    <?php if ($pinterest) {?>
        <li>
			<a href="<?php echo $pinterest;?>" title="<?php echo $text_pinterest;?>" data-toggle="tooltip">
                <i class="fa fa-pinterest"></i>
            </a>
        </li>
    <?php }?>
    <?php if ($instagram) {?>
        <li>
			<a href="<?php echo $instagram;?>" title="<?php echo $text_instagram;?>" data-toggle="tooltip">
                <i class="fa fa-instagram"></i>
            </a>
        </li>
    <?php }?>
    <?php if ($vimeo) {?>
        <li>
			<a href="<?php echo $vimeo;?>" title="<?php echo $fa-vimeo-square;?>" data-toggle="tooltip">
                <i class="fa fa-vimeo-square"></i>
            </a>
        </li>
    <?php }?>
</ul>