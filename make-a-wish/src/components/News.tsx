import React from 'react';
import styled from 'styled-components';
import { Button } from 'carbon-components-react';
import { ArrowRight } from '@carbon/icons-react';

// Styled-components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const ImageContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px; // Adjust based on your needs
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  h5 {
    margin-top: 0;
  }

  p {
    margin-bottom: 1rem;
  }
`;

interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  readMoreUrl: string;
}

const News: React.FC<NewsCardProps> = ({ title, excerpt, imageUrl, readMoreUrl }) => {
  return (
    <Card>
      <ImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <h5>{title}</h5>
        <p>{excerpt}</p>
        <Button kind="primary" href={readMoreUrl} renderIcon={ArrowRight}>Read More</Button>
      </ContentContainer>
    </Card>
  );
};

export default News;