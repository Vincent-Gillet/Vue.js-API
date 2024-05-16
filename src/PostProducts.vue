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
        image: null,
        categories: [],
      },
      categories:[],
    };
  },

  methods: {

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

    axios
      .post('http://localhost:8888/api/v1/products', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite');
      });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      console.log('Fichier choisi :', file);
      if (file) {
        this.product.picture = file;
      } else {
        console.error('Aucun fichier sélectionné');
  }
    },

  },

   mounted() {
    axios
    .get("http://localhost:8888/api/v1/categories")
    .then((categories)=>{
        console.log(categories);
        this.categories = categories.data[0] ;
    })
    .catch((error)=>{
        console.error("Une erreur s'est produite");
    }); 
  },
}


</script>

<template>
  <header>

  </header>

  <main>
    <div class="PageForm">
      <h2>Nouveau Produits</h2>
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

