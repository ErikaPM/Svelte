<script>
    let signinMessage = "Sign In";

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

    label { 
        color: var(--label-color);
        font-family: var(--main-font);
    }

    .form--text{
        color: black;
        font-size: 1.3em;
        font-family: var(--secondary-font);
        font-weight: bold;
    }
    @media (max-width: 400px) {
    .form--content_list { font-size: 0.8em; padding: 12px;}
    .btn {
        height: 32px;
    }
    .mb-3 { line-height: 8px;}
}

</style>

<div class="form--content">
    <form action="" class="form--content_list">
        <p class="form--text">Regístrate</p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo electrónico:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirma tu contraseña:</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">{signinMessage}</button>
    </form>
</div>