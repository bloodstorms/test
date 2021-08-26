<template>
  <button :style="buttonStyle" @click="$emit('click')">
    <span v-if="text" class="text">{{ text }}</span>
    <FontAwesomeIcon v-if="icon" class="icon" :icon="icon" />
  </button>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { isEqual } from 'lodash';

import { getColor } from '~/utils/colors';

library.add(faChevronRight, faChevronLeft, faCommentDots);

export default {
  name: 'Button',
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
    backgroundColorHover: {
      type: String,
      default: 'blue',
      validator: (value) => {
        return ['black', 'blue', 'green'].includes(value);
      },
    },
    borderColor: {
      type: String,
      default: 'none',
      validator: (value) => {
        return ['black', 'none'].includes(value);
      },
    },
    borderColorHover: {
      type: String,
      default: 'none',
      validator: (value) => {
        return ['black', 'none'].includes(value);
      },
    },
    color: {
      type: String,
      default: 'black',
      validator: (value) => {
        return ['black', 'white'].includes(value);
      },
    },
    colorHover: {
      type: String,
      default: 'white',
      validator: (value) => {
        return ['black', 'white'].includes(value);
      },
    },
    icon: {
      type: [String, Array],
      default: 'chevron-right',
      validator: (value) => {
        return (
          ['chevron-right', 'chevron-left'].includes(value) ||
          isEqual(value, ['far', 'comment-dots'])
        );
      },
    },
    iconColor: {
      type: String,
      default: 'blue',
      validator: (value) => {
        return ['black', 'blue', 'green'].includes(value);
      },
    },
    iconColorHover: {
      type: String,
      default: 'green',
      validator: (value) => {
        return ['blue', 'green', 'white'].includes(value);
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
        // normal
        '--button-color': getColor(this.color),
        '--button-background-color': getColor(this.backgroundColor),
        '--button-border-color': getColor(this.borderColor),
        '--button-icon-color': getColor(this.iconColor),

        // hover
        '--button-color--hover': getColor(this.colorHover),
        '--button-background-color--hover': getColor(this.backgroundColorHover),
        '--button-border-color--hover': getColor(this.borderColorHover),
        '--button-icon-color--hover': getColor(this.iconColorHover),

        fontWeight: this.fontWeight,
      };
    },
  },
};
</script>

<style scoped lang="scss">
button {
  display: inline-flex;
  position: relative;
  background-color: var(--button-background-color);
  color: var(--button-color);
  border: 3px solid var(--button-border-color);
  border-radius: 8px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  height: 45px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1),
    color 0.5s cubic-bezier(0.1, 0.8, 0.2, 1);
  transform: translateZ(0);
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: var(--button-border-color--hover);
    color: var(--button-color--hover);

    ::before {
      transform: scaleX(1);
      transform-origin: center left;
    }

    .icon {
      color: var(--button-icon-color--hover);
    }
  }
}

.text {
  position: relative;
  margin-right: 10px;
}

.icon {
  position: relative;
  font-size: 18px;
  color: var(--button-icon-color);
}

.fa-comment-dots {
  font-size: 23px;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1);
  transform-origin: center right;
  background-color: var(--button-background-color--hover);
}

button:hover {
  &::before {
    transform: scaleX(1);
    transform-origin: center left;
  }
  .icon {
    color: var(--button-icon-color--hover);
  }
}
</style>
