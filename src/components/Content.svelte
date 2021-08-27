<script>
    import { userData } from '../store/store.js'
    
  //retorno de valores de data

    let data;
    userData.subscribe(value => {
      data = value;
    });

    let image = '/images/gato.png';

    //cambio de estilo del toogle

    function toogle(id)  {
      // Actualizar data. 
      console.log("Toggle called >>", id)
      data[id].active = !data[id].active
      userData.set(data);
    }

    //orden de los objetos renderizados
    
    function handleClickSort(order)  {
      data.sort((a,b) => { 
        if (a.active && !b.active) {
          return -1
        }
        if (!a.active && b.active) {
          return 1
        }

        let firstItem = a.name.first.toUpperCase();
        let secondItem = b.name.first.toUpperCase();
          if (order === '+' ? firstItem < secondItem : firstItem > secondItem) {
            return -1
          } else {
            return 1
          }
      });
      userData.set(data);
    } 

    function sortAscending() {
      handleClickSort("+")
    }
    function sortDescending() {
      handleClickSort("-")
    }
    

</script>


<style>

  .age { width: 70px;}

  .btn {
    margin-left: 10px;
  }

  .btn-warning {background-color: var(--yellow);}

  .card {
    flex-direction: row;
    background-color: var(--green);
    height: 95px;
    margin-left: 50px;
    padding-right: 20px;
    width: 90%;
  }  

  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1em;
  }

  .card-img-top{
    border-radius: 100%;
    height: 80px;
    margin-top: 10px;
    margin-left: 30px;
    object-fit: cover;
    width: 80px;
  }

  .card-text {
    font-family: 'Roboto Mono', monospace;
    font-size: 1em;
  }

  .name { width: 210px;}
  .id { width: 15px;}
  .hobbies { width: 270px;}
  .education { width: 270px;}

  .order-buttons {
    display: flex;
    justify-content: center;
  }
  .order-buttons-label { color: var(--secondary-font-color)}

  .switchBtn {
    background-color: transparent;
    border-color: transparent;
    display: inline-block;
    height: 34px;
    position: relative;
    width: 10px;
  }

  .switchBtn input { display:none; }

  .slide {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: green;
    color: #fff;
    cursor: pointer;
    -webkit-transition: .4s;
    padding: 8px;
    position: inherit;
    transition: .4s;
    width: 50px;
  }

  input:checked + .slide {
    background-color: #8CE196;
    padding-left: 40px;
  }

  input:focus + .slide {
    box-shadow: 0 0 1px #01aeed;
  }

  input:checked + .slide:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    left: -20px;
  }

  li { 
    list-style: none;
  }

  .slide.round {
      border-radius: 34px;
  }

  table {width: 100%;}

  .user-active {
    background-color: var(--green);
  }
  .user-active button {
    background-color: #0080009e;
  }

  .user-inactive {
    background-color: var(--red);
  }
  .user-inactive button {
    background-color: #f733339e
  }

  /* Dispositivos moviles tipo celular*/
	@media (min-width: 320px) and (max-width: 480px)  {
    .card {
      font-size: 0.8em;
      height: 170px;
      width: 380px;
      margin: 16px;
    }
    .card-body { 
      flex-wrap: wrap;
      padding: 0;
    }
    .card-img-top {
      height: 45px;
      width: 45px;
      margin-top: 30px;
      margin-left: 10px;
    }
    .name{ width: 150px;}
    .hobbies { width: 230px;}
    .education { width: 230px;}
    .switchBtn { 
      margin-right: 7px;
    }
  }
  /* Tablets*/
	@media (min-width: 768px) and (max-width: 1024px){
		.card {
      height: 140px;
      width: 95%;
      margin: 16px;
    }
    .card-body { 
      flex-wrap: wrap;
      padding: 0;
    }
    .card-img-top {
      height: 45px;
      width: 45px;
      margin-top: 30px;
      margin-left: 10px;
    }

    .switchBtn { 
      margin-right: 7px;
    }
    .order-buttons { width: 100%;}
  }
   

</style>

<div style="padding-bottom: 100px;">
  <div class="order-buttons">
    <p class="order-buttons-label">Sort by:</p>
    <button class="btn btn-warning" on:click= {sortAscending}> Ascending </button>
    <button class="btn btn-warning" on:click= {sortDescending}> Descending </button>
  </div>
  <div>
    {#each data as result, i}
    <table id="card_{result.id}" class="Login--message card {result.active ? "user-active" : "user-inactive"}">
          <img src={image} class="card-img-top" alt="card">
  
          <tr class="card-body">
              <td class="id">{result.id}</td>
              <td class="name card-text"> Name: {result.name.first} {result.name.last}</td>
              <td class="age card-text"> Age: {result.age} </td>
              <td class="hobbies card-text"> Hobbies: {result.hobbies} </td>
              <td class="education card-text"> Highschool: {result.education.highschool} College: {result.education.college} </td>
              <td class="switchBtn" >
                  <input type="checkbox">
                  <button id="toogle_{result.id}" class="slide round" on:click={() => toogle(i)}> {result.active ? "on" : "off" } </button>
              </td>
            </tr>
      </table>
    {/each}
    </div>
</div>
