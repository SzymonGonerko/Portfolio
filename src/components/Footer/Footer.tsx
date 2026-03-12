import './footer.scss';
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
  return (
    <>
      <footer>
        <p>Webside created by Szymon Gonerko (2023 - 2026)</p>
        <p>Follow me on socials:</p>
        <div className="socialWrapper">
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href={'https://www.linkedin.com/in/szymon-gonerko-b64504237/'}
          >
            <AiFillLinkedin />
          </a>
          <a
            target={'_blank'}
            href={'https://www.facebook.com/szymon.gonerko'}
            rel={'noreferrer'}
          >
            <AiFillFacebook />
          </a>
          <a
            target={'_blank'}
            href={'https://github.com/SzymonGonerko'}
            rel={'noreferrer'}
          >
            <AiFillGithub />
          </a>
        </div>
      </footer>
    </>
  );
};
