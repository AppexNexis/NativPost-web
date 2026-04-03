import SignupBgImage from '@public/images/ns-img-374.jpg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialAuthV2 from './SocialAuthV2';

const SignupHero = () => {
  return (
    <section className="pt-[120px] pb-[70px] lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[400px] lg:max-w-[930px]">
          <div className="flex items-center overflow-hidden rounded-[20px] bg-white py-2.5 pr-2.5 md:rounded-4xl lg:gap-16 dark:bg-black">
            <RevealAnimation delay={0.1}>
              <div className="w-full px-8 py-14 lg:max-w-[400px]">
                <div className="mb-6">
                  <h2 className="text-heading-5 text-secondary dark:text-accent mb-2">Create your account</h2>
                  <p className="text-secondary/60 dark:text-accent/60">
                    7-day free trial. No credit card required.
                  </p>
                </div>
                <form>
                  <fieldset className="mb-4 space-y-2">
                    <label
                      htmlFor="businessName"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium select-none">
                      Business name
                    </label>
                    <input type="text" id="businessName" className="auth-form-input" placeholder="Your company or brand name" />
                  </fieldset>
                  <fieldset className="mb-4 space-y-2">
                    <label
                      htmlFor="email"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium select-none">
                      Email address
                    </label>
                    <input type="email" id="email" className="auth-form-input" placeholder="you@company.com" />
                  </fieldset>
                  <fieldset className="mb-4 space-y-2">
                    <label
                      htmlFor="password"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium select-none">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="auth-form-input"
                      placeholder="At least 8 characters"
                    />
                  </fieldset>
                  <fieldset className="mb-8 space-y-2">
                    <label
                      htmlFor="confirm-password"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium select-none">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="auth-form-input"
                      placeholder="Re-enter your password"
                    />
                  </fieldset>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full first-letter:uppercase before:content-none">
                      Start free trial
                    </button>
                  </div>
                </form>
                <div className="mt-4 text-center">
                  <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">
                    By signing up, you agree to our{' '}
                    <Link href="/terms-conditions" className="text-primary-500 underline">
                      Terms
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="text-primary-500 underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <div className="py-6 text-center">
                  <p className="text-tagline-2 text-secondary dark:text-accent font-normal">Or sign up with</p>
                </div>
                <div>
                  <SocialAuthV2 />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-tagline-2 text-secondary dark:text-accent font-normal">
                    Already have an account?{' '}
                    <Link href="https://app.nativpost.com/sign-in" className="text-tagline-1 footer-link-v2 font-medium">
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="up">
              <div className="hidden lg:block">
                <figure className="h-[665px] w-full max-w-[456px] overflow-hidden rounded-[20px]">
                  <Image src={SignupBgImage} alt="NativPost content preview" className="size-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

SignupHero.displayName = 'SignupHero';
export default SignupHero;
