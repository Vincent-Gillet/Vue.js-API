<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>

  </header>

  <main>
    <div>
      <form action="">
        <h1>Connexion</h1>
        <label for="username">Nom d'utilisateur</label>
        <input type="text" name="username" id="username" placeholder="Nom d'utilisateur">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" placeholder="Mot de passe">
        <input type="submit" value="Se connecter">
      </form>
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
