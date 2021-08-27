<script>
    let loginMessage = "Log In";

</script>

<style>
    .form--content {
        display: flex;
        justify-content: center;
    }

    .form--content_list {
        background: linear-gradient( #74ebd5 0%, #acb6e5 100%);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 300px;
        padding: 20px;
    }

    .form--text{
        color: black;
        font-size: 1.3em;
        font-family: var(--secondary-font);
        font-weight: bold;
    }

    label { 
        color: var(--label-color);
        font-family: var(--main-font);
    }

    @media (max-width: 400px) {
    .form--content_list { font-size: 0.8em; padding: 5px;}
    .btn {
        height: 32px;
    }
}
    
    
</style>

<div class="form--content">
    <form action="" class="form--content_list">
        <p class="form--text">Ingresa tus datos</p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo electrónico:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">{loginMessage}</button>
    </form>
</div>