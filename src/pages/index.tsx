import { Benefit } from '../components/benefit';
import { CTA } from '../components/cta';
import { Hero } from '../components/hero';
import { PageFooter } from '../components/pagefooter';
import { PageHeader } from '../components/pageheader';
import { Pricing } from '../components/pricing';
import { Sympathy } from '../components/sympathy';

const Home: React.FC = () => (
  <>
    <PageHeader />
    <Hero />
    <Sympathy />
    <Benefit />
    <Pricing />
    <CTA />
    <PageFooter />
  </>
);

export default Home;
