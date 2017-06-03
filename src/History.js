
import React from 'react'

export default () => (
  <history>
    <h1>History</h1>
    <p>
      In 2006 I graduated from the University of Sussex with a degree in Psychology BSc. (sorry, no CS for me).
      During university a fascination with computing, and specifically web development, grew into a real passion.
      Since getting my first job in software in 2006 I have worked in engineering ever since.
    </p>
    <p>For the next 5 years I worked at a couple of marketing agencies
      on lead generation platforms
      (<a href="https://www.linkedin.com/company/edr-agency" target="_blank">EDR</a> / <a href="https://en.wikipedia.org/wiki/Progressive_Digital_Media" target="_blank">TMN Group</a>) and
      at <a href="https://www.premierit.com/" target="_blank">Premier IT</a> leading/managing
       a couple of developers building a bespoke CMS platform.
    </p>
    <p>
      Most recently (2011 through 2017) I worked
      at <a href="https://www.ensighten.com/" target="_blank">Ensighten</a>.
      I started as a Senior Engineer and finished as a Technical Director;
      however, I spent ~50% of my time being hands on with the code, so
      'Engineering Lead' might have been a more accurate title.
      During my time at Ensighten, I was lucky enough to be able to build and
      manage some great teams (3-6 people), whilst working under some excellent
      managers.
    </p>
    <p>
      Among other things, my team and I were responsible for building:
    </p>
    <ul>
      <li>
        A <a href="https://en.wikipedia.org/wiki/Tag_management_system" target="_blank">Tag
      Management</a> platform (
        which <a href="https://developers.google.com/tag-manager/" target="_blank">google went on to build a competitor to</a>).
        <br></br>
        This platform was written in PHP and Node.js and allowed users to
        configure their 'Tags' through a central SaaS platform.
        The platform handled all our clients deploying thousands of
        tags every day.
        Once deployed the changes needed to update in near-realtime to our fleet
        of globally available webheads to be delivered to billions of client pages.
      </li>
      <li>
        A high-performance <a href="https://www.ensighten.com/products/pulse/" target="_blank">data-collection/analytics platform</a>.
        <br></br>
        Pulse primarily provided a way to dynamically manipulate (and access)
        user cookies, while storing each event for logging and analysis.
        <br></br>
        To achieve this we had to handle and record billions of Pulse events
        per-day, with the lowest latency possible.
      </li>
      <li>
        An Attribution system (which
          interestingly <a href="http://searchengineland.com/google-attribution-search-marketers-need-know-275751" target="_blank">google have
      also recently launched</a>).
      <br></br>
      This system records and analyses a users journey (or 'path to
      conversion') to make real-time decisions on where to attribute
      credit for a sale.
      <br></br>
      To achieve this we had to record each event, for each user (for each
        client) in a globally available database (Cassandra).
      This meant storing billions of events before retrieving them all to make
      real-time decisions based on the user's history... and we had to do all that in less than 150ms from browser issuing the request to
      receiving the response.
    </li>
    </ul>
  </history>
)
