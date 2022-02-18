const app = new Vue({
  el:'#app',
  data:{
      title:"Уроки Ольги Дудченко",
      btn:{
          title:"buy"
      },
      img:"img/paris2.jpg",
      cards: [ 
          {   number:9,  
              link: 'lesson.html',
              title:"Урок 9",
              list: [{
                title:"Тестирование Сердцем: `мелочи жизни` "
              },
              {
                title:" Быть в Теле: Осознавание"
              },
              {
                title:"  Практики: Избирательная осознанность; Лицо изнутри; А легче можно? "
              },
            ]
          },
          {
            link: '#222',
              title:"Урок 10",
              // isFav:true ,
              list: [{
                title:"Тестирование Сердцем: послания/диктовки "
              },
              {
                title:"Упражнение 'Восьмёрки руками'"
              },
              {
                title:"  Практики: Избирательная осознанность; Лицо изнутри; А легче можно? "
              }
            ]
          },
          {
            title:"Paris",
            price:34,
            // isFav:true
          }
      ],
  },
  methods:{
    isOpenFunction(item){
      //
     console.log(item.link);
      
    }
  }
});

console.log("sdfghjkl");

