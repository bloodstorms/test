<template>
  <div class="collapsable-item" :class="{ opened: showContent }">
    <div class="collapsable-item__header" @click="toggleContent">
      <h3 v-sanitized-html="title" class="collapsable-item__title"></h3>
      <FontAwesomeIcon
        class="collapsable-item__icon"
        :icon="showContent ? 'minus' : 'plus'"
      />
    </div>
    <div
      ref="grow"
      class="collapsable-item__grow"
      :style="{ height: showContent ? contentHeight + 'px' : 0 }"
    >
      <div ref="content" class="collapsable-item__content">
        <div
          class="collapsable-item__content-left"
          :class="{ only: !imageName }"
        >
          <div
            v-sanitized-html="contentText"
            class="collapsable-item__text"
          ></div>
          <Button
            v-if="buttonText"
            class="collapsable-item__button"
            :text="buttonText"
            color="white"
            colorHover="black"
            backgroundColor="blue"
            backgroundColorHover="green"
            iconColor="green"
            iconColorHover="blue"
          />
        </div>
        <div v-if="imageName" class="collapsable-item__content-right">
          <img
            class="collapsable-item__image"
            :src="require(`@/assets/img/accordion/${imageName}.jpg`)"
            alt="l"
          />
        </div>
      </div>
    </div>
    <div class="collapsable-item__separator"></div>
  </div>
</template>

<script>
// import { ResizeObserver } from '@juggle/resize-observer';
import Vue from 'vue';

import VSanitizedHTML from '@/directives/v-sanitized-html';

import Button from '@/components/ui/Button.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faMinus);

Vue.use(VSanitizedHTML);

export default {
  name: 'CollapsableItem',
  directives: { VSanitizedHTML },
  components: {
    FontAwesomeIcon,
    Button,
  },
  props: {
    showContent: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    contentText: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    imageName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      contentHeight: 0,
    };
  },
  mounted() {
    this.contentHeight = this.$refs.content.offsetHeight;

    // // observable height
    // const resizeObserver = new ResizeObserver((entries) => {
    //   this.$emit('heightUpdated', entries[0].contentRect.height);
    // });
    // resizeObserver.observe(this.$refs.grow);
  },
  methods: {
    toggleContent() {
      if (this.showContent) {
        this.$emit('heightUpdated', 0);
      } else {
        this.$emit('heightUpdated', this.contentHeight);
      }
      this.$emit('clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

.collapsable-item {
  padding: 20px 50px 0 50px;

  @include phone {
    padding: 20px 20px 0 20px;
  }

  &:last-child {
    margin-bottom: 20px;

    .collapsable-item__separator {
      display: none;
    }
  }

  &.opened {
    .collapsable-item__title {
      color: $blue;
    }
    ::v-deep .collapsable-item__title span {
      color: $black;
    }
    .collapsable-item__icon {
      color: $blue;
    }
  }
}

.collapsable-item__header,
.collapsable-item__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.collapsable-item__header {
  cursor: pointer;
}

.collapsable-item__grow {
  height: 0;
  overflow: hidden;
  transition: height ease 1s;
}

.collapsable-item__title {
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0;
  font-size: 24px;
  font-weight: 400;

  @include phone {
    font-size: 23px;
  }
}

.collapsable-item__icon {
  font-size: 24px;
}

.collapsable-item__content {
  padding-bottom: 20px;
}

.collapsable-item__content-right,
.collapsable-item__content-left {
  width: 50%;
}

.collapsable-item__content-right {
  @include device-portrait {
    display: none;
  }
}

.collapsable-item__content-left {
  padding-right: 50px;

  &.only {
    padding-right: 0;
    width: 100%;
  }

  @include device-portrait {
    padding-right: 0;
    width: 100%;
  }
}

::v-deep .collapsable-item__text {
  @include phone {
    font-size: 14px;
  }

  ul {
    padding-left: 15px;
    margin-top: 15px;
    margin-bottom: 0;
  }

  li {
    font-size: 13px;
    margin-bottom: 8px;
  }
}

.collapsable-item__image {
  width: 100%;
}

.collapsable-item__button {
  margin-top: 30px;
}

.collapsable-item__separator {
  width: 100%;
  height: 5px;
  box-shadow: inset -1px 1px 3px 0 #aaa;
  margin-top: 20px;
}
</style>
