import React from 'react';
import { Appear, Deck, Heading, Image, Layout, Slide, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import { BlockQuote } from './components/block-quote';
import { BoxSizing } from './components/box-sizing';
import { BrowserWindowChrome } from './components/browser-window-chrome';
import { fadeInCustom } from './components/default-attrs/appear-defaults';
import { collapsedCodeBG, defaultBG, defaultCodeBG, expandedCodeBG, highlightBG } from './components/default-attrs/slide-defaults';
import { FloatGrid } from './components/float-grid';
import { HeaderWithSub } from './components/header-with-sub';
import { LayoutExpanded } from './components/layout-expanded';
import { ListWithEmphasis } from './components/list';
import { ListItemWithEmphasis } from './components/list-item';
import { MobileWindowChrome } from './components/mobile-window-chrome';
import { SubHeading } from './components/sub-heading';
import { TimelineFirstShow } from './components/timeline';
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
import SlideNotes19 from './slide-notes/19.md';
import SlideNotes20 from './slide-notes/20.md';
import SlideNotes21 from './slide-notes/21.md';
import SlideNotes22 from './slide-notes/22.md';
import SlideNotes23 from './slide-notes/23.md';
import SlideNotes24 from './slide-notes/24.md';
import SlideNotes25 from './slide-notes/25.md';
import SlideNotes26 from './slide-notes/26.md';
import SlideNotes27 from './slide-notes/27.md';
import SlideNotes28 from './slide-notes/28.md';
import SlideNotes29 from './slide-notes/29.md';
import SlideNotes30 from './slide-notes/30.md';
import SlideNotes31 from './slide-notes/31.md';
import SlideNotes32 from './slide-notes/32.md';
import SlideNotes33 from './slide-notes/33.md';
import SlideNotes34 from './slide-notes/34.md';
import SlideNotes35 from './slide-notes/35.md';
import SlideNotes36 from './slide-notes/36.md';
import SlideNotes37 from './slide-notes/37.md';
import SlideNotes38 from './slide-notes/38.md';
import SlideNotes40 from './slide-notes/40.md';
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
 * lazily load prism languages
 */
setTimeout(() => {
  require('prismjs/components/prism-css');
  require('prismjs/components/prism-scss');
}, 1000);

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
          <LayoutExpanded style={{ margin: 0 }}>
            <TimelineFirstShow minStep={0} maxStep={4} />
          </LayoutExpanded>
        </Slide>

        {/*
         * ======================
         * SIMPLE/STRUCTURED DOCUMENTS
         * ======================
         */}

        {/* SLIDE 5 */}
        <Slide {...defaultBG} notes={SlideNotes05}>
          <HeaderWithSub subheading="wilde-westean era" isTitleSlide>
            simpl(ish) documents
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
          ranges={[{ loc: [0, 4], title: <HeaderWithSub isTitleSlide>styling sites</HeaderWithSub> }, { loc: [5, 10] }, { loc: [11, 19] }]}
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
          {...expandedCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/almost-css.example')} // eslint-disable-line
          ranges={[
            { loc: [0, 10], title: <HeaderWithSub>Style Contenders</HeaderWithSub> },
            { loc: [10, 12] },
            { loc: [13, 18] },
            { loc: [19, 25] },
            { loc: [25, 28] }
          ]}
          notes={SlideNotes11}
        />

        {/* SLIDE 12 */}
        <CodeSlide
          {...defaultCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/cascading-html-stylesheets.example')} // eslint-disable-line
          ranges={[
            { loc: [0, 4], title: <HeaderWithSub isTitleSlide>Cascading HTML Style Sheets</HeaderWithSub> },
            { loc: [4, 7] },
            { loc: [7, 13] }
          ]}
          notes={SlideNotes12}
        />

        {/*
         * ======================
         * STYLISH DOCUMENTS
         * ======================
         */}

        {/* SLIDE 13 */}
        <Slide {...defaultBG} notes={SlideNotes13}>
          <TimelineFirstShow minStep={0} maxStep={1} />
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
          <>
            <HeaderWithSub>a new spec... CSS</HeaderWithSub>
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

        {/* SLIDE XX */}
        {/* <Slide {...defaultBG} notes={SlideNotes17}>
          <BoxAcidTest />
        </Slide> */}

        {/* SLIDE 17 */}
        <Slide {...defaultBG} notes={SlideNotes17}>
          <BoxSizing />
        </Slide>

        {/* SLIDE 18 */}
        <CodeSlide
          {...defaultCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/netscape-jss.example')} // eslint-disable-line
          ranges={[
            { loc: [0, 5], title: <HeaderWithSub isTitleSlide>Netscape JSSS</HeaderWithSub> },
            { loc: [5, 12] },
            { loc: [12, 16] },
            { loc: [16, 25] },
            { loc: [25, 35] }
          ]}
          notes={SlideNotes18}
        />

        {/* SLIDE 19 */}
        <Slide {...defaultBG} notes={SlideNotes19}>
          <HeaderWithSub isTitleSlide>A year later... CSS 2</HeaderWithSub>
        </Slide>

        {/* SLIDE 20 */}
        <Slide {...defaultBG} notes={SlideNotes20}>
          <FloatGrid />
        </Slide>

        {/* SLIDE 21 */}
        <CodeSlide
          {...collapsedCodeBG}
          lang="css"
          code={require('raw-loader!../assets/code-examples/clearfix.css.example')} // eslint-disable-line
          ranges={[{ loc: [0, 9], title: <HeaderWithSub isTitleSlide>Clearfix Float grid</HeaderWithSub> }]}
          notes={SlideNotes21}
        />

        {/* SLIDE 22 */}
        <Slide {...defaultBG} notes={SlideNotes22}>
          <HeaderWithSub subheading="implementation" isTitleSlide>
            Finally, an Actual CSS
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 23 */}
        <Slide {...defaultBG} notes={SlideNotes23}>
          <HeaderWithSub isTitleSlide>A year later... CSS 3 spec</HeaderWithSub>
        </Slide>

        {/*
         * ======================
         * RESPONSIVE DOCUMENTS
         * ======================
         */}

        {/* SLIDE 24 */}
        <Slide {...defaultBG} notes={SlideNotes24}>
          <TimelineFirstShow minStep={1} maxStep={2} />
        </Slide>

        {/* SLIDE 25 */}
        <Slide {...defaultBG} notes={SlideNotes25}>
          <HeaderWithSub subheading="mobilean era" isTitleSlide>
            responsive documents
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 26 */}
        <Slide {...defaultBG} notes={SlideNotes26}>
          <BrowserWindowChrome>
            <Image src={images.responsiveWebDesktop} />
          </BrowserWindowChrome>
          <Appear order={1} {...fadeInCustom(0)}>
            <div>
              <MobileWindowChrome hasChildAnimation>
                <Appear order={2} {...fadeInCustom(0)}>
                  <Image src={images.responsiveWebMobile} />
                </Appear>
              </MobileWindowChrome>
            </div>
          </Appear>
        </Slide>

        {/* SLIDE 27 */}
        <CodeSlide
          {...collapsedCodeBG}
          lang="css"
          code={require('raw-loader!../assets/code-examples/media-query.css.example')} // eslint-disable-line
          ranges={[{ loc: [0, 9], title: <HeaderWithSub isTitleSlide>Media Query</HeaderWithSub> }]}
          notes={SlideNotes27}
        />

        {/* SLIDE 28 */}
        <CodeSlide
          {...expandedCodeBG}
          lang="scss"
          code={require('raw-loader!../assets/code-examples/css-preprocessors.sass.example')} // eslint-disable-line
          ranges={[{ loc: [0, 6], title: <HeaderWithSub isTitleSlide>CSS Preprocessors</HeaderWithSub> }, { loc: [6, 15] }]}
          notes={SlideNotes28}
        />

        {/*
         * ======================
         * WEB APPS
         * ======================
         */}

        {/* SLIDE 29 */}
        <Slide {...defaultBG} notes={SlideNotes29}>
          <TimelineFirstShow minStep={1} maxStep={2} />
        </Slide>

        {/* SLIDE 30 */}
        <Slide {...defaultBG} notes={SlideNotes30}>
          <HeaderWithSub subheading="applicus era" isTitleSlide>
            web applications
          </HeaderWithSub>
        </Slide>

        {/* SLIDE 31 */}
        <Slide {...defaultBG} notes={SlideNotes31}>
          <BrowserWindowChrome>
            <Image src={images.facebookApp} />
          </BrowserWindowChrome>
        </Slide>

        {/* SLIDE 32 */}
        <CodeSlide
          {...defaultCodeBG}
          lang="css"
          code={require('raw-loader!../assets/code-examples/modern-specs.css.example')} // eslint-disable-line
          ranges={[{ loc: [0, 5], title: <HeaderWithSub isTitleSlide>Modern Specs</HeaderWithSub> }, { loc: [5, 12] }, { loc: [12, 18] }]}
          notes={SlideNotes32}
        />

        {/* SLIDE 33 */}
        <Slide {...defaultBG} notes={SlideNotes33}>
          <HeaderWithSub isTitleSlide>Componentised CSS</HeaderWithSub>
        </Slide>

        {/* SLIDE 34 */}
        <CodeSlide
          {...defaultCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/css-in-js.css.example')} // eslint-disable-line
          ranges={[{ loc: [0, 5], title: <HeaderWithSub isTitleSlide>CSS in JS</HeaderWithSub> }, { loc: [5, 13] }]}
          notes={SlideNotes34}
        />

        {/* SLIDE 35 */}
        <Slide {...defaultBG} notes={SlideNotes35}>
          <HeaderWithSub isTitleSlide>and finally...</HeaderWithSub>
        </Slide>

        {/* SLIDE 36 */}
        <CodeSlide
          {...collapsedCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/css-grid.css.example')} // eslint-disable-line
          ranges={[{ loc: [0, 5], title: <HeaderWithSub isTitleSlide>CSS Grid</HeaderWithSub> }]}
          notes={SlideNotes36}
        />

        {/*
         * ======================
         * THE FUTURE
         * ======================
         */}

        {/* SLIDE 37 */}
        <Slide {...defaultBG} notes={SlideNotes37}>
          <TimelineFirstShow minStep={3} maxStep={4} />
        </Slide>

        {/* SLIDE 38 */}
        <Slide {...defaultBG} notes={SlideNotes38}>
          <BrowserWindowChrome>
            <Image src={images.marioKart} />
          </BrowserWindowChrome>
        </Slide>

        {/* SLIDE 39 */}
        <CodeSlide
          {...expandedCodeBG}
          lang="js"
          code={require('raw-loader!../assets/code-examples/houdini.css.example')} // eslint-disable-line
          ranges={[{ loc: [0, 6], title: <HeaderWithSub isTitleSlide>CSS Houdini</HeaderWithSub> }, { loc: [6, 13] }, { loc: [13, 21] }]}
          notes={SlideNotes36}
        />

        {/* SLIDE 40 */}
        <Slide {...defaultBG} notes={SlideNotes40}>
          <HeaderWithSub subheading="future" isTitleSlide>
            excitingly styled
          </HeaderWithSub>
        </Slide>

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 41 */}
        <Slide {...defaultBG} notes={SlideNotes40}>
          <Image src={images.hgdLogo} style={{ height: '400px' }} />
        </Slide>

        {/* SLIDE 42 */}
        <Slide {...defaultBG}>
          <ProfileSlideContent />
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
    );
  }
}
