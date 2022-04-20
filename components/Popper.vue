<script>
import { createPopper } from '@popperjs/core'

export default {
  name: 'Popper',
  props: {
    config: {
      type: Object,
      default: () => ({ placement: 'bottom' }),
    },
    reference: {
      // type: HTMLDivElement,
      default: null
    },
    content: {
      // type: HTMLDivElement,
      default: null
    },
  },
  data() {
    return {
      isOpen: false,
      referenceEl: null,
      contentEl: null,
      popper: null
    };
  },
  mounted() {
    this.referenceEl = this.reference;
    this.contentEl = this.content;
  },
  methods: {
    createPopper() {
      if (!this.popper) {
        this.popper = createPopper(this.reference, this.content, this.config);
      } else {
        this.popper.update();
      }
    },
    open() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;
      this.$nextTick(() => {
        this.createPopper();

        this.popper.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: "eventListeners", enabled: true },
          ],
        }));

        // Update its position
        this.popper.update();
      });
    },
    close() {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false;
      this.popper.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: "eventListeners", enabled: false },
        ],
      }));
    },
  },
  render() {
    return this.$scopedSlots.default({
      isOpen: this.isOpen,
      handleShow: this.open,
      handleHide: this.close,
    });
  },
};
</script>
