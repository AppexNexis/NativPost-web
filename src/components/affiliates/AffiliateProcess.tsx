import RevealAnimation from '../animation/RevealAnimation';
import AffiliatesList from './AffiliatesList';
import AffiliatesStep from './AffiliatesStep';

const AffiliateProcess = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="text-center max-w-[602px] space-y-3 mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">How it works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Start earning in three steps</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>No approval queue. No complicated setup. Sign up, share your link, and earn.</p>
            </RevealAnimation>
          </div>
          <AffiliatesStep />
        </div>
        <AffiliatesList />
      </div>
    </section>
  );
};

AffiliateProcess.displayName = 'AffiliateProcess';
export default AffiliateProcess;