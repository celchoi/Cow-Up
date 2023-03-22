const app = Vue.createApp({
  data() {
    return {
      message: 'Hello, Vue!',
      counter: 0,
      picture: false,
      firstName: "",
      lastName: "",
      input: false
    };
  },
  methods: {
    increment() {
      this.counter++;
      this.message= "Going Up";
    },
    decrement() {
        this.counter--;
        this.message= "Going Down";
    },
    start() {
        this.counter= 0;
        this.picture= false;
        this.message= "Hello, Vue!";
        this.firstName= "";
        this.lastName= "";
        this.input= false;
    }, 
    cow() {
        this.picture=true;
    },
    something() {
        if( this.firstName && this.lastName != '') { 
          this.input= true;
        }
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }

});



app.mount('#app');