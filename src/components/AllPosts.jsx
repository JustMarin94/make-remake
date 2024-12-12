import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import styled from "styled-components";
import logo from "./images/logo.png";
import BlogCard from "./BlogCard.jsx";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import SortDropdown from "./SortDropdown.jsx";

const Background = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  background-color: white;
  font-family: Arial, sans-serif;
  @media screen and (min-width: 768px) {
    height: 768px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 1212px;
    margin: 0 auto;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 480px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    margin-left: 0;
  }
`;

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState("");
  const [sortOption, setSortOption] = useState("latest");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            "bodyText": body[0].children[0].text,
            _createdAt
          }`
      )
      .then((data) => {
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);

  const sortedPosts = [...allPostsData].sort((a, b) => {
    if (sortOption === "latest") {
      return new Date(b._createdAt) - new Date(a._createdAt);
    } else {
      return new Date(a._createdAt) - new Date(b._createdAt);
    }
  });

  return (
    <>
      <Background>
        <Container>
          <Navbar />
          <Logo src={logo} alt="Logo"></Logo>
          <hr />
          <SortDropdown onSortChange={setSortOption} />
          <Grid>
            {sortedPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                imageSource={
                  post.mainImage && post.mainImage.asset
                    ? post.mainImage.asset.url
                    : null
                }
                slugURL={post.slug.current}
                bodyText={post.bodyText}
                createdAt={new Date(post._createdAt).toLocaleDateString()}
              />
            ))}
          </Grid>
        </Container>
        <Footer />
      </Background>
    </>
  );
}
