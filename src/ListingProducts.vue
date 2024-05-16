<script>
import axios from 'axios';


export default {
    data(){
        return {
            products:[]
        } 
    },
  mounted() {
    axios
    .get("http://localhost:8888/api/v1/products")
    .then((products)=>{
        console.log(products);
        this.products = products.data.products ;
    })
    .catch((error)=>{
        console.error("Une erreur s'est produite");
    })


  },

  methods: {
    deleteProduct(id) {
      axios
        .delete(`http://localhost:8888/api/v1/products/${id}`)
        .then(() => {
          // Supprimez le produit de la liste après la suppression réussie
          this.products = this.products.filter(product => product.id !== id);
        })
        .catch((error) => {
          console.error("Une erreur s'est produite lors de la suppression du produit");
        });
    },
  },
}




</script>


<template>
  <header>

  </header>

  <main>
    <div class="PageListing">
      <div class="linkProductListing">
        <h2>Produits</h2>
      </div>

      <router-link class="new" :to="`/api/v1/products/post`">Nouveau produit</router-link>



      <div class="productsBox">

        <div class="productsCardListing" v-for="product in products">
          <h3>{{ product.name }}</h3>
          <img :src="`http://localhost:8000/storage/${product.picture}`" alt="Product image">
          <!-- <img :src="require('../laravel-api/storage/public/picture/' + product.picture)"> -->
          <h4>Catégories :</h4>
          <div v-for="categorie in product.categories">
            <h5>{{ categorie }}</h5>
          </div>
          <h4>Prix : {{ product.price }} €</h4>
          <h4>Stock : {{ product.stock }}</h4>
          <router-link :to="`/api/v1/products/${product.id}`">Voir produit</router-link><br>
          <router-link :to="`/api/v1/products/update/${product.id}`">Modifier</router-link><br>
          <button @click="deleteProduct(product.id)">Supprimer</button>


        </div>        
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

