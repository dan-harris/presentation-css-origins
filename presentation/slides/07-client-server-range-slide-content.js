import styled from '@emotion/styled';
import React from 'react';
import { Appear, Heading, Image, Layout, Text } from 'spectacle';
import { images } from '../images';

const BackingLayout = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  margin-left: 2.75rem;
  justify-content: center;
  opacity: 0.2;
  width: 1200px;
  margin-left: -100px;
`;

const Seperator = styled.div`
  border: 4px #000 dashed;
  height: 1px;
  width: 100%;
  margin-top: 100px;
`;

const ScalePoint = styled.div`
  background-color: #000;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-self: flex-end;
  transform: translateY(-17px) translateX(2px);
`;

const ScaleItem = styled.div`
  height: 270px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;

const ScaleSubItem = styled(ScaleItem)`
  width: 150px;
  margin: 0;
`;

const SubDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  height: 1.5rem;
  transform: translateX(42.5%);
`;

export const ClientServerRangeSlideContent = () => (
  <>
    {/* backing content */}
    <BackingLayout>
      <ScaleItem>
        <Heading size={3}>CSR</Heading>
        <Image src={images.client} height={200} />
        <Text>single-page app</Text>
      </ScaleItem>
      <ScaleSubItem>
        <Seperator />
        <ScalePoint />
        <SubDescription>mini spa / app</SubDescription>
      </ScaleSubItem>
      <ScaleSubItem>
        <Seperator />
        <ScalePoint />
        <SubDescription>web components</SubDescription>
      </ScaleSubItem>
      <ScaleSubItem>
        <Seperator />
        <ScalePoint />
        <SubDescription>light interaction</SubDescription>
      </ScaleSubItem>
      <ScaleSubItem style={{ width: '120px' }}>
        <Seperator />
        <ScalePoint style={{ opacity: 0 }} />
        <SubDescription />
      </ScaleSubItem>
      <ScaleItem>
        <Heading size={3}>SSR</Heading>
        <Image src={images.server} height={175} style={{ marginBottom: 25 }} />
        <Text>multi-page app</Text>
      </ScaleItem>
    </BackingLayout>
    {/* content appear */}
    <Layout style={{ justifyContent: 'center', width: '1200px', marginLeft: '-100px' }}>
      <Appear>
        <ScaleItem>
          <Heading size={3}>CSR</Heading>
          <Image src={images.client} height={200} />
          <Text>single-page app</Text>
        </ScaleItem>
      </Appear>
      <Appear>
        <ScaleSubItem>
          <Seperator />
          <ScalePoint />
          <SubDescription>mini spa / app</SubDescription>
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleSubItem>
          <Seperator />
          <ScalePoint />
          <SubDescription>web components</SubDescription>
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleSubItem>
          <Seperator />
          <ScalePoint />
          <SubDescription>light interaction</SubDescription>
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleSubItem style={{ width: '120px' }}>
          <Seperator />
          <ScalePoint style={{ opacity: 0 }} />
          <SubDescription />
        </ScaleSubItem>
      </Appear>
      <Appear>
        <ScaleItem>
          <Heading size={3}>SSR</Heading>
          <Image src={images.server} height={175} style={{ marginBottom: 25 }} />
          <Text>multi-page app</Text>
        </ScaleItem>
      </Appear>
    </Layout>
  </>
);
