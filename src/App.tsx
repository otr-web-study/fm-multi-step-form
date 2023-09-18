import { Container } from '@/components/Container';
import StepsPanel from '@/features/steps/StepsPanel';
import { FormDialog } from '@/features/form/FormDialog';

function App() {
  return (
    <main className="grid min-h-screen md:items-start md:justify-center">
      <Container>
        <StepsPanel />
        <FormDialog />
      </Container>
    </main>
  );
}

export default App;
