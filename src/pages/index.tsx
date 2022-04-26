import { Benefit } from '../component/benefit';
import { CTA } from '../component/cta';
import { Hero } from '../component/hero';
import { PageFooter } from '../component/pagefooter';
import { PageHeader } from '../component/pageheader';
import { Pricing } from '../component/pricing';
import { Sympathy } from '../component/sympathy';

const Home: React.FC = () => (
  <>
    <button className='btn-primary btn'>こんばんはie-i</button>
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
