<template>
  <div id="form">
    <div class="form__intro">
      <div class="form__left"></div>
      <div class="form__right">
        <h1 v-sanitized-html="title" class="form__title"></h1>
        <div v-sanitized-html="text" class="form__text"></div>
      </div>
    </div>
    <div class="form__content">
      <div class="form__accordion">
        <CollapsableItem
          :showContent="shouldDisplayIdentity"
          title="Identité"
          @clicked="toggleContent('identity')"
        >
          <FormulateForm
            v-model="identityValues"
            :schema="identitySchema"
            @submit="submitIdentity"
          />
        </CollapsableItem>
        <CollapsableItem
          :showContent="shouldDisplayParties"
          title="Parties"
          @clicked="toggleContent('parties')"
          @heightUpdated="updatePartiesHeight"
        >
          <FormulateForm
            v-model="partiesValues"
            :schema="conditionalPartiesSchema"
            @submit="submitParties"
          />
        </CollapsableItem>
        <CollapsableItem
          :showContent="shouldDisplayLitigation"
          title="Litige"
          @clicked="toggleContent('litigation')"
        >
          <FormulateForm
            v-model="litigationValues"
            :schema="litigationSchema"
            @submit="submitLitigation"
          />
        </CollapsableItem>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueFormulate from '@braid/vue-formulate';
import { fr } from '@braid/vue-formulate-i18n';
import { title, text } from '@/text-contents/form';
import identitySchema from '@/json-schemas/identity-schema.json';
import partiesSchema from '@/json-schemas/parties-schema.json';
import litigationSchema from '@/json-schemas/litigation-schema.json';
import CollapsableItem from '@/components/ui/CollapsableItem.vue';
import { initFormWithInitialValues, initialIdentityValues } from '@/utils/form';

Vue.use(VueFormulate, {
  plugins: [fr],
  locale: 'fr',
});

