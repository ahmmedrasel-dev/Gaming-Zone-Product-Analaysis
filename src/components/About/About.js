import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <section>
      <Container>
        <Row className='mt-5'>
          <Col md={6}>
            <div>
              <h1>
                Basic Questions
              </h1>
              <p>
                What is accessibility?
              </p>
              <p>
                This article starts off the module with a good look at what
                accessibility is — this includes what groups of people we need to
                consider and why, what tools different people use to interact with
                the web, and how we can make accessibility part of our web
                development workflow.
              </p>
              <p>
                HTML: A good basis for accessibility?
              </p>
              <p>
                A great deal of web content can be made accessible just by making
                sure the correct HTML elements are always used for the correct
                purpose.
              </p>
              <p>
                CSS and JavaScript accessibility best practices?
              </p>
              <p>
                CSS and JavaScript, when used properly, also have the potential to
                allow for accessible web experiences, but if misused they can
                significantly harm accessibility. This article outlines some CSS and
                JavaScript best practices that should be considered to ensure that
                even complex content is as accessible as possible.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h1>
                Advanced Questions
              </h1>
              <p>
                WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?
              </p>
              <p>
                Following on from the previous article, sometimes making complex UI
                controls that involve unsemantic HTML and dynamic JavaScript-updated
                content can be difficult. WAI-ARIA is a technology that can help
                with such problems by adding in further semantics that browsers and
                assistive technologies can recognize and use to let users know what
                is going on. Here we'll show how to use it at a basic level to
                improve accessibility.
              </p>
              <p>
                Accessible multimedia?
              </p>
              <p>
                Another category of content that can create accessibility problems
                is multimedia — video, audio, and image content need to be given
                proper textual alternatives, so they can be understood by assistive
                technologies and their users. This article shows how.
              </p>
              <p>
                Mobile accessibility?
              </p>
              <p>
                With web access on mobile devices being so popular, and popular
                platforms such as iOS and Android.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;