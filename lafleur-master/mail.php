<form action="cible.php" method="post" id="form" >
	<div>
		<h1 >envoyez-nous un message</h1>		
	</div>
	<div >
		<div >
			<label for="name">
				Veuillez taper votre nom&nbsp;:
			</label>
		</div>
			<input type="text"
			name="name"
			id="name"
		
			placeholder="ex : Bud"/>

		<div >
			<label for="email" >
				Veuillez taper votre adresse email&nbsp;:
			</label>
		</div>
			<input type="email"
			name="email"
			id="email"
		
			placeholder="ex : bud@oil.com" required />

		<div>
			<label for="message">
				Veuillez taper votre message&nbsp;:
			</label>
		</div>

		<textarea name="message"  id="message"
		
		placeholder="Votre message ici.">
		</textarea>

		<p class="center">
			<button type="submit"
			name="submit"
			id="submit"
			>envoyer</button>
		</p>
	</div>
</form>
