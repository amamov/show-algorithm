import { AppFooterStyle } from "./AppFooter.style";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Footer() {
  return (
    <AppFooterStyle.FooterWrapper>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <LazyLoadImage
          src="/vercel.svg"
          effect="blur"
          width={72}
          height={16}
        ></LazyLoadImage>
      </a>
    </AppFooterStyle.FooterWrapper>
  );
}
