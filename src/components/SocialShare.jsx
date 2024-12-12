import styled from "styled-components";
import { FacebookShareButton } from "react-share";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const ShareContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: gray;
  cursor: pointer;
`;

const SocialShare = ({ url, title }) => {
  return (
    <ShareContainer>
      <FacebookShareButton url={url} quote={title}>
        <IconWrapper>
          <FacebookIcon fontSize="inherit" />
        </IconWrapper>
      </FacebookShareButton>
      <a
        href={`https://www.instagram.com/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconWrapper>
          <InstagramIcon fontSize="inherit" />
        </IconWrapper>
      </a>
    </ShareContainer>
  );
};

export default SocialShare;
