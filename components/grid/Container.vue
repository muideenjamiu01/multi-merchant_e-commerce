<template>
  <div
    :class="[
      'w-full box-border flex', items, gapStyles, content, directionStyles, wrapStyles, justify
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridContainer",
  props: {
    direction: {
      type: String,
      default: "row",
      validator: function (value) {
        return ["row", "column", "row-reverse", "col-reverse"].includes(value);
      },
    },
    wrap: {
      type: String,
      default: "wrap",
      validator: function (value) {
        return ["wrap", "nowrap", "wrap-reverse"].includes(value);
      },
    },
    justifyContent: {
      type: String,
      validator: function (value) {
        return [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
        ].includes(value);
      },
    },
    alignItems: {
      type: String,
      validator: function (value) {
        return ["start", "end", "center", "stretch", "baseline"].includes(
          value
        );
      },
    },
    alignContent: {
      type: String,
      validator: function (value) {
        return [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
        ].includes(value);
      },
    },
    gap: {
      type: String,
      validator: function (value) {
        return [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
        ].includes(value);
      },
    },
  },
  computed: {
    directionStyles() {
      return {
        "flex-row": this.direction === "row",
        "flex-col": this.direction === "column",
        "flex-row-reverse": this.direction === "row-reverse",
        "flex-col-reverse": this.direction === "col-reverse",
      };
    },
    wrapStyles() {
      return {
        "flex-wrap": this.wrap === "wrap",
        "flex-nowrap": this.wrap === "nowrap",
        "flex-wrap-reverse": this.wrap === "wrap-reverse",
      };
    },
    justify() {
      return {
        "justify-start": this.justifyContent === "start",
        "justify-end": this.justifyContent === "end",
        "justify-center": this.justifyContent === "center",
        "justify-between": this.justifyContent === "between",
        "justify-around": this.justifyContent === "around",
        "justify-evenly": this.justifyContent === "evenly",
      };
    },
    items() {
      return {
        "items-start": this.alignItems === "start",
        "items-end": this.alignItems === "end",
        "items-center": this.alignItems === "center",
        "items-stretch": this.alignItems === "stretch",
        "items-baseline": this.alignItems === "baseline",
      };
    },
    content() {
      return {
        "content-start": this.alignContent === "start",
        "content-end": this.alignContent === "end",
        "content-center": this.alignContent === "center",
        "content-between": this.alignContent === "between",
        "content-around": this.alignContent === "around",
        "content-evenly": this.alignContent === "evenly",
      };
    },
    gapStyles() {
      return {
        "gap-0": this.gap === "0",
        "gap-1": this.gap === "1",
        "gap-2": this.gap === "2",
        "gap-3": this.gap === "3",
        "gap-4": this.gap === "4",
        "gap-5": this.gap === "5",
        "gap-6": this.gap === "6",
        "gap-7": this.gap === "7",
        "gap-8": this.gap === "8",
        "gap-9": this.gap === "9",
        "gap-10": this.gap === "10",
        "gap-11": this.gap === "11",
        "gap-12": this.gap === "12",
      };
    },
  },
};
</script>
