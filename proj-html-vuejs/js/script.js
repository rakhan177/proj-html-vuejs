const app = new Vue({
  el: '#root',
  data: {
    navbarLeft: [
      {
        title: 'Home',
        icon: "fas fa-angle-down"
      },
      {
        title: 'Pages',
        icon: "fas fa-angle-down"
      },
      {
        title: 'Courses',
        icon: "fas fa-angle-down"
      },
      {
        title: 'Features',
        icon: "fas fa-angle-down"
      },
      {
        title: 'Blog',
        icon: "fas fa-angle-down"
      },
      {
        title: 'Shop',
        icon: "fas fa-angle-down"
      }
    ],
    navbarRight: [
      {
        icon: "fas fa-shopping-cart",
      },
      {
        icon: "fas fa-user-tie"
      }
    ],
    footer: [
      {
        title: "Address",
        text: [
          {testo: '382 NE 191st # 87394 Miami, FL 33179-3899'},
          {testo: '+1(305) 547-9909 (9am - Spm EST,Monday - Friday)'},
          {testo: 'support@maxcoach.com'},
        ],
      },
      {
        title: "Explore",
        text: [
          {testo: 'Start here'},
          {testo: 'Blog'},
          {testo: 'About us'},
        ]
      },
      {
        title: "",
        text: [
          {testo: 'Success story'},
          {testo: 'Courses'},
          {testo: 'Contact us'},
        ]
      },
      {
        title: "Information",
        text: [
          {testo: 'Membreship'},
          {testo: 'Purchase guide'},
          {testo: 'Privacy policy'},
          {testo: 'Terms of service'},
        ]
      },
    ],
    footerIcon: [
      {icona: "fab fa-facebook-square"},
      {icona: "fab fa-twitter"},
      {icona: "fab fa-instagram"},
      {icona: "fab fa-linkedin"},
    ],
  },
  methods: {
    addClass: function(index, array){
      if(index === 0){
        return "footer-left"
      }else if( index === 1){
        return "footer-center-left"
      }else if( index === 2){
        return "footer-center-right"
      }else{
        return "footer-right"
      }
    }
  }
})
