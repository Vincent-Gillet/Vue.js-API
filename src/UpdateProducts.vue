<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        stock: 0,
        price: 0,
        picture: null,
        categories: [],
      },
      categories: [],
    };
  },

   mounted() {
    const id = this.$route.params.id; 

    axios
    .get(`http://localhost:8888/api/v1/products/${id}`)
    .then((response)=>{
        console.log(response.data);
        this.product = response.data;
        this.product.categories = [];
        this.product.categories = response.data.map(category => category.id);
    })
    .catch((error)=>{
        console.error("Une erreur s'est produite");
    }); 
    
    axios
    .get("http://localhost:8888/api/v1/categories")
    .then((response)=>{
        this.categories = response.data[0] ;
    })
    .catch((error)=>{
        console.error("Une erreur s'est produite");
    }); 
  },

  
  methods: {

  onFileChange(e) {
    const file = e.target.files[0];
    console.log('Fichier choisi :', file);
    if (file) {
      this.product.picture = file;
    } else {
      console.error('Aucun fichier sélectionné');
    }
  },



  submitForm() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('stock', this.product.stock);
    formData.append('price', this.product.price);
    formData.append('picture', this.product.picture);
    this.product.categories.forEach((category, index) => {
      formData.append(`categories[${index}]`, category);
    });

    const id = this.$route.params.id;
    console.log("Form Data:", ...formData.entries());  


    axios
      .post(`http://localhost:8888/api/v1/products/${id}?_method=PUT`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })


      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite');
      });
    },



  },


}


</script>

<template>
  <header>

  </header>

  <main>
    <div class="PageForm">
      <h2>Modifier Produits</h2>
      <div class="productsBoxPost">
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Nom :</label>
            <input type="text" id="name" v-model="product.name">
          </div>
          <div>
            <label for="description">Description :</label>
            <textarea id="description" v-model="product.description"></textarea>
          </div>

          <div>
            <label for="stock">Stock :</label>
            <input type="number" id="stock" v-model="product.stock">
          </div>

          <div>
            <label for="price">Prix :</label>
            <input type="number" id="price" v-model="product.price">
          </div>

          <div class="categorieBox">
            <label for="categories">Catégories :</label>
            <div class="categorieForm" v-for="categorie in categories" :key="categorie.id">
              <input type="checkbox" :id="`categorie-${categorie.id}`" v-model="product.categories" :value="categorie.id">
              <label :for="`categorie-${categorie.id}`">{{ categorie.title }}</label>
            </div>
          </div>

          <div>
            <label for="picture">Image :</label>
            <input type="file" id="picture" @change="onFileChange">
            <img :src="`http://localhost:8000/storage/${product.picture}`" class="imgForm" alt="Product image">

          </div>

          <button type="submit">Soumettre</button>
        </form>
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

