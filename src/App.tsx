import { Container } from './components/Container';
import StepsPanel from './features/steps/StepsPanel';

function App() {
  return (
    <main className="grid min-h-screen md:items-start md:justify-center">
      <Container>
        <StepsPanel />
        <div className="w-[636px]">content</div>
        <div>footer</div>
      </Container>
    </main>
  );
}

export default App;
