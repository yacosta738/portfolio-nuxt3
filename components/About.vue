<template>
  <section id="about" class="container mx-auto">
    <h2 class="numbered-heading">{{ $t('about') }}</h2>
    <div class="inner">
      <div class="styled-text">
        <div class="styled-text">
          <p class="mb-2">
            {{ $t('bio') }}
          </p>

          <p>{{ $t('about-tech') }}</p>
        </div>
        <ul class="skills-list">
          <li v-for="(skill, i) in skills" :key="i">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div class="styled-pic">
        <div class="wrapper">
          <img
            :src="me.image ? me.image : '/me.png'"
            alt="Yuniel Acosta Pérez"
            class="img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { inlineLinks } from '~/util/utilities';

const skills: string[] = [
  'TypeScript',
  'HTML & (S)CSS',
  'Angular',
  'Vue',
  'Node.js',
  'Spring Boot',
];

const setInlineLink = () => {
  setTimeout(() => {
    inlineLinks('styled-text');
  }, 2000);
};

onMounted(() => {
  setInlineLink();
});

const me = computed(() => {
  return {
    image: '/me.png',
    name: 'Yuniel Acosta Pérez',
    position: 'Software Engineer',
    company: 'Desoft',
    email: 'yunielacosta738@gmail.com',
    phone: '+52 1 (614) 827-8982',
  };
});
</script>

<style scoped lang="scss">
section {
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
  }
}

.styled-text {
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
}

.styled-pic {
  position: relative;
  max-width: 300px;

  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: var(--green);
    z-index: 1;

    &:hover {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      overflow: hidden;
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: var(--transition);
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: var(--transition);
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
}

@media (max-width: 768px) {
  section {
    .inner {
      display: block;
    }
  }
  .styled-pic {
    margin: 50px auto 0;
    width: 70%;
  }
}
</style>
