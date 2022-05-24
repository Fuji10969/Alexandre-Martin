<?php include_once "header.php" ?>
<main>
	<div id="la_page">
		<section >
			<?php require "menu.php" ?>
		</section>
		<section >
			<?php require "listePdt.php" ?>
		</section>

		</div>


<div id="panier_commande">
<?php
if (isset($_SESSION['reference']) and count($_SESSION['reference'])>=1) {
	include'panier.php'; ?>
	
	<form action='panier.php' method='get'>
	<input type='submit' name='vider' value='Vider le panier' />
	</form>
	
	<form method='get'>
	<input type='submit' name='commande' value='Commander' />
	</form>
<?php
}
?>

</div>


</main>


	


<?php require "footer.php" ?>
