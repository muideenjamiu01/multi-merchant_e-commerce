<template>
  <th
    v-if="variant === 'th'"
    :class="['th border-b-secondary-200', setAlign]"
  >
    <span
      class="
        relative
        p-0
        border-0
        m-0
        bg-transparent
        box-border
        outline-0
        rounded-none
        select-none
        align-middle
        no-underline
        text-inherit
        inline-flex
        justify-start
        items-center
      "
    >
      <slot></slot>
    </span>
  </th>
  <td v-else :class="['td border-b-secondary-200', setAlign]">
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    variant: {
      type: String,
      default: "td",
      validator(value) {
        return ["td", "th"].includes(value);
      },
    },
    align: {
        type: String,
      default: "center",
      validator(value) {
        return ['center', 'inherit', 'justify', 'left', 'right'].includes(value);
      }
    }
  },
  computed: {
    setAlign() {
        return {
            "text-center": this.align === 'center',
            "text-right": this.align === 'right',
            "text-left": this.align === 'left',
            "text-inherit": this.align === 'inherit',
            "text-justify": this.align === 'justify',
        }
    }
  }
};
</script>

<style scoped>
.th, .td {
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
    display: table-cell;
  vertical-align: inherit;
  padding: 16px;
  border-bottom-width: 1px;
  border-style: solid;
}

.th {
    font-weight: 500;
}
</style>