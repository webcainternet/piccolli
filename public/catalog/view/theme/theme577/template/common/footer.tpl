<div style="background-color: #e1e2dd; color: #3b3b3b;">

	<div style="margin: auto; padding: 30px 0px; width:1170px;max-width:100%;list-style:none; transition: none;overflow:hidden;">
		<div style="width: 33.33%; float: left;">
			<i style="font-size: 36px; float: left; position: absolute; margin-top: 12px;" class="fa fa-thumbs-up" aria-hidden="true"></i>
			<div style="float: left; margin-left: 50px; width: 100%; font-weight: bold;">Compra 100% segura</div>
			<div style="float: left; margin-left: 50px; width: 100%;">Qualidade no atendimento</div>
		</div>
		<div style="width: 33.33%; float: left;">
			<i style="font-size: 36px; float: left; position: absolute; margin-top: 12px;" class="fa fa-archive" aria-hidden="true"></i>
			<div style="float: left; margin-left: 50px; width: 100%; font-weight: bold;">Lorem Ipsum é simplesmente</div>
			<div style="float: left; margin-left: 50px; width: 100%;">Simulação de texto da indústria tipográfica</div>
		</div>
		<div style="width: 33.33%; float: left;">
			<i style="font-size: 36px; float: left; position: absolute; margin-top: 12px;" class="fa fa-truck" aria-hidden="true"></i>
			<div style="float: left; margin-left: 50px; width: 100%; font-weight: bold;">Onde estamos?</div>
			<div style="float: left; margin-left: 50px; width: 100%;">Clique e confira o endereço de nossas lojas</div>
		</div>
	</div>

</div>

<footer>
	<?php if ($footer_top) { ?>
	<div class="footer">
		<?php if ($maintenance == 0){ ?>
				<?php echo $footer_top; ?>
			<?php } ?>
	</div>
	<?php } ?>
  <div class="container">
	<div class="row" style="margin-top: 30px;">
		<div class="col-sm-3">
		<?php if ($informations) { ?>
			<div class="footer_box">
				<h5><?php echo $text_information; ?></h5>
				<ul class="list-unstyled">
				<?php foreach ($informations as $information) { ?>
				<li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
				<?php } ?>
				</ul>
			</div>
			<?php } ?>
		</div>
		<div class="col-sm-3">
			<div class="footer_box">
				<h5><?php echo $text_service; ?></h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
				<li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
				<li><a href="<?php echo $sitemap; ?>"><?php echo $text_sitemap; ?></a></li>
				</ul>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="footer_box">
				<h5><?php echo $text_extra; ?></h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $manufacturer; ?>"><?php echo $text_manufacturer; ?></a></li>
				<li><a href="<?php echo $voucher; ?>"><?php echo $text_voucher; ?></a></li>
				<li><a href="<?php echo $affiliate; ?>"><?php echo $text_affiliate; ?></a></li>
				<li><a href="<?php echo $special; ?>"><?php echo $text_special; ?></a></li>
				</ul>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="footer_box">
				<h5><?php echo $text_account; ?></h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $account; ?>"><?php echo $text_account; ?></a></li>
				<li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
				<li><a href="<?php echo $wishlist; ?>"><?php echo $text_wishlist; ?></a></li>
				<li><a href="<?php echo $newsletter; ?>"><?php echo $text_newsletter; ?></a></li>
				</ul>
			</div>
		</div>           
	</div>

	<div class="row" style="margin-top: 30px;">
		<div class="col-sm-3">
		<?php if ($informations) { ?>
			<div class="footer_box">
				<h5>Telefones</h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $information['href']; ?>">Shopping ABC</a><br><h1 style="color: #FFF;">11 4444-4444</h1></li>
				<li><a href="<?php echo $information['href']; ?>">Shopping D</a><br><h1 style="color: #FFF;">11 4444-4444</h1></li>
				</ul>
			</div>
			<?php } ?>
		</div>
		<div class="col-sm-3">
			<div class="footer_box">
				<h5>&nbsp;</h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $information['href']; ?>">Shopping Aricanduva</a><br><h1 style="color: #FFF;">11 4444-4444</h1></li>
				<li><a href="<?php echo $information['href']; ?>">Loja Campinas Jardim</a><br><h1 style="color: #FFF;">11 4444-4444</h1></li>
				</ul>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="footer_box">
				<h5>&nbsp;</h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $information['href']; ?>">Loja Campinas</a><br><h1 style="color: #FFF;">11 4444-4444</h1></li>
				<li><a href="<?php echo $information['href']; ?>">Shopping ABC</a><br><h1 style="color: #FFF;">11 4444-4444</h1></li>
				</ul>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="footer_box">
				<h5>Redes Sociais</h5>
				<div class="social-block"> 
				<ul class="social-list list-unstyled">
   
    	         <li>
		            <a href="//www.youtube.com">
						<i class="fa fa-facebook" data-toggle="tooltip" title="" data-original-title="Facebook"></i>
		            </a>
		        </li>
		    	        <li>
		            <a href="//www.youtube.com">
						<i class="fa fa-twitter" data-toggle="tooltip" title="" data-original-title="Twitter"></i>
		            </a>
		        </li>
		       
			
		                <li>
		            <a href="//www.instagram.com">
						<i class="fa fa-instagram" data-toggle="tooltip" title="" data-original-title="Instagram"></i>
		            </a>
		        </li>
		    	        <li>
		            <a href="//www.youtube.com">
						<i class="fa fa-google-plus" data-toggle="tooltip" title="" data-original-title="Google Plus"></i>
		            </a>
		        </li>
		       
		    </ul></div>
			</div>
		</div>           
	</div>
	
	</div>
	<div class="copyright">
		<div class="container">
			<div style="text-align: center;">
				<?php /* echo $powered; */ ?><!-- [[%FOOTER_LINK]] -->
				Aqui vai CNPJ: 22.222.222/0001-22 Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.		
			</div>
		</div> 
	</div>
</footer>
<script src="catalog/view/theme/<?php echo $theme_path; ?>/js/livesearch.js" type="text/javascript"></script>
<script src="catalog/view/theme/<?php echo $theme_path; ?>/js/script.js" type="text/javascript"></script>
</div>

</body></html>