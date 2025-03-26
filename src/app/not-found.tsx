"use client"

import Link from "next/link"
import { Button, Typography, Box } from "@mui/material"

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      gap={2}
    >
      <Typography variant="h4" fontWeight={700}>
        Página não encontrada
      </Typography>
      <Typography variant="body1" color="text.secondary">
        O conteúdo que você procura não existe ou foi removido.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Voltar para a página inicial
        </Button>
      </Link>
    </Box>
  )
}

export default NotFound
