<template>
  <button :style="buttonStyle">
    <span class="text">{{ text }}</span>
    <FontAwesomeIcon class="icon" :icon="icon" :style="{ color: iconColor }" />
  </button>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { isEqual } from 'lodash';

import { getColor } from '~/utils/colors';

library.add(faChevronRight, faCommentDots);

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'white',
      validator: (value) => {
        return ['blue', 'white'].includes(value);
      },
    },
    color: {
      type: String,
      default: 'black',
      validator: (value) => {
        return ['black', 'white'].includes(value);
      },
    },
    icon: {
      type: [String, Array],
      default: 'chevron-right',
      validator: (value) => {
        return (
          ['chevron-right'].includes(value) ||
          isEqual(value, ['far', 'comment-dots'])
        );
      },
    },
    iconColor: {
      type: String,
      default: 'blue',
      validator: (value) => {
        return ['blue', 'white'].includes(value);
      },
    },
    text: {
      type: String,
      default: '',
    },
    fontWeight: {
      type: String,
      default: 'normal',
      validator: (value) => {
        return ['normal', 'bold'].includes(value);
      },
    },
  },

  computed: {
    buttonStyle() {
      return {
        '--button-color': getColor(this.color),
        '--button-background-color': getColor(this.backgroundColor),
        '--button-border-color': getColor(this.backgroundColor),
        fontWeight: this.fontWeight,
      };
    },
  },
};
</script>

<style scoped lang="scss">
button {
  display: inline-flex;
  background-color: var(--button-background-color);
  color: var(--button-color);
  border: 1px solid var(--button-border-color);
  border-radius: 8px;
  font-family: 'Rubik', sans-serif;
  height: 45px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
}

.icon {
  margin-left: 10px;
  font-size: 18px;
}

.fa-comment-dots {
  font-size: 23px;
}
</style>
