<script>
	import Router from 'svelte-spa-router';
	import About from './components/About.svelte';
	import Home from './components/Home.svelte';
	import LogIn from './components/LogIn.svelte';
    import SignIn from './components/SignIn.svelte';
	import Footer from './components/Footer.svelte';

	let background = '/images/background.jpg';

</script>

<div>
	<header>
		<img class="cover" src={background} alt="background">
		<nav class="nav--buttons">
			<a href="/#/" class="btn btn-link">Home</a>
			<a href="/#/about" class="btn btn-link">About</a>
			<a href="/#/login" class="btn btn-info">Log In</a>
			<a href="/#/signin" class="btn btn-info">Sign In</a>
		</nav>
	</header>
	<main>

	</main>
	
</div>
<footer>
	<Footer/>
</footer>


<Router routes={{
	'/': Home,
	'/about': About,
	'/login': LogIn,
	'/signin': SignIn,
}}
/>

<style>
	.btn { width: 140px;}
	.btn-link {
        color: white;
        border: antiquewhite 1px solid;
    }

	.cover {
		height: 230px;
		width: 100%;
		object-fit: cover;
	}

	footer {
		background-color: #00171F;
		bottom: 0;
		height: 70px;
		position: fixed;
        width: 100% !important;
    }

	.nav--buttons {
        display: flex;
        justify-content: space-around;
        width: 100%;
		height: 100px;
    	padding: 30px;
    }
	/* Dispositivos moviles tipo celular*/
	@media (min-width: 320px) and (max-width: 480px) {
		.cover {height: 200px;}
        .nav--buttons {width: 100%;}
		footer { 
			position: fixed;
		}
    }
	/* Tablets*/
	@media (min-width: 768px) and (max-width: 1024px){
		.cover {height: 250px;}
        .nav--buttons { width: 100%;}
		footer { 
			position: fixed;
		}
    }
</style>