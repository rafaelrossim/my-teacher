import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/lista/lista'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Angela Silva",
      foto: "https://blog.academia.com.br/wp-content/uploads/2019/02/273098-entenda-qual-e-o-papel-do-professor-na-educacao-dos-alunos.jpg",
      descricao: "Educadora Infantil",
      valor_hora: 120
    },
    {
      id: 2,
      nome: "Roberto Augusto",
      foto: "https://hospitalsantamonica.com.br/wp-content/uploads/2020/10/saude-mental-dos-professores.jpg",
      descricao: "Professor de Economia",
      valor_hora: 210
    },
    {
      id: 3,
      nome: "Tatiane Souza",
      foto: "https://nova-escola-producao.s3.amazonaws.com/bwFxgtqrEUMvsWR7Pu9u9T2Pm3NJ6xpPzPDTKrzvFRTrDjmZZdbDvwaZdSdf/professores-se-superaram-durante-pandemia.jpg",
      descricao: "Professora de Biologia",
      valor_hora: 350
    },
    {
      id: 4,
      nome: "Gustavo Guimarães",
      foto: "https://educasc.com.br/wp-content/uploads/2021/11/iStock-610021016.jpg",
      descricao: "Professor de Matemática",
      valor_hora: 290
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
