var products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/fries.png",
    name: "Fries",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/salad.png",
    name: "Salad",
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/cola.png",
    name: "Coke",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/water.png",
    name: "Water",
    price: 1.49,
    active: false,
    quantity: 1,
  },
];
// There are 8 lifecycle hooks in Vue Js
// 1.beforeCreate
// 2.created
// 3.beforeMount
// 4.mounted
// 5.beforeUpdate
// 6.updated
// 7.beforeDestroy
// 8.destroyed
const SelfServiceMachine = {
  // Properties returned from data() become reactive state
  data() {
    return {
      products: window.products,
      orderTotal: 0,
    };
  },
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.

  methods: {
    toggleActive: function (item) {
      item.active = !item.active;
    },
    total: function () {
      var total = 0;
      this.products.forEach(function (item) {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });
      return total.toFixed(2);
    },
  },

  beforeCreate() {
    this.orderTotal = 100; /// this line has not effect
    //Here the computed properties, watchers,events,data properties are not setup.
    console.log("beforeCreate hook is called",this.orderTotal,"check for data properties");
  },
  created() {
    //Here the computed properties, watchers,events,data properties are also activated
    // We should avoid trying to access DOM elements from the created lifecycle hook, because DOM elements are not accessible until the component is mounted;
    //this lifecycle hook can be used to fetch data with HTTP requests,
    console.log("created hook is called",this.products,"<<<< testing the created hook");
  },
  beforeMount() {
    // beforeMount is the next lifecycle hook that gets called after the created hook and right before the Vue component is mounted on the DOM. The template and the styles are all compiled here, but the DOM cannot be manipulated yet so we should avoid accessing the DOM elements here
    console.log("beforeMount hook is called");
  },
  mounted() {
    // >> mounted is the next lifecycle hook that gets called after the mounted hook and right after the Vue instance has been mounted. The app component or any other component becomes functional and is ready to use.
    console.log("beforeMount hook is called");
  },
  beforeUpdate() {
    // beforeUpdate is the next lifecycle hook called after the mounted hook. beforeUpdate is called any time a change is made to the data that requires the DOM to be updated.
    console.log("beforeUpdate hook is called");
  },
  updated() {
    // The updated lifecycle hook is called after our component has updated its DOM tree.
    console.log("updated hook is called");
  },
  beforeDestroy() {
    // the beforeDestroy hook is called just before a Vue instance is destroyed. The Instance and all the methods are still functional.We can do resource management here.
    console.log("bforeDestroy hook is called");
  },
  destroyed() {
    // destroyed is the last stage lifecycle hook, where the entire Vue instance gets destroyed.Event listeners,mixins and all directives get unbounded here.
    // This hook can for example be used to remove event listeners or cancelling timers or intervals.
    console.log("destroyed hook will be called");
  },
};

Vue.createApp(SelfServiceMachine).mount("#app");
