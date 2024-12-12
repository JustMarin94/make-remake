import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "./NavBar.jsx";
import Logo from "./Logo.jsx";
import Footer from "./Footer.jsx";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RelatedBlogCard from "./RelatedBlogCard.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import SocialShare from "./SocialShare.jsx";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1rem;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1212px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

const BlockContentSection = styled.div`
  grid-column: 1 / 2;
`;

const RelatedSection = styled.div`
  grid-column: 2 / 3;
`;

const MainImage = styled.img`
  margin: 0;
  max-width: 100%;
  height: auto;
`;

const AuthorContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  width: 100%;
`;

const AuthorDetails = styled(Box)`
  margin-left: 16px;
  text-align: left;
`;

const RelatedCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { slug } = useParams();

  const isMobile = useMediaQuery("(max-width:768px)");

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
        _createdAt
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "post" && slug.current != $slug][0...3]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
           }
         },
       body,
       author->{name, image},
      _createdAt
     }`,
        { slug }
      )
      .then(setRelatedPosts)
      .catch(console.error);
  }, [slug]);

  if (!postData) return null;

  const postUrl = window.location.href;

  return (
    <>
      <Navbar />
      <Logo />
      <FlexContainer>
        <MainContainer>
          <Typography variant={isMobile ? "h4" : "h2"}>
            {postData.title}
          </Typography>
          <AuthorContainer>
            <AuthorDetails style={{ display: "flex" }}>
              <AuthorDetails>
                <Avatar
                  src={urlFor(postData.authorImage).width(70).height(70).url()}
                  alt={postData.name}
                  sx={{ width: 70, height: 70 }}
                />
              </AuthorDetails>
              <AuthorDetails>
                <Typography variant="h6">{postData.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Date created:{" "}
                  {new Date(postData._createdAt).toLocaleDateString()}
                </Typography>
              </AuthorDetails>
            </AuthorDetails>

            <SocialShare url={postUrl} title={postData.title} />
          </AuthorContainer>
          <MainImage
            src={urlFor(postData.mainImage).width(1212).height(500).url()}
            alt="MainImage"
          />
          <ContentWrapper>
            <BlockContentSection>
              <BlockContent
                blocks={postData.body}
                projectId="lvkqwjf6"
                dataset="production"
              />
            </BlockContentSection>
            <RelatedSection>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ marginBottom: "40px" }}
              >
                Recommended topics
              </Typography>
              <RelatedCards>
                {relatedPosts.slice(0, 3).map((post) => (
                  <RelatedBlogCard
                    key={post.slug.current}
                    title={post.title}
                    imageSource={urlFor(post.mainImage).width(160).url()}
                    slugURL={post.slug.current}
                    bodyText={post.body[0].children[0].text}
                    authorName={post.author?.name || "Unknown Author"}
                    authorImage={
                      post.author?.image
                        ? urlFor(post.author.image).width(40).height(40).url()
                        : "/path/to/default/avatar.jpg"
                    }
                  />
                ))}
              </RelatedCards>
            </RelatedSection>
          </ContentWrapper>
        </MainContainer>
      </FlexContainer>
      <Footer />
    </>
  );
}
