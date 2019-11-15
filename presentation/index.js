import React from 'react';
import { Deck, Heading, Image, Layout, Slide, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import { BoxAcidTest } from './components/acid-test';
import { BlockQuote } from './components/block-quote';
import { BrowserWindowChrome } from './components/browser-window-chrome';
import { defaultBG, defaultCodeBG, highlightBG } from './components/default-attrs/slide-defaults';
import { HeaderWithSub } from './components/header-with-sub';
import { ListWithEmphasis } from './components/list';
import { ListItemWithEmphasis } from './components/list-item';
import { SubHeading } from './components/sub-heading';
import { images } from './images';
import SlideNotes01 from './slide-notes/01.md';
import SlideNotes02 from './slide-notes/02.md';
import SlideNotes03 from './slide-notes/03.md';
import SlideNotes04 from './slide-notes/04.md';
import SlideNotes05 from './slide-notes/05.md';
import SlideNotes06 from './slide-notes/06.md';
import SlideNotes07 from './slide-notes/07.md';
import SlideNotes08 from './slide-notes/08.md';
import SlideNotes09 from './slide-notes/09.md';
import SlideNotes10 from './slide-notes/10.md';
import SlideNotes11 from './slide-notes/11.md';
import SlideNotes12 from './slide-notes/12.md';
import SlideNotes13 from './slide-notes/13.md';
import SlideNotes14 from './slide-notes/14.md';
import SlideNotes15 from './slide-notes/15.md';
import SlideNotes16 from './slide-notes/16.md';
import SlideNotes17 from './slide-notes/17.md';
import SlideNotes18 from './slide-notes/18.md';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { ProfileSlideContent } from './templates/profile-slide-content';

/**
 * create custom theme
 */
const customTheme = createCustomTheme();

preloader(images);

/**
 * reset CSS
 */
// @ts-ignore
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} progress="pacman" controls={false} theme={customTheme}>
        {/*
         * ======================
         * INTRO / PLACEHOLDER
         * ======================
         */}

        {/* SLIDE 1 */}
        <Slide {...defaultBG} notes={SlideNotes01}>
          <Heading size={1}>Sponsor</Heading>
          <SubHeading size={3}>slides</SubHeading>
        </Slide>

        {/* SLIDE 2 */}
        <Slide {...highlightBG} notes={SlideNotes02}>
          <ProfileSlideContent />
        </Slide>

        {/*
         * ======================
         * OVERVIEW
         * ======================
         */}

        {/* SLIDE 3 */}
        <Slide {...defaultBG} notes={SlideNotes03}>
          <Heading size={1}>Evolution of a</Heading>
          <SubHeading size={3}>stylesheet</SubHeading>
        </Slide>

        {/* SLIDE 4 */}
        <Slide {...defaultBG} notes={SlideNotes04}>
          <HeaderWithSub subheading="todo" isTitleSlide>
            Timeline Here
          </HeaderWithSub>
        </Slide>

        {/*
         * ======================
         * SIMPLE/STRUCTURED DOCUMENTS
         * ======================
         */}

        {/* SLIDE 5 */}
        <Slide {...defaultBG} notes={SlideNotes05}>
          <HeaderWithSub subheading="wilde-westean era" isTitleSlide>
            simply stylish documents
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 6 */}
        <Slide {...defaultBG} notes={SlideNotes06}>
          <BrowserWindowChrome>
            <Image src={images.firstWebsite} style={{ padding: '1rem' }} />
          </BrowserWindowChrome>
        </Slide>

        {/* SLIDE 7 */}
        <Slide {...defaultBG} notes={SlideNotes07}>
          <BlockQuote author="Marc Andreessen">
            In fact, it has been a constant source of delight for me over the past year to get to continually tell hordes (literally) of
            people who want to — strap yourselves in, here it comes — control what their documents look like . . . “Sorry, you're screwed.”
          </BlockQuote>
        </Slide>

        {/* SLIDE 8 */}
        <Slide {...defaultBG} notes={SlideNotes08}>
          <BrowserWindowChrome>
            <Image src={images.batmanForever} />
          </BrowserWindowChrome>
        </Slide>

        {/* SLIDE 9 */}
        <CodeSlide
          {...defaultCodeBG}
          code={require('raw-loader!../assets/code-examples/batman-forever.html.example')} // eslint-disable-line
          ranges={[{ loc: [0, 4] }, { loc: [5, 10] }, { loc: [11, 19] }]}
          notes={SlideNotes09}
        />

        {/* SLIDE 10 */}
        <Slide {...defaultBG} notes={SlideNotes10}>
          <HeaderWithSub subheading="standard" isTitleSlide>
            a document styling
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 11 */}
        <CodeSlide
          {...defaultCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/almost-css.example')} // eslint-disable-line
          ranges={[
            { loc: [0, 12] },
            { loc: [1, 2] },
            { loc: [5, 10] },
            { loc: [12, 14] },
            { loc: [15, 20] },
            { loc: [21, 27] },
            { loc: [27, 30] }
          ]}
          notes={SlideNotes11}
        />

        {/* SLIDE 12 */}
        <Slide {...defaultBG} notes={SlideNotes12}>
          <>
            <HeaderWithSub>Cascading HTML Stylesheet</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>stream based</Heading>
                  <Text>&#123; applied as downloaded &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>link styling</Heading>
                  <Text>&#123; e.g. visited, unvisited &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>combined styles</Heading>
                  <Text>&#123; from several sources &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>robustness</Heading>
                  <Text>&#123; handle errors &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/*
         * ======================
         * STYLISH DOCUMENTS
         * ======================
         */}

        {/* SLIDE 13 */}
        <Slide {...defaultBG} notes={SlideNotes13}>
          <HeaderWithSub subheading="todo" isTitleSlide>
            timeline update
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 14 */}
        <Slide {...defaultBG} notes={SlideNotes14}>
          <HeaderWithSub subheading="vendorzoic era" isTitleSlide>
            super stylish documents
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 15 */}
        <Slide {...defaultBG} notes={SlideNotes15}>
          <BrowserWindowChrome>
            <Image src={images.ebay} />
          </BrowserWindowChrome>
        </Slide>

        {/* SLIDE 16 */}
        <Slide {...defaultBG} notes={SlideNotes16}>
          <HeaderWithSub subheading="css" isTitleSlide>
            a new spec
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 17 */}
        <Slide {...defaultBG} notes={SlideNotes17}>
          <BoxAcidTest />
        </Slide>

        {/* SLIDE 18 */}
        <Slide {...defaultBG} notes={SlideNotes18}>
          <HeaderWithSub subheading="todo" isTitleSlide>
            box model
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 19 */}
        <CodeSlide
          {...defaultCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/netscape-jss.example')} // eslint-disable-line
          ranges={[{ loc: [0, 5] }, { loc: [5, 12] }, { loc: [12, 16] }, { loc: [16, 25] }, { loc: [25, 35] }]}
          notes={SlideNotes11}
        />

        {/*
         * ======================
         * IMPLEMENTATION
         * ======================
         */}

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 36 */}
        <Slide {...defaultBG}>
          <ProfileSlideContent />
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
    );
  }
}
