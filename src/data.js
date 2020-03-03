import avatar1 from './assets/images/avatar1.png'
import avatar2 from './assets/images/avatar2.png'
import avatar3 from './assets/images/avatar3.png'

const data = {
  posts: [
    {
      id: 1,
      author: {
        name: "Julio Alcantara",
        avatar: avatar1
      },
      date: "04 Jun 2019",
      content: "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: avatar2
          },
          content: "No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar."
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Fernando Costa",
        avatar: avatar3
      },
      date: "05 Jun 2019",
      content: "Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: avatar2
          },
          content: "Ai você fala o seguinte: '- Mas vocês acabaram isso?' Vou te falar: -'Não, está em andamento!' Tem obras que 'vai' durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós 'podêmo fazê'? 11, 12, 13, 14... Por que é que não?"
        }
      ]
    }
  ]
}

export default data