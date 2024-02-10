
import React from 'react';
import News from '../components/News';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Creates 2 columns
  gap: 5rem; // Adjust the gap between the cards as needed
  padding: 20px; // Padding around the grid
  margin: 0 auto; // Automatically adjust margins to center the grid
  max-width: 2000px; // Maximum width of the grid container, adjust as needed
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px; // Adjust spacing as needed
`;


const Home: React.FC = () => {
  const newsItems = [
    {
      title: "News Title 1",
      excerpt: "This is a short excerpt from the news article.",
      imageUrl: "https://via.placeholder.com/150",
      readMoreUrl: "#",
    },
    {
      title: "News Title 2",
      excerpt: "This is a short excerpt from the news article.",
      imageUrl: "https://via.placeholder.com/150",
      readMoreUrl: "#",
    },
    {
      title: "News Title 3",
      excerpt: "This is a short excerpt from the news article.",
      imageUrl: "https://via.placeholder.com/150",
      readMoreUrl: "#",
    },
    {
      title: "News Title 4",
      excerpt: "This is a short excerpt from the news article.",
      imageUrl: "./../n.jpg",
      readMoreUrl: "#",
    },
    {
      title: "News Title 5",
      excerpt: "This is a short excerpt from the news article.",
      imageUrl: "https://via.placeholder.com/150",
      readMoreUrl: "#",
    },
    {
      title: "News Title 6",
      excerpt: "This is a short excerpt from the news article.",
      imageUrl: "https://via.placeholder.com/150",
      readMoreUrl: "#",
    },
  ]
  return (
    <>
      <PageTitle>Latest Wishes Fulfilled  </PageTitle>
      
      <GridContainer>
        {newsItems.map((item, index) => (
          <News
            key={index}
            title={item.title}
            excerpt={item.excerpt}
            imageUrl={item.imageUrl}
            readMoreUrl={item.readMoreUrl}
          />
        ))}
      </GridContainer>
    </>
  );
};

export default Home;