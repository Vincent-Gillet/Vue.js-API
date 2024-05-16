<script>
import { ref, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

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


  }
}


// axios({
//   method: 'get',
//   url: 'http://localhost:8888/api/v1/products',
//   data: {
//     'name': 'product name',
//   },
// })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching products:', error);
//   });

//   export default {
//   data() {
//     return {
//       products: [],
//     }
//   },
//   mounted() {
//     axios.get('http://localhost:8888/api/v1/products')
//       .then(response => {
//         console.log(response.data);
//         this.products = response.data;
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   },
// };


// export default {
//   data() {
//     return {
//       products: [],
//     };
//   },
//   mounted() {
//     getProducts().then(products => {
//       console.log(products); // Ajoutez cette ligne pour vérifier la réponse de l'API
//       this.products = products;
//     });
//   },
// };

// const getProducts = () => {
//   return axios.get('http://localhost:8888/api/v1/products')
//     .then(response => response.data)
//     .catch(error => {
//       console.error('Error fetching products:', error);
//       this.products = products.products;
//     });
// };



</script>



<!-- <script>

import apiService from './services/apiService.js';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    apiService.getProducts().then(products => {
      this.products = products;
    });
  },
};

</script> -->

<template>
  <header>

  </header>

  <main>
    <div>
      <h2>Produits</h2>
      <div class="productsBox">
        <div class="productsCard" v-for="product in products">
          <h3>{{ product.name }}</h3>
          <img :src="`http://localhost:8000/storage/${product.picture}`" alt="Product image">
          <!-- <img :src="require('../laravel-api/storage/public/picture/' + product.picture)"> -->
          <h4>Catégories :</h4>
          <div v-for="categorie in product.categories">
            <h5>{{ categorie }}</h5>
          </div>
          <h4>Prix : {{ product.price }} €</h4>
          <h4>Stock : {{ product.stock }}</h4>
          <router-link :to="`/api/v1/products/${product.id}`">Voir produit</router-link>
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

