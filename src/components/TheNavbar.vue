<template>
  <header class="navbar">
    <h1>Freelance</h1>
    
    <ul class="navbar-menu">
      <li>
        <router-link to="/home">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/new">Создать</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

