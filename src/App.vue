<script>
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';

export default {
    components: {FooterComp, HeaderComp},
}
</script>

<template>
<HeaderComp/>
<RouterView/>
<FooterComp/>
</template>

<style>

</style>
