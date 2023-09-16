import { Container } from './components/Container';
import StepsPanel from './features/steps/StepsPanel';

function App() {
  return (
    <main className="grid min-h-screen md:place-items-center">
      <Container>
        <StepsPanel />
        <div>content</div>
        <div>footer</div>
      </Container>
    </main>
  );
}

export default App;
