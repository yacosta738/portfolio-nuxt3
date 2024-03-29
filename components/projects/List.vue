<template>
  <div class="container mx-auto py-16">
    <div>
      <h1 class="big-heading">{{ $t('all-projects') }}</h1>
      <p class="subtitle">{{ $t('big-list') }}</p>
    </div>
    <div class="styled-table-container">
      <table>
        <thead>
          <tr>
            <th>{{ $t('year') }}</th>
            <th>{{ $t('title') }}</th>
            <th class="hide-on-mobile">{{ $t('made-at') }}</th>
            <th class="hide-on-mobile">{{ $t('built-at') }}</th>
            <th>{{ $t('link') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td class="overline year">
              {{
                typeof project.date === 'string'
                  ? new Date(project.date).getFullYear()
                  : project.date.getFullYear()
              }}
            </td>
            <td class="title">{{ project.title }}</td>
            <td class="company hide-on-mobile">
              {{ project.company ? project.company : 'Personal Project' }}
            </td>
            <td class="tech hide-on-mobile">
              <ProjectsTechList
                :project="project"
                position="start"
                :show-icon="true"
              />
            </td>
            <td class="links">
              <ProjectsLinks
                :project="project"
                position="start"
              ></ProjectsLinks>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import type { PropType } from '@vue/runtime-core';
import type { IProject } from '~/models/project';
import { useGeneralStore } from '~/store';
const generalStore = useGeneralStore();
defineProps({
  projects: {
    type: Array as PropType<IProject[]>,
    default: () => [],
  },
});
onMounted(() => {
  generalStore.updateShowSide(true);
});
onUnmounted(() => {
  generalStore.updateShowSide(false);
});
</script>

<style lang="scss" scoped>
.styled-table-container {
  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }

      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;

        .separator {
          margin: 0 5px;
        }

        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 80px;

        div {
          display: flex;
          align-items: center;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.overline {
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;
}

.subtitle {
  color: var(--green);
  margin: 0 0 20px 0;
  font-size: var(--fz-md);
  font-family: var(--font-mono);
  font-weight: 400;
  line-height: 1.5;
  @media (max-width: 1080px) {
    font-size: var(--fz-sm);
  }
  @media (max-width: 768px) {
    font-size: var(--fz-xs);
  }

  a {
    line-height: 1.5;
  }
}
</style>
