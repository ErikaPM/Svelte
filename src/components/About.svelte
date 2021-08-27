<script>
    let aboutMessage = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "
</script>

<style>

    .about {
        align-content: center;
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 100px;
        width: 80%;
    }

    .card-body {
        color: darkslategray;
        font-family: var(--secondary-font);
        font-size: 1.5rem;
        width: 90%;
        
    }

   /* Dispositivos moviles tipo celular*/
	@media (min-width: 320px) and (max-width: 480px) {
    .card-body { font-size: 1em; padding: 5px;}
    .card {
      width: 90%;
      margin: 16px;
    }
}

    /* Tablets*/

	@media (min-width: 768px) and (max-width: 1024px){
    .card-body { font-size: 1.5em; padding: 5px;}
    .card {
      width: 90%;
      margin: 16px;
      left: 20px;
    }
}

</style>

<div class="about card">
    <div class="card-body">
        {aboutMessage}
      </div>
</div>
