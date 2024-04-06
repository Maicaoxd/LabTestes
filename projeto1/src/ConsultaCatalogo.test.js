import { render, screen, waitFor} from '@testing-library/react';
import App from './App';

test('ct01-verifica a integração do componente', () => {
  //dado que o componente foi renderizado
  render(<App />);
  //quando consulto o titulo da pagina
  const linkElement = screen.getByText(/consulta catalogo/i);
  //entao retorna titulo encontrado
  expect(linkElement).toBeInTheDocument();
});

test("ct02 - verificar a integracao no resultado da consulta", async () => {
  render(<App />);
  await waitFor(
    () => {
      const txtLabel = screen.getByText(/eletrobomba/i);
      expect(txtLabel).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});