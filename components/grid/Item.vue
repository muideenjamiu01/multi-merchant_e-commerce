<template>
  <div :class="[
    'border-box m-0 flex-row', xsStyles, smStyles, mdStyles, lgStyles, xlStyles
  ]">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "GridItem",
    props: {
      xs: {
        type: String,
        validator: function (value) {
          return (["1", "2", "3", "4", "5" , "6", "7", '8', '9', '10', '11', "12", "fill", "auto"].includes(value));
        },
      },
      sm: {
        type: String,
        validator: function (value) {
          return (["1", "2", "3", "4", "5" , "6", "7", '8', '9', '10', '11', "12", "fill", "auto"].includes(value));
        },
      },
      md: {
        type: String,
        validator: function (value) {
          return (["1", "2", "3", "4", "5" , "6", "7", '8', '9', '10', '11', "12", "fill", "auto"].includes(value));
        },
      },
      lg: {
        type: String,
        validator: function (value) {
          return (["1", "2", "3", "4", "5" , "6", "7", '8', '9', '10', '11', "12", "fill", "auto"].includes(value));
        },
      },
      xl: {
        type: String,
        validator: function (value) {
          return (["1", "2", "3", "4", "5" , "6", "7", '8', '9', '10', '11', "12", "fill", "auto"].includes(value));
        },
      },
    },
    computed: {
      xsStyles() {
        return {
          "w-1/12 flex-initial": this.xs === "1",
          "w-1/6 flex-initial": this.xs === "2",
          "w-1/4 flex-initial": this.xs === "3",
          "w-1/3 flex-initial": this.xs === "4",
          "w-5/12 flex-initial": this.xs === "5",
          "w-1/2 flex-initial": this.xs === "6",
          "w-7/12 flex-initial": this.xs === "7",
          "w-2/3 flex-initial": this.xs === "8",
          "w-3/4 flex-initial": this.xs === "9",
          "w-5/6 flex-initial": this.xs === "10",
          "w-11/12 flex-initial": this.xs === "11",
          "w-full flex-auto": this.xs === "12",
          "w-full flex-1": this.xs === "fill", 
          "w-auto max-w-none flex-shrink-0": this.xs === "auto"
        }
      },
      smStyles() {
        return {
          "sm:w-1/12 sm:flex-initial": this.sm === "1",
          "sm:w-1/6 sm:flex-initial": this.sm === "2",
          "sm:w-1/4 sm:flex-initial": this.sm === "3",
          "sm:w-1/3 sm:flex-initial": this.sm === "4",
          "sm:w-5/12 sm:flex-initial": this.sm === "5",
          "sm:w-1/2 sm:flex-initial": this.sm === "6",
          "sm:w-7/12 sm:flex-initial": this.sm === "7",
          "sm:w-2/3 sm:flex-initial": this.sm === "8",
          "sm:w-3/4 sm:flex-initial": this.sm === "9",
          "sm:w-5/6 sm:flex-initial": this.sm === "10",
          "sm:w-11/12 sm:flex-initial": this.sm === "11",
          "sm:w-full sm:flex-auto": this.sm === "12",
          "sm:w-full sm:flex-1 ": this.sm === "fill", 
          "sm:w-auto max-w-none sm:flex-shrink-0": this.sm === "auto"
        }
      },
      mdStyles() {
        return {
          "md:w-1/12 md:flex-initial": this.md === "1",
          "md:w-1/6 md:flex-initial": this.md === "2",
          "md:w-1/4 md:flex-initial": this.md === "3",
          "md:w-1/3 md:flex-initial": this.md === "4",
          "md:w-5/12 md:flex-initial": this.md === "5",
          "md:w-1/2 md:flex-initial": this.md === "6",
          "md:w-7/12 md:flex-initial": this.md === "7",
          "md:w-2/3 md:flex-initial": this.md === "8",
          "md:w-3/4 md:flex-initial": this.md === "9",
          "md:w-5/6 md:flex-initial": this.md === "10",
          "md:w-11/12 md:flex-initial": this.md === "11",
          "md:w-full md:flex-auto": this.md === "12",
          "md:w-full md:flex-1": this.md === "fill", 
          "md:w-auto max-w-none md:flex-grow-0 md:flex-shrink-0": this.md === "auto"
        }
      },
      lgStyles() {
        return {
          "lg:w-1/12 lg:flex-initial": this.lg === "1",
          "lg:w-1/6 lg:flex-initial": this.lg === "2",
          "lg:w-1/4 lg:flex-initial": this.lg === "3",
          "lg:w-1/3 lg:flex-initial": this.lg === "4",
          "lg:w-5/12 lg:flex-initial": this.lg === "5",
          "lg:w-1/2 lg:flex-initial": this.lg === "6",
          "lg:w-7/12 lg:flex-initial": this.lg === "7",
          "lg:w-2/3 lg:flex-initial": this.lg === "8",
          "lg:w-3/4 lg:flex-initial": this.lg === "9",
          "lg:w-5/6 lg:flex-initial": this.lg === "10",
          "lg:w-11/12 lg:flex-initial": this.lg === "11",
          "lg:w-full lg:flex-auto": this.lg === "12",
          "lg:w-full lg:flex-1 ": this.lg === "fill", 
          "lg:w-auto max-w-none lg:flex-shrink-0": this.lg === "auto"
        }
      },
      xlStyles() {
        return {
          "xl:w-1/12 xl:flex-initial": this.xl === "1",
          "xl:w-1/6 xl:flex-initial": this.xl === "2",
          "xl:w-1/4 xl:flex-initial": this.xl === "3",
          "xl:w-1/3 xl:flex-initial": this.xl === "4",
          "xl:w-5/12 xl:flex-initial": this.xl === "5",
          "xl:w-1/2 xl:flex-initial": this.xl === "6",
          "xl:w-7/12 xl:flex-initial": this.xl === "7",
          "xl:w-2/3 xl:flex-initial": this.xl === "8",
          "xl:w-3/4 xl:flex-initial": this.xl === "9",
          "xl:w-5/6 xl:flex-initial": this.xl === "10",
          "xl:w-11/12 xl:flex-initial": this.xl === "11",
          "xl:w-full xl:flex-auto": this.xl === "12",
          "xl:w-full xl:flex-1": this.xl === "fill", 
          "xl:w-auto max-w-none xl:flex-grow-0 xl:flex-shrink-0": this.xl === "auto"
        }
      }
    }
}
</script>