export default {
  name: 'Form',
  components: { CollapsableItem },
  data() {
    return {
      title,
      text,
      identityValues: {},
      identitySchema,
      isIdentityCompleted: false,
      litigationValues: {},
      litigationSchema,
      isLitigationCompleted: false,
      partiesSchema,
      partiesValues: {},
      isPartiesCompleted: false,
      shouldDisplayIdentity: true,
      shouldDisplayLitigation: false,
      shouldDisplayParties: false,
      partiesHeight: 0,
    };
  },
  computed: {
    conditionalPartiesSchema() {
      if (this.partiesValues.lawyer !== 'Oui') {
        return this.partiesSchema.filter(({ name }) => name !== 'lawyer-form');
      }
      return this.partiesSchema;
    },
  },
  created() {
    const { identityValues, partiesValues, litigationValues } = initFormWithInitialValues(
      {
        identityValues: this.identityValues,
        partiesValues: this.partiesValues,
        litigationValues: this.litigationValues,
        initialValues: { identity: initialIdentityValues(this.$route.query.customer) },
      },
    );
    this.identityValues = identityValues;
    this.partiesValues = partiesValues;
    this.litigationValues = litigationValues;
  },
  methods: {
    toggleContent(type) {
      switch (type) {
        case 'identity':
          this.shouldDisplayIdentity = !this.shouldDisplayIdentity;
          break;
        case 'parties':
          if (this.isIdentityCompleted) {
            this.shouldDisplayParties = !this.shouldDisplayParties;
          }
          break;
        case 'litigation':
          if (this.isPartiesCompleted) {
            this.shouldDisplayLitigation = !this.shouldDisplayLitigation;
          }
          break;
        default:
          break;
      }
    },
    submitIdentity() {
      this.shouldDisplayIdentity = false;
      this.isIdentityCompleted = true;
      this.shouldDisplayParties = true;
    },
    submitLitigation() {
      this.shouldDisplayLitigation = false;
      this.isLitigationCompleted = true;
    },
    submitParties() {
      this.shouldDisplayParties = false;
      this.isPartiesCompleted = true;
      this.shouldDisplayLitigation = true;
    },
    updatePartiesHeight(height) {
      this.partiesHeight = height;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/styles/colors';
@import '~/assets/styles/mixins';

.form__intro {
  display: flex;
  position: relative;

  @include device-portrait {
    flex-direction: column;
  }
}

.form__left {
  width: 55%;
  background-image: url('~/assets/img/form.jpg');
  background-size: cover;
  background-position: center;

  @include device-portrait {
    width: 100%;
  }

  @include phone {
    height: 300px;
  }

  @include tablet-portrait {
    height: 550px;
  }
}

.form__right {
  width: 45%;
  padding: 40px;
  background-color: $blue-extralight;

  @include device-portrait {
    width: 100%;
  }
  @include phone {
    padding: 20px;
    padding-bottom: 40px;
  }
  @include tablet-portrait {
    padding-bottom: 60px;
  }
  @include tablet-landscape {
    padding: 30px;
  }
}

.form__title {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0;
  font-size: 70px;
  line-height: 1.2;
  margin-top: 0;
  font-weight: 500;

  @include device-portrait {
    position: absolute;
    color: white;
    text-shadow: 1px 1px 2px $black;
  }
  @include phone {
    font-size: 45px;
    top: 175px;
    left: 20px;
  }
  @include tablet-portrait {
    font-size: 65px;
    top: 355px;
    left: 40px;
  }
  @include tablet-landscape {
    font-size: 60px;
  }
}

.form__text {
  font-size: 23px;

  @include phone {
    font-size: 16px;
  }
  @include tablet-portrait {
    font-size: 22px;
  }
  @include tablet-landscape {
    font-size: 20px;
  }
}

.form__content {
  background-color: $blue-extralight;
  padding: 80px 10%;

  @include phone {
    padding: 80px 20px;
  }
  @include tablet-portrait {
    padding: 80px 40px;
  }
  @include tablet-landscape {
    padding: 80px 80px;
  }
}

.form__accordion {
  background-color: white;
  box-shadow: 0 0 4px -2px;
  display: flex;
  flex-direction: column;
}

::v-deep .form__text p {
  margin: 40px 0;

  @include phone {
    margin: 20px 0;
  }
  @include tablet-portrait {
    margin: 25px 0;
  }
  @include tablet-landscape {
    margin: 20px 0;
  }
}

::v-deep .collapsable-item {
  background-color: white;
}
::v-deep .collapsable-item__content {
  // height: 100%;
  overflow: auto;
  align-items: flex-start;
}

::v-deep .form__text span {
  color: $blue;
  font-weight: 500;
}

::v-deep .flex-wrapper {
  display: flex;
}
::v-deep .formulate-input-group {
  max-width: none;
}
::v-deep .formulate-input {
  flex-grow: 1;
  flex-basis: 0;
}
::v-deep .formulate-input-element:not([data-type='submit']) {
  background-color: #f5f9fb;
}
::v-deep .formulate-input-element textarea {
  resize: none;
  height: 250px;
}
::v-deep .formulate-input-element--textarea {
  max-width: none;
}
::v-deep button[type='submit'] {
  display: inline-flex;
  position: relative;
  background-color: $blue;
  color: white;
  border: none;
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

  span {
    position: relative;
  }

  &:hover {
    color: black;

    ::before {
      transform: scaleX(1);
      transform-origin: center left;
    }

    .icon {
      color: $blue;
    }
  }
}

::v-deep button[type='submit']::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1);
  transform-origin: center right;
  background-color: $green;
}

::v-deep button[type='submit']:hover {
  &::before {
    transform: scaleX(1);
    transform-origin: center left;
  }
  .icon {
    color: $blue;
  }
}

::v-deep .formulate-input:last-child {
  margin-bottom: 1.5em;
}
::v-deep .formulate-input-element::before {
  border-top-color: $black !important;
}
</style>
